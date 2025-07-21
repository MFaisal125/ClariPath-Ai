// 'use client';

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from 'next/navigation';
// import { useUser } from "@clerk/nextjs";
// import { useMyContext } from "@/context/MyContext";

// export default function Interviewbot() {
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();
//   const { user } = useUser();
//   const { userProfile } = useMyContext();

//   const handleSubmit = async () => {
//     if (!user) {
//       alert("Please login for using Interviwe Prep bot")
//       return;
//     }

//     if (!jobRole.trim() || !jobDescription.trim()) return;

//     setIsSubmitting(true);

//     try {
//       const userId = userProfile.UserId;

//       const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId, jobRole, jobDescription }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to create chat");
//       }

//       const data = await response.json();
//       router.push(`/interviewbot/${data.chat.chatId}`);
//     } catch (error) {
//       console.error("Error creating chat:", error instanceof Error ? error.message : error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-[90vh] w-full max-w-6xl text-white p-4 pb-2">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-[#121212] p-6 rounded-lg shadow-lg w-96"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Enter Job Details</h2>

//         <label className="block mb-2">Job Role:</label>
//         <motion.input
//           whileFocus={{ scale: 1.02 }}
//           type="text"
//           value={jobRole}
//           onChange={(e) => setJobRole(e.target.value)}
//           className="w-full p-2 rounded bg-[#1e1e1e] text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//           placeholder="e.g., Data Scientist, UI/UX Designer..."
//         />

//         <label className="block mt-4 mb-2">Job Description:</label>
//         <motion.textarea
//           whileFocus={{ scale: 1.02 }}
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//           className="w-full p-2 rounded bg-[#1e1e1e] text-white outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//           placeholder="Describe the role, responsibilities, and expectations in detail..."
//           rows={4}
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full mt-4 bg-[#7d47ea] hover:bg-violet-700 p-2 rounded text-white font-semibold flex justify-center items-center gap-2 transition-all duration-200"
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? (
//             <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
//           ) : (
//             "Submit"
//           )}
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import type React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useUser } from "@clerk/nextjs";
// import { useMyContext } from "@/context/MyContext";
// import { Briefcase, FileText, Loader2, Sparkles } from "lucide-react";

// export default function NewInterviewPage() {
//   const [jobRole, setJobRole] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const { user } = useUser();
//   const { userProfile } = useMyContext();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (!user) {
//       setError("Please login to use Interview Prep Bot");
//       return;
//     }

//     if (!jobRole.trim() || !jobDescription.trim()) {
//       setError("Please fill in both job role and description");
//       return;
//     }

//     if (!userProfile?.UserId) {
//       setError("User profile not loaded. Please refresh the page.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const userId = userProfile.UserId;
//       const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

//       if (!backendUrl) {
//         throw new Error("Backend URL not configured");
//       }

//       console.log("🚀 Creating chat with:", { userId, jobRole, backendUrl });

//       const response = await fetch(`${backendUrl}/user/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({ userId, jobRole, jobDescription }),
//       });

//       console.log("📡 Response status:", response.status);
//       console.log(
//         "📡 Response headers:",
//         Object.fromEntries(response.headers.entries())
//       );

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("❌ Response error:", errorText);

//         let errorMessage = "Failed to create interview session";
//         try {
//           const errorData = JSON.parse(errorText);
//           errorMessage = errorData.message || errorMessage;
//         } catch {
//           errorMessage = `Server error (${response.status}): ${response.statusText}`;
//         }

//         throw new Error(errorMessage);
//       }

//       const data = await response.json();
//       console.log("✅ Chat created successfully:", data);

//       router.push(`/interviewbot/${data.chat.chatId}`);
//     } catch (error) {
//       console.error("❌ Error creating chat:", error);

//       if (error instanceof Error) {
//         if (error.message.includes("fetch")) {
//           setError(
//             "Unable to connect to server. Please check your internet connection and try again."
//           );
//         } else if (error.message.includes("CORS")) {
//           setError("Server configuration error. Please contact support.");
//         } else {
//           setError(error.message);
//         }
//       } else {
//         setError("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const popularRoles = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Full Stack Developer",
//     "Data Scientist",
//     "Product Manager",
//     "UI/UX Designer",
//   ];

//   return (
//     <div className="flex-1 overflow-y-auto bg-[#0a0a0a] min-h-screen hide-scrollbar">
//       <div className="flex items-center justify-center p-4 lg:p-6 min-h-screen">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-xl lg:max-w-2xl"
//         >
//           {/* Header */}
//           <div className="text-center mb-4 lg:mb-6">
//             <div className="flex items-center justify-center gap-2 mb-3">
//               <Sparkles className="text-[#7d47ea]" size={20} />
//               <h1 className="text-xl lg:text-2xl font-bold text-white">
//                 Start New Interview
//               </h1>
//             </div>
//             <p className="text-gray-400 text-sm lg:text-base px-4">
//               Prepare for your dream job with AI-powered interview practice
//             </p>
//           </div>

//           {/* Error Display */}
//           {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
//             >
//               {error}
//             </motion.div>
//           )}

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-[#121212] rounded-xl p-4 lg:p-6 border border-gray-800"
//           >
//             <div className="space-y-4 lg:space-y-5">
//               {/* Job Role */}
//               <div>
//                 <label className="flex items-center gap-2 text-white font-medium mb-2 text-sm">
//                   <Briefcase size={16} className="text-[#7d47ea]" />
//                   Job Role
//                 </label>
//                 <input
//                   type="text"
//                   value={jobRole}
//                   onChange={(e) => setJobRole(e.target.value)}
//                   className="input-professional w-full"
//                   placeholder="e.g., Frontend Developer, Data Scientist, Product Manager..."
//                   required
//                   disabled={isSubmitting}
//                 />

//                 {/* Popular Roles */}
//                 <div className="mt-2.5">
//                   <p className="text-gray-400 text-xs mb-2">Popular roles:</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {popularRoles.map((role) => (
//                       <button
//                         key={role}
//                         type="button"
//                         onClick={() => setJobRole(role)}
//                         disabled={isSubmitting}
//                         className="px-2.5 py-1 bg-[#1e1e1e] hover:bg-[#7d47ea]/20 text-gray-300 hover:text-white text-xs rounded-full border border-gray-700 hover:border-[#7d47ea]/30 smooth-transition disabled:opacity-50"
//                       >
//                         {role}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Job Description */}
//               <div>
//                 <label className="flex items-center gap-2 text-white font-medium mb-2 text-sm">
//                   <FileText size={16} className="text-[#7d47ea]" />
//                   Job Description
//                 </label>
//                 <textarea
//                   value={jobDescription}
//                   onChange={(e) => setJobDescription(e.target.value)}
//                   className="input-professional w-full resize-none"
//                   placeholder="Describe the role, responsibilities, required skills, and any specific requirements..."
//                   rows={5}
//                   required
//                   disabled={isSubmitting}
//                 />
//                 <p className="text-gray-500 text-xs mt-1.5">
//                   Be specific about skills, experience level, and key
//                   responsibilities for better interview questions.
//                 </p>
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn-primary w-full py-2.5 lg:py-3 text-sm"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="animate-spin" size={18} />
//                     Creating Interview...
//                   </>
//                 ) : (
//                   <>
//                     <Sparkles size={18} />
//                     Start Interview
//                   </>
//                 )}
//               </motion.button>
//             </div>
//           </form>

//           {/* Footer */}
//           <div className="mt-4 lg:mt-6 text-center space-y-1.5">
//             <p className="text-gray-500 text-xs">
//               Your interview session will be saved and you can continue anytime
//             </p>
//             <div className="flex items-center justify-center gap-3 text-gray-600 text-xs">
//               <span>✓ AI-Powered Questions</span>
//               <span>✓ Real-time Feedback</span>
//               <span>✓ Progress Tracking</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useMyContext } from "@/context/MyContext";
import { Briefcase, FileText, Loader2, Sparkles } from "lucide-react";

export default function NewInterviewPage() {
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const { userProfile } = useMyContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to use Interview Prep Bot");
      return;
    }

    if (!jobRole.trim() || !jobDescription.trim()) {
      alert("Please fill in both job role and description");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userProfile?.UserId,
            jobRole,
            jobDescription,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create interview session");
      }

      const data = await response.json();
      router.push(`/interviewbot/${data.chat.chatId}`);
    } catch (error) {
      console.error("Error creating chat:", error);
      alert("Failed to create interview session. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const popularRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0a0a] min-h-screen hide-scrollbar">
      <div className="flex items-center justify-center p-4 lg:p-6 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:max-w-2xl"
        >
          {/* Header */}
          <div className="text-center mb-4 lg:mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="text-[#7d47ea]" size={20} />
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Start New Interview
              </h1>
            </div>
            <p className="text-gray-400 text-sm lg:text-base px-4">
              Prepare for your dream job with AI-powered interview practice
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#121212] rounded-xl p-4 lg:p-6 border border-gray-800"
          >
            <div className="space-y-4 lg:space-y-5">
              {/* Job Role */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 text-sm">
                  <Briefcase size={16} className="text-[#7d47ea]" />
                  Job Role
                </label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="w-full p-2.5 lg:p-3 bg-[#1e1e1e] text-white rounded-lg border border-gray-700 focus:border-[#7d47ea] focus:ring-2 focus:ring-[#7d47ea]/20 outline-none smooth-transition text-sm"
                  placeholder="e.g., Frontend Developer, Data Scientist, Product Manager..."
                  required
                />

                {/* Popular Roles */}
                <div className="mt-2.5">
                  <p className="text-gray-400 text-xs mb-2">Popular roles:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {popularRoles.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setJobRole(role)}
                        className="px-2.5 py-1 bg-[#1e1e1e] hover:bg-[#7d47ea]/20 text-gray-300 hover:text-white text-xs rounded-full border border-gray-700 hover:border-[#7d47ea]/30 smooth-transition"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label className="flex items-center gap-2 text-white font-medium mb-2 text-sm">
                  <FileText size={16} className="text-[#7d47ea]" />
                  Job Description
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full p-2.5 lg:p-3 bg-[#1e1e1e] text-white rounded-lg border border-gray-700 focus:border-[#7d47ea] focus:ring-2 focus:ring-[#7d47ea]/20 outline-none smooth-transition resize-none text-sm hide-scrollbar"
                  placeholder="Describe the role, responsibilities, required skills, and any specific requirements..."
                  rows={5}
                  required
                />
                <p className="text-gray-500 text-xs mt-1.5">
                  Be specific about skills, experience level, and key
                  responsibilities for better interview questions.
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7d47ea] hover:bg-violet-700 text-white font-semibold py-2.5 lg:py-3 rounded-lg smooth-transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Creating Interview...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Start Interview
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-4 lg:mt-6 text-center space-y-1.5">
            <p className="text-gray-500 text-xs">
              Your interview session will be saved and you can continue anytime
            </p>
            <div className="flex items-center justify-center gap-3 text-gray-600 text-xs">
              <span>✓ AI-Powered Questions</span>
              <span>✓ Real-time Feedback</span>
              <span>✓ Progress Tracking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
