// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Uparrow from "@/assets/uil_arrow-up.svg";
// import { NavLinks } from "@/components/NavLinks";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import Link from "next/link";
// import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
// import logo from "@/assets/Logo.svg";
// import { useMyContext } from "@/context/MyContext";

// export default function Navbar() {
//   const { userProfile, setUserProfile } = useMyContext();
//   const { user } = useUser();

//   useEffect(() => {
//     if (user && user.primaryEmailAddress) {
//       const fetchUserData = async () => {
//         try {
//             const email = user.primaryEmailAddress?.emailAddress || "";
//           const response = await fetch(
//             `${
//               process.env.NEXT_PUBLIC_BACKEND_URL
//             }/user/verify/?email=${encodeURIComponent(email)}`
//           );

//           if (response.ok) {
//             const data = await response.json();
//             setUserProfile(data);
//           } else {
//             const newUser = {
//               name: user.fullName,
//               picture: user.imageUrl,
//               email: email,
//             };

//             const createResponse = await fetch(
//               `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newUser),
//               }
//             );

//             if (createResponse.status === 201) {
//               const createdUser = await createResponse.json();
//               console.log(createdUser);
//               setUserProfile(createdUser);
//             } else {
//               console.error("Error creating user");
//             }
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       };

//       fetchUserData();
//     }
//   }, [user, setUserProfile]);

//   return (
//     <nav className="fixed top-0 backdrop-blur-md z-30 w-full">
//       <div className="flex justify-between items-center h-[10vh] px-6 md:px-32 w-full">
//         <div className="flex gap-2 items-center">
//           <Image src={logo} alt="Logo" width={35} height={35} />
//           <Link
//             href="/"
//             className="font-medium font-chillax text-[1.2rem] md:text-[1.5rem] text-white"
//           >
//             CAREER CRAFT AI
//           </Link>
//         </div>

//         <div className="hidden md:flex font-medium">
//           <NavLinks />
//         </div>

//         <SignedOut>
//           <Link href="/sign-in" className="hidden md:flex">
//             <HoverBorderGradient
//               containerClassName="rounded-full"
//               as="button"
//               className="bg-[#171717] flex items-center px-4 py-2 rounded-full active:bg-[#7D47EA]"
//             >
//               <span>Sign in</span>
//               <Image src={Uparrow} alt="up-arrow" className="ml-2" />
//             </HoverBorderGradient>
//           </Link>
//         </SignedOut>

//         <SignedIn>
//           <UserButton />
//         </SignedIn>

//         {/* Mobile Menu Button (visible on small screens) */}
//         <div className="flex md:hidden">
//           <button className="text-white">
//             <Image src={Uparrow} alt="mobile-menu" width={30} height={30} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X, ChevronDown, Sparkles, Zap } from "lucide-react";
import { useMyContext } from "@/context/MyContext";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import logo from "@/assets/Logo.svg";
import Uparrow from "@/assets/uil_arrow-up.svg";

const navItems = [
  {
    title: "AI Advisor",
    href: "/advisor",
    description: "Get personalized career guidance",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Portfolios",
    href: "/portfolios",
    description: "Showcase your best work",
    icon: "💼",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Roadmaps",
    href: "/roadmap",
    description: "Plan your career journey",
    icon: "🗺️",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Interview Bot",
    href: "/interviewbot",
    description: "Practice with AI interviewer",
    icon: "🎯",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Navbar() {
  const { userProfile, setUserProfile } = useMyContext();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // User data fetching
  useEffect(() => {
    if (user && user.primaryEmailAddress) {
      const fetchUserData = async () => {
        try {
          const email = user.primaryEmailAddress?.emailAddress || "";
          const response = await fetch(
            `${
              process.env.NEXT_PUBLIC_BACKEND_URL
            }/user/verify/?email=${encodeURIComponent(email)}`
          );

          if (response.ok) {
            const data = await response.json();
            setUserProfile(data);
          } else {
            const newUser = {
              name: user.fullName,
              picture: user.imageUrl,
              email: email,
            };

            const createResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
              }
            );

            if (createResponse.status === 201) {
              const createdUser = await createResponse.json();
              setUserProfile(createdUser);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [user, setUserProfile]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("mobile-menu-button");

      if (
        isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Premium Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        {/* Premium gradient border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <Image
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
              </div>
              <Link href="/" className="relative">
                <span className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  CAREER CRAFT AI
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onMouseEnter={() => setActiveItem(item.title)}
                  onMouseLeave={() => setActiveItem(null)}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 rounded-xl hover:bg-white/5"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  {/* Premium Dropdown */}
                  <AnimatePresence>
                    {activeItem === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
                      >
                        <div
                          className={`h-1 bg-gradient-to-r ${item.gradient}`}
                        />
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{item.icon}</span>
                            <h3 className="font-semibold text-white">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                          <div className="mt-3 flex items-center text-purple-400 text-sm">
                            <Sparkles className="w-4 h-4 mr-1" />
                            <span>Explore now</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Premium User Section */}
              <SignedOut>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:block"
                >
                  <Link href="/sign-in">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-white/10 flex items-center px-6 py-3 rounded-full hover:from-purple-800/60 hover:to-blue-800/60 transition-all duration-300 group"
                    >
                      <span className="text-white font-medium">Sign in</span>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2"
                      >
                        <Image
                          src={Uparrow || "/placeholder.svg"}
                          alt="up-arrow"
                          width={16}
                          height={16}
                        />
                      </motion.div>
                    </HoverBorderGradient>
                  </Link>
                </motion.div>
              </SignedOut>

              <SignedIn>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse" />
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-10 h-10 lg:w-12 lg:h-12 border-2 border-white/20 hover:border-white/40 transition-all duration-300",
                      },
                    }}
                  />
                </motion.div>
              </SignedIn>

              {/* Premium Mobile Menu Button */}
              <motion.button
                id="mobile-menu-button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-md opacity-50" />
                      <Image
                        src={logo || "/placeholder.svg"}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="relative z-10"
                      />
                    </div>
                    <span className="font-bold text-lg bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      CAREER CRAFT AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group block p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 hover:to-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                        <Zap className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Sign In */}
              <SignedOut>
                <div className="p-6 border-t border-white/10">
                  <Link
                    href="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      <span>Sign in to continue</span>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={Uparrow || "/placeholder.svg"}
                          alt="up-arrow"
                          width={16}
                          height={16}
                        />
                      </motion.div>
                    </motion.button>
                  </Link>
                </div>
              </SignedOut>

              {/* Premium Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Powered by AI</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
