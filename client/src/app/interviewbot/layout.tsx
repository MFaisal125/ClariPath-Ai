// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FiMessageSquare, FiPlus, FiSearch } from "react-icons/fi";
// import { useUser } from "@clerk/nextjs";
// import { useMyContext } from "@/context/MyContext";

// interface Chat {
//     chatId: string;
//     jobRole: string;
// }

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const { user } = useUser();
//     const { userProfile } = useMyContext();
//     const [chats, setChats] = useState<Chat[]>([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         if (userProfile?.UserId) {
//             const fetchChats = async () => {
//                 if (!user?.id) return;
//                 const userId = userProfile?.UserId;
//                 try {
//                     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/chat/${userId}`);
//                     const data = await response.json();
//                     setChats(Array.isArray(data) ? data.reverse() : []);
//                 } catch (error) {
//                     console.error("Error fetching chats:", error);
//                     setChats([]);
//                 }
//             };

//             fetchChats();
//         }
//     }, [user, userProfile]);

//     const filteredChats = chats.filter((chat) =>
//         chat.jobRole.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="relative min-h-screen pt-[10vh] flex">
//             <div className="w-72 bg-[#121212] text-white p-4 flex flex-col m-2 rounded-lg">
//                 <div className="relative">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full p-2 bg-[#1e1e1e] text-white rounded-lg pl-12 pr-4 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-all duration-200 shadow-sm border border-gray-700 hover:border-gray-500"
//                     />
//                     <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
//                 </div>

//                 <div className="mt-4 flex flex-col gap-2">
//                     {filteredChats.length > 0 ? (
//                         filteredChats.map((chat) => (
//                             <Link
//                                 key={chat.chatId}
//                                 href={`/interviewbot/${chat.chatId}`}
//                                 className="px-3 py-2 bg-[#1e1e1e] rounded-md cursor-pointer hover:bg-[#292929] flex items-center gap-2"
//                             >
//                                 <FiMessageSquare className="text-gray-400" />
//                                 <span>{chat.jobRole}</span>
//                             </Link>
//                         ))
//                     ) : (
//                         <p className="text-gray-400 text-sm text-center mt-2">
//                             No matching chats
//                         </p>
//                     )}
//                 </div>

//                 <Link
//                     href="/interviewbot"
//                     className="mt-auto flex items-center justify-center gap-2 bg-[#7d47ea] hover:bg-violet-700 text-white py-2 rounded-lg"
//                 >
//                     <FiPlus /> New Chat
//                 </Link>
//             </div>
//             {children}
//         </div>
//     );
// };

// export default Layout;

"use client";

import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { FiMessageSquare, FiPlus, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useUser } from "@clerk/nextjs";
import { useMyContext } from "@/context/MyContext";
import { usePathname } from "next/navigation";

interface Chat {
  chatId: string;
  jobRole: string;
}

const InterviewBotLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const { userProfile } = useMyContext();
  const [chats, setChats] = useState<Chat[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const fetchChats = async () => {
    if (!userProfile?.UserId) return;

    setIsLoading(true);
    try {
      const userId = userProfile.UserId;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/chat/${userId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch chats");
      }

      const data = await response.json();
      setChats(Array.isArray(data) ? data.reverse() : []);
    } catch (error) {
      console.error("Error fetching chats:", error);
      setChats([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userProfile?.UserId) {
      fetchChats();
    }
  }, [userProfile?.UserId]);

  useEffect(() => {
    if (pathname.includes("/interviewbot/") && userProfile?.UserId) {
      const timeoutId = setTimeout(() => {
        fetchChats();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, userProfile?.UserId]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const menuButton = document.getElementById("sidebar-menu-button");

      if (
        isSidebarOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const filteredChats = chats.filter((chat) =>
    chat.jobRole.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SidebarContent = () => (
    <>
      <div className="p-3 lg:p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-base lg:text-lg font-bold text-white">
            Interview Bot
          </h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 smooth-transition"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2.5 lg:p-2.5 bg-[#1e1e1e] text-white rounded-lg pl-9 pr-4 focus-ring smooth-transition border border-gray-700 hover:border-gray-500 text-sm"
          />
          <FiSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-3 lg:p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-500"></div>
          </div>
        ) : filteredChats.length > 0 ? (
          <div className="space-y-1.5">
            {filteredChats.map((chat) => (
              <Link
                key={chat.chatId}
                href={`/interviewbot/${chat.chatId}`}
                className={`block px-3 py-2.5 lg:py-2.5 bg-[#1e1e1e] rounded-lg cursor-pointer hover:bg-[#292929] smooth-transition ${
                  pathname.includes(chat.chatId)
                    ? "bg-[#7d47ea]/20 border border-[#7d47ea]/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <FiMessageSquare className="text-gray-400 flex-shrink-0 text-base" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate text-sm">
                      {chat.jobRole}
                    </p>
                    <p className="text-gray-400 text-xs">Interview Chat</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <FiMessageSquare className="mx-auto text-gray-600 text-2xl mb-3" />
            <p className="text-gray-400 text-sm">
              {searchQuery ? "No matching chats found" : "No chats yet"}
            </p>
          </div>
        )}
      </div>

      <div className="p-3 lg:p-4 border-t border-gray-800">
        <Link
          href="/interviewbot"
          className="w-full flex items-center justify-center gap-2 bg-[#7d47ea] hover:bg-violet-700 text-white py-2.5 lg:py-2.5 rounded-lg font-medium smooth-transition text-sm"
        >
          <FiPlus className="text-base" />
          New Interview
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] relative pt-20">
      {/* Mobile Sidebar Toggle Button - Only visible when sidebar is closed */}
      {!isSidebarOpen && (
        <button
          id="sidebar-menu-button"
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-24 left-4 z-30 p-2.5 bg-[#7d47ea] hover:bg-violet-700 text-white rounded-full shadow-lg smooth-transition"
        >
          <FiMenu size={18} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 xl:w-72 bg-[#121212] text-white flex-col border-r border-gray-800 fixed left-0 top-20 bottom-0">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className={`lg:hidden fixed top-20 left-0 bottom-0 w-80 bg-[#121212] text-white flex flex-col border-r border-gray-800 z-50 transform smooth-transition ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64 xl:ml-72">{children}</div>
    </div>
  );
};

export default InterviewBotLayout;
