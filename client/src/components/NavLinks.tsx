// import { HoverEffect } from "./ui/card-hover-effect";

// export function NavLinks() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// export const projects = [
//   {
//     title: "AI Advisor",
//     link: "advisor",
//   },
//   {
//     title: "Portfolios",
//     link: "portfolios",
//   },
//   {
//     title: "Roadmaps",
//     link: "roadmap",
//   },
//   {
//     title: "Interview Bot",
//     link: "interviewbot",
//   },
// ];

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const navItems = [
  {
    title: "AI Advisor",
    href: "/advisor",
    description: "Get personalized career guidance with AI",
    icon: "🤖",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    hoverGradient: "from-blue-600 via-cyan-600 to-teal-600",
  },
  {
    title: "Portfolios",
    href: "/portfolios",
    description: "Showcase your best work professionally",
    icon: "💼",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    hoverGradient: "from-purple-600 via-pink-600 to-rose-600",
  },
  {
    title: "Roadmaps",
    href: "/roadmap",
    description: "Plan your career journey strategically",
    icon: "🗺️",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    hoverGradient: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    title: "Interview Bot",
    href: "/interviewbot",
    description: "Practice with AI-powered interviewer",
    icon: "🎯",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    hoverGradient: "from-orange-600 via-red-600 to-pink-600",
  },
];

export function NavLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative"
          >
            <Link href={item.href}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border border-white/10 p-6 h-full transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    hoveredIndex === index ? item.hoverGradient : item.gradient
                  } opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                {/* Floating Particles Effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          scale: 1,
                          y: [-10, -20, -10],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl mb-4 inline-block"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-purple-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span>Explore</span>
                    </div>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-white/60 group-hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-2xl bg-black/80" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const projects = navItems.map((item) => ({
  title: item.title,
  link: item.href.replace("/", ""),
}));
