// "use client";
// import { AudioLines, SendHorizontal, Upload, Loader2 } from "lucide-react";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import advisorimg from "@/assets/Advisor.svg";

// type Message = {
//   text: string;
//   sender: "user" | "bot";
// };

// export default function Chatbot() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/advisor", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message:
//             "You are CareerCraft AI—your go-to senior for career advice. Stay focused on career development, jobs, skills, and growth. Be chill, clear, and practical, using simple English. If a question isn’t directly related to career advice, such as personal opinions, general knowledge, abstract queries, or ethical debates, respond: 'I’m here for career advice! Ask about jobs or career growth.' Avoid discussing your own identity or giving speculative answers. Stick to practical, actionable guidance for career advancement. This is the user's prompt -> " +
//             input,
//         }),
//       });

//       const data = await response.json();
//       console.log(data);
//       const botReply =
//         data.choices?.[0]?.message?.content || "Error: No response received";

//       setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col justify-end items-center h-screen bg-black text-white p-4">
//       <div className="w-full max-w-3xl flex flex-col space-y-2 overflow-y-auto h-[65vh] p-2 no-scrollbar">
//         {messages.length == 0 && (
//           <div className="w-full h-full flex items-center justify-center">
//             <Image src={advisorimg} alt="d" />
//           </div>
//         )}
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-3 rounded-lg max-w-md ${
//                 msg.sender === "user" ? "bg-[#7d47ea]/70" : "bg-gray-700"
//               }`}
//             >
//               <ReactMarkdown>{msg.text}</ReactMarkdown>
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="flex justify-start">
//             <div className="p-3 rounded-lg max-w-md bg-gray-700 flex items-center space-x-2">
//               <Loader2 className="animate-spin" size={20} />
//               <span>Thinking...</span>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="w-full max-w-3xl flex items-center space-x-2 mt-4">
//         <div className="bg-[#171717] rounded-lg px-4 pt-4 pb-2 w-full max-w-3xl">
//           <div className="flex items-center justify-between space-x-2 mb-2">
//             <input
//               type="text"
//               className="flex-1 bg-[#171717] text-white outline-none w-full max-w-3xl px-2"
//               placeholder="Chat with AI Career Advisor..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-[#7d47ea] p-2 font-semibold min-w-max rounded-full
//                             hover:scale-105
//                             active:bg-[radial-gradient(72.97%_270%_at_50%_50%,_rgb(150,100,250)_0%,_rgb(90,20,220)_85%)]
//                             active:shadow-[rgba(150,100,250,0.75)_0px_2px_10px_0px,_rgb(150,100,250)_0px_1px_1px_0px_inset]
//                             active:scale-95"
//               disabled={loading}
//             >
//               {loading ? (
//                 <Loader2 className="animate-spin" size={20} />
//               ) : (
//                 <SendHorizontal />
//               )}
//             </button>
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <button className="p-2 rounded-full border hover:scale-105 hover:bg-gray-700">
//               <Upload />
//             </button>
//             <button className="p-2 rounded-full hover:scale-110">
//               <AudioLines />
//             </button>
//           </div>
//         </div>
//       </div>
//       <p className="text-sm font-light mt-2">
//         AI suggestions may not be perfect. Please verify before use.
//       </p>
//     </div>
//   );
// }

// "use client";
// import { AudioLines, SendHorizontal, Upload, Loader2 } from "lucide-react";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import advisorimg from "@/assets/Advisor.svg";

// type Message = {
//   text: string;
//   sender: "user" | "bot";
// };

// export default function Chatbot() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/advisor", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message:
//             "You are CareerCraft AI—your go-to senior for career advice. Stay focused on career development, jobs, skills, and growth. Be chill, clear, and practical, using simple English. If a question isn't directly related to career advice, such as personal opinions, general knowledge, abstract queries, or ethical debates, respond: 'I'm here for career advice! Ask about jobs or career growth.' Avoid discussing your own identity or giving speculative answers. Stick to practical, actionable guidance for career advancement. This is the user's prompt -> " +
//             input,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.error || `HTTP error! status: ${response.status}`
//         );
//       }

//       const data = await response.json();
//       console.log("API Response:", data);

//       // Handle both success and error responses
//       if (data.error) {
//         setMessages((prev) => [
//           ...prev,
//           {
//             text: `Error: ${data.error}`,
//             sender: "bot",
//           },
//         ]);
//       } else {
//         const botReply =
//           data.choices?.[0]?.message?.content ||
//           "Sorry, I couldn't generate a response.";
//         setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//       }
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: `Sorry, there was an error: ${
//             error instanceof Error ? error.message : "Unknown error"
//           }. Please try again.`,
//           sender: "bot",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col justify-end items-center h-screen bg-black text-white p-4">
//       <div className="w-full max-w-3xl flex flex-col space-y-2 overflow-y-auto h-[65vh] p-2 no-scrollbar">
//         {messages.length == 0 && (
//           <div className="w-full h-full flex items-center justify-center">
//             <Image
//               src={advisorimg || "/placeholder.svg"}
//               alt="Career Advisor"
//             />
//           </div>
//         )}
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-3 rounded-lg max-w-md ${
//                 msg.sender === "user" ? "bg-[#7d47ea]/70" : "bg-gray-700"
//               }`}
//             >
//               <ReactMarkdown>{msg.text}</ReactMarkdown>
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="flex justify-start">
//             <div className="p-3 rounded-lg max-w-md bg-gray-700 flex items-center space-x-2">
//               <Loader2 className="animate-spin" size={20} />
//               <span>Thinking...</span>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="w-full max-w-3xl flex items-center space-x-2 mt-4">
//         <div className="bg-[#171717] rounded-lg px-4 pt-4 pb-2 w-full max-w-3xl">
//           <div className="flex items-center justify-between space-x-2 mb-2">
//             <input
//               type="text"
//               className="flex-1 bg-[#171717] text-white outline-none w-full max-w-3xl px-2"
//               placeholder="Chat with AI Career Advisor..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-[#7d47ea] p-2 font-semibold min-w-max rounded-full
//                             hover:scale-105
//                             active:bg-[radial-gradient(72.97%_270%_at_50%_50%,_rgb(150,100,250)_0%,_rgb(90,20,220)_85%)]
//                             active:shadow-[rgba(150,100,250,0.75)_0px_2px_10px_0px,_rgb(150,100,250)_0px_1px_1px_0px_inset]
//                             active:scale-95"
//               disabled={loading}
//             >
//               {loading ? (
//                 <Loader2 className="animate-spin" size={20} />
//               ) : (
//                 <SendHorizontal />
//               )}
//             </button>
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <button className="p-2 rounded-full border hover:scale-105 hover:bg-gray-700">
//               <Upload />
//             </button>
//             <button className="p-2 rounded-full hover:scale-110">
//               <AudioLines />
//             </button>
//           </div>
//         </div>
//       </div>
//       <p className="text-sm font-light mt-2">
//         AI suggestions may not be perfect. Please verify before use.
//       </p>
//     </div>
//   );
// }

// "use client";
// import {
//   AudioLines,
//   SendHorizontal,
//   Upload,
//   Loader2,
//   Briefcase,
// } from "lucide-react";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import advisorimg from "@/assets/Advisor.svg";

// type Message = {
//   text: string;
//   sender: "user" | "bot";
// };

// const CAREER_SUGGESTIONS = [
//   "How do I switch careers to tech?",
//   "Tips for salary negotiation",
//   "How to improve my resume?",
//   "Best skills to learn in 2024",
//   "How to prepare for interviews?",
//   "Building a professional network",
// ];

// export default function Chatbot() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const sendMessage = async (messageText?: string) => {
//     const textToSend = messageText || input;
//     if (!textToSend.trim()) return;

//     const userMessage: Message = { text: textToSend, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/advisor", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: textToSend,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.error || `HTTP error! status: ${response.status}`
//         );
//       }

//       const data = await response.json();
//       console.log("API Response:", data);

//       const botReply =
//         data.choices?.[0]?.message?.content ||
//         "I'm here to help with your career! Please try asking again.";

//       setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
//     } catch (error) {
//       console.error("Error fetching AI response:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "I'm having trouble connecting right now, but I'm here for your career questions! Please try again.",
//           sender: "bot",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen bg-black text-white">
//       {/* Header */}
//       <div className="flex-shrink-0 bg-[#0a0a0a] border-b border-gray-800 px-4 py-3">
//         <div className="max-w-7xl mx-auto flex items-center space-x-3">
//           <Briefcase className="text-[#7d47ea]" size={24} />
//           <div>
//             <h1 className="text-lg font-semibold text-white">CareerCraft AI</h1>
//             <p className="text-xs text-gray-400">Professional Career Advisor</p>
//           </div>
//         </div>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-hidden">
//         <div className="h-full max-w-7xl mx-auto px-4 py-4">
//           <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
//             <div className="space-y-4 pb-4">
//               {messages.length === 0 && (
//                 <div className="flex flex-col items-center justify-center h-full min-h-[400px] space-y-8">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-4 bg-[#7d47ea]/10 rounded-full">
//                       <Image
//                         src={advisorimg || "/placeholder.svg"}
//                         alt="Career Advisor"
//                         className="w-16 h-16"
//                       />
//                     </div>
//                   </div>
//                   <div className="text-center max-w-2xl">
//                     <h2 className="text-3xl font-bold text-[#7d47ea] mb-3">
//                       Welcome to CareerCraft AI
//                     </h2>
//                     <p className="text-gray-300 text-lg mb-8">
//                       Your professional career advisor with unlimited free
//                       guidance. Get expert advice on career development, job
//                       search, skills, and professional growth.
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-4xl">
//                     {CAREER_SUGGESTIONS.map((suggestion, index) => (
//                       <button
//                         key={index}
//                         onClick={() => sendMessage(suggestion)}
//                         className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 hover:border-[#7d47ea]/50 p-4 rounded-xl transition-all duration-200 text-left hover:scale-[1.02] hover:shadow-lg hover:shadow-[#7d47ea]/10"
//                       >
//                         <div className="text-sm font-medium text-white mb-1">
//                           {suggestion}
//                         </div>
//                         <div className="text-xs text-gray-400">
//                           Click to ask →
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex ${
//                     msg.sender === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div className="flex items-start space-x-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[75%]">
//                     {msg.sender === "bot" && (
//                       <div className="flex-shrink-0 w-8 h-8 bg-[#7d47ea] rounded-full flex items-center justify-center mt-1">
//                         <Briefcase size={16} />
//                       </div>
//                     )}
//                     <div
//                       className={`px-4 py-3 rounded-2xl ${
//                         msg.sender === "user"
//                           ? "bg-[#7d47ea] text-white rounded-br-md"
//                           : "bg-[#1a1a1a] border border-gray-700 text-gray-100 rounded-bl-md"
//                       }`}
//                     >
//                       <ReactMarkdown
//                         className={`prose max-w-none ${
//                           msg.sender === "user"
//                             ? "prose-invert prose-sm"
//                             : "prose-invert prose-sm prose-headings:text-white prose-strong:text-white prose-code:text-[#7d47ea] prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-gray-700"
//                         }`}
//                       >
//                         {msg.text}
//                       </ReactMarkdown>
//                     </div>
//                     {msg.sender === "user" && (
//                       <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mt-1">
//                         <span className="text-xs font-medium">U</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {loading && (
//                 <div className="flex justify-start">
//                   <div className="flex items-start space-x-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[75%]">
//                     <div className="flex-shrink-0 w-8 h-8 bg-[#7d47ea] rounded-full flex items-center justify-center">
//                       <Briefcase size={16} />
//                     </div>
//                     <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[#1a1a1a] border border-gray-700 flex items-center space-x-3">
//                       <Loader2
//                         className="animate-spin text-[#7d47ea]"
//                         size={20}
//                       />
//                       <span className="text-gray-300">
//                         Analyzing your career question...
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Input Area */}
//       <div className="flex-shrink-0 bg-[#0a0a0a] border-t border-gray-800 px-4 py-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl px-4 py-3">
//             <div className="flex items-center space-x-3 mb-3">
//               <input
//                 type="text"
//                 className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-base"
//                 placeholder="Ask about career advice, job search, skills, interviews, salary negotiation..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 disabled={loading}
//               />
//               <button
//                 onClick={() => sendMessage()}
//                 className="bg-[#7d47ea] hover:bg-[#6d37da] p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
//                 disabled={loading || !input.trim()}
//               >
//                 {loading ? (
//                   <Loader2 className="animate-spin" size={20} />
//                 ) : (
//                   <SendHorizontal size={20} />
//                 )}
//               </button>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-[#2a2a2a] transition-colors">
//                   <Upload size={18} />
//                 </button>
//                 <button className="p-2 rounded-lg hover:bg-[#2a2a2a] transition-colors">
//                   <AudioLines size={18} />
//                 </button>
//               </div>
//               <div className="text-xs text-gray-500">
//                 🚀{" "}
//                 <span className="text-[#7d47ea] font-medium">
//                   Unlimited & Free
//                 </span>{" "}
//                 • Professional Career Guidance
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  AudioLines,
  SendHorizontal,
  Upload,
  Loader2,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import advisorimg from "@/assets/Advisor.svg";

type Message = {
  text: string;
  sender: "user" | "bot";
};

const CAREER_SUGGESTIONS = [
  "How do I switch careers to tech?",
  "Tips for salary negotiation",
  "How to improve my resume?",
  "Best skills to learn in 2024",
  "How to prepare for interviews?",
  "Building a professional network",
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = { text: textToSend, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      console.log("🚀 Sending message:", textToSend);

      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
        }),
      });

      console.log("📡 Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("✅ Response received:", data);

      const botReply =
        data.choices?.[0]?.message?.content ||
        "I'm here to help with your career and business questions! Please try asking again.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("❌ Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm having a brief connection issue, but I'm here for your professional questions! Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <div className="flex-shrink-0 bg-[#0a0a0a] border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center space-x-3">
          <Briefcase className="text-[#7d47ea]" size={24} />
          <div>
            <h1 className="text-lg font-semibold text-white">CareerCraft AI</h1>
            <p className="text-xs text-gray-400">
              Professional Career & Business Advisor
            </p>
          </div>
          <div className="ml-auto">
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
              🚀 Fast & Unlimited
            </span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 py-4">
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <div className="space-y-4 pb-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-[#7d47ea]/10 rounded-full">
                      <Image
                        src={advisorimg || "/placeholder.svg"}
                        alt="Career Advisor"
                        className="w-16 h-16"
                      />
                    </div>
                  </div>
                  <div className="text-center max-w-2xl">
                    <h2 className="text-3xl font-bold text-[#7d47ea] mb-3">
                      Welcome to CareerCraft AI
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                      Your professional career & business advisor with unlimited
                      free guidance. Get expert advice on career development,
                      business strategy, and professional growth.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-4xl">
                    {CAREER_SUGGESTIONS.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => sendMessage(suggestion)}
                        className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-gray-700 hover:border-[#7d47ea]/50 p-4 rounded-xl transition-all duration-200 text-left hover:scale-[1.02] hover:shadow-lg hover:shadow-[#7d47ea]/10"
                      >
                        <div className="text-sm font-medium text-white mb-1">
                          {suggestion}
                        </div>
                        <div className="text-xs text-gray-400">
                          Click to ask →
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex items-start space-x-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[75%]">
                    {msg.sender === "bot" && (
                      <div className="flex-shrink-0 w-8 h-8 bg-[#7d47ea] rounded-full flex items-center justify-center mt-1">
                        <Briefcase size={16} />
                      </div>
                    )}
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-[#7d47ea] text-white rounded-br-md"
                          : "bg-[#1a1a1a] border border-gray-700 text-gray-100 rounded-bl-md"
                      }`}
                    >
                      <ReactMarkdown
                        className={`prose max-w-none ${
                          msg.sender === "user"
                            ? "prose-invert prose-sm"
                            : "prose-invert prose-sm prose-headings:text-white prose-strong:text-white prose-code:text-[#7d47ea] prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-gray-700"
                        }`}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                    {msg.sender === "user" && (
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-xs font-medium">U</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[90%] lg:max-w-[80%] xl:max-w-[75%]">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#7d47ea] rounded-full flex items-center justify-center">
                      <Briefcase size={16} />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[#1a1a1a] border border-gray-700 flex items-center space-x-3">
                      <Loader2
                        className="animate-spin text-[#7d47ea]"
                        size={20}
                      />
                      <span className="text-gray-300">
                        Generating professional advice....
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Compact Input Area */}
      <div className="flex-shrink-0 bg-[#0a0a0a] border-t border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-2">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm py-1"
                placeholder="Ask about career advice, business strategy, interviews, salary..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
              />
              <div className="flex items-center space-x-2">
                <button className="p-1.5 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-[#2a2a2a] transition-colors">
                  <Upload size={16} />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <AudioLines size={16} />
                </button>
                <button
                  onClick={() => sendMessage()}
                  className="bg-[#7d47ea] hover:bg-[#6d37da] p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !input.trim()}
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <SendHorizontal size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="text-xs text-gray-500">
              🚀{" "}
              <span className="text-[#7d47ea] font-medium">
                Fast & Unlimited
              </span>{" "}
              • Professional Guidance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
