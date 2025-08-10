// "use client";

// import { motion } from "framer-motion";

// const roles = [
//   "Frontend",
//   "Backend",
//   "DevOps",
//   "Full Stack",
//   "AI Engineer",
//   "Data Analyst",
//   "AI and Data Scientist",
//   "Android",
//   "iOS",
//   "PostgreSQL",
//   "Blockchain",
//   "QA",
//   "Software Architect",
//   "Cyber Security",
//   "UX Design",
//   "Game Developer",
//   "Technical Writer",
//   "MLOps",
//   "Product Manager",
//   "Engineering Manager",
//   "Developer Relations",
//   "DSA",
//   "Prompt Engineering",
// ];

// const roleLinks: Record<string, string> = {
//   Frontend: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf",
//   Backend: "https://roadmap.sh/pdfs/roadmaps/backend.pdf",
//   DevOps: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
//   "Full Stack": "https://roadmap.sh/pdfs/roadmaps/full-stack.pdf",
//   "AI Engineer": "https://roadmap.sh/pdfs/roadmaps/ai-engineer.pdf",
//   "Data Analyst": "https://roadmap.sh/pdfs/roadmaps/data-analyst.pdf",
//   "AI and Data Scientist":
//     "https://roadmap.sh/pdfs/roadmaps/ai-data-scientist.pdf",
//   Android: "https://roadmap.sh/pdfs/roadmaps/android.pdf",
//   iOS: "https://roadmap.sh/pdfs/roadmaps/ios.pdf",
//   PostgreSQL: "https://roadmap.sh/pdfs/roadmaps/postgresql-dba.pdf",
//   Blockchain: "https://roadmap.sh/pdfs/roadmaps/blockchain.pdf",
//   QA: "https://roadmap.sh/pdfs/roadmaps/qa.pdf",
//   "Software Architect":
//     "https://roadmap.sh/pdfs/roadmaps/software-architect.pdf",
//   "Cyber Security": "https://roadmap.sh/pdfs/roadmaps/cyber-security.pdf",
//   "UX Design": "https://roadmap.sh/pdfs/roadmaps/ux-design.pdf",
//   "Game Developer": "https://roadmap.sh/pdfs/roadmaps/game-developer.pdf",
//   "Technical Writer": "https://roadmap.sh/pdfs/roadmaps/technical-writer.pdf",
//   MLOps: "https://roadmap.sh/pdfs/roadmaps/mlops.pdf",
//   "Product Manager": "https://roadmap.sh/pdfs/roadmaps/product-manager.pdf",
//   "Engineering Manager":
//     "https://roadmap.sh/pdfs/roadmaps/engineering-manager.pdf",
//   "Developer Relations": "https://roadmap.sh/pdfs/roadmaps/devrel.pdf",
//   DSA: "https://roadmap.sh/pdfs/roadmaps/datastructures-and-algorithms.pdf",
//   "Prompt Engineering":
//     "https://roadmap.sh/pdfs/roadmaps/prompt-engineering.pdf",
// };

// export default function Hero() {
//   const handleRoleClick = (role: string) => {
//     const url = roleLinks[role] || "https://docs.google.com/default";
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-6">
//       <h1 className="text-4xl font-bold mb-6 text-center">
//         Role-based Roadmaps
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
//         {roles.map((role) => (
//           <motion.button
//             key={role}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="h-16 w-full border-2 hover:border-none rounded-lg flex items-center justify-between px-4 font-semibold cursor-pointer transition-all hover:bg-[#7d47ea]"
//             onClick={() => handleRoleClick(role)}
//           >
//             {role}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useCompletion } from "@ai-sdk/react";
import {
  Search,
  Filter,
  Star,
  Users,
  Zap,
  Code,
  Database,
  Shield,
  Smartphone,
  Brain,
  Palette,
  Gamepad2Icon as GameController2,
  PenTool,
  Cloud,
  BarChart3,
  Settings,
  Globe,
  Cpu,
  Lock,
  Layers,
  GitBranch,
  MessageSquare,
  Target,
  BookOpen,
  ChevronDown,
  Bot,
  Send,
  X,
  User,
  Menu,
  Download,
} from "lucide-react";

const roadmaps = [
  // Role-based Roadmaps
  {
    name: "Frontend Developer",
    category: "Role-based",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    url: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf",
    description: "Learn modern frontend development with React, Vue, and more",
    difficulty: "Beginner",
    duration: "6-8 months",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
  },
  {
    name: "Backend Developer",
    category: "Role-based",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    url: "https://roadmap.sh/pdfs/roadmaps/backend.pdf",
    description: "Master server-side development and APIs",
    difficulty: "Intermediate",
    duration: "8-10 months",
    skills: ["Node.js", "Python", "Databases", "APIs", "Security"],
  },
  {
    name: "DevOps Engineer",
    category: "Role-based",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    url: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
    description: "Infrastructure, CI/CD, and deployment automation",
    difficulty: "Advanced",
    duration: "10-12 months",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
  },
  {
    name: "Full Stack Developer",
    category: "Role-based",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    url: "https://roadmap.sh/pdfs/roadmaps/full-stack.pdf",
    description: "Complete web development from frontend to backend",
    difficulty: "Intermediate",
    duration: "12-15 months",
    skills: ["Frontend", "Backend", "Databases", "Deployment", "Testing"],
  },
  {
    name: "AI Engineer",
    category: "Role-based",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    url: "https://roadmap.sh/pdfs/roadmaps/ai-engineer.pdf",
    description: "Build and deploy AI/ML systems",
    difficulty: "Advanced",
    duration: "12-18 months",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "AI Ethics",
    ],
  },
  {
    name: "Data Analyst",
    category: "Role-based",
    icon: BarChart3,
    color: "from-teal-500 to-blue-500",
    url: "https://roadmap.sh/pdfs/roadmaps/data-analyst.pdf",
    description: "Analyze data and create insights",
    difficulty: "Beginner",
    duration: "4-6 months",
    skills: ["SQL", "Excel", "Python", "Visualization", "Statistics"],
  },
  {
    name: "AI and Data Scientist",
    category: "Role-based",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    url: "https://roadmap.sh/pdfs/roadmaps/ai-data-scientist.pdf",
    description: "Advanced AI/ML and data science",
    difficulty: "Advanced",
    duration: "15-18 months",
    skills: [
      "Statistics",
      "Machine Learning",
      "Deep Learning",
      "Research",
      "Mathematics",
    ],
  },
  {
    name: "Android Developer",
    category: "Role-based",
    icon: Smartphone,
    color: "from-green-500 to-lime-500",
    url: "https://roadmap.sh/pdfs/roadmaps/android.pdf",
    description: "Native Android app development",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: ["Kotlin", "Java", "Android SDK", "UI/UX", "Testing"],
  },
  {
    name: "iOS Developer",
    category: "Role-based",
    icon: Smartphone,
    color: "from-gray-500 to-slate-500",
    url: "https://roadmap.sh/pdfs/roadmaps/ios.pdf",
    description: "Native iOS app development with Swift",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: ["Swift", "iOS SDK", "Xcode", "UI Kit", "Core Data"],
  },
  {
    name: "PostgreSQL DBA",
    category: "Role-based",
    icon: Database,
    color: "from-blue-600 to-indigo-600",
    url: "https://roadmap.sh/pdfs/roadmaps/postgresql-dba.pdf",
    description: "Database administration and optimization",
    difficulty: "Advanced",
    duration: "8-10 months",
    skills: [
      "PostgreSQL",
      "Performance Tuning",
      "Backup",
      "Security",
      "Monitoring",
    ],
  },
  {
    name: "Blockchain Developer",
    category: "Role-based",
    icon: GitBranch,
    color: "from-yellow-500 to-orange-500",
    url: "https://roadmap.sh/pdfs/roadmaps/blockchain.pdf",
    description: "Decentralized applications and smart contracts",
    difficulty: "Advanced",
    duration: "10-12 months",
    skills: ["Solidity", "Web3", "Smart Contracts", "DeFi", "Cryptography"],
  },
  {
    name: "QA Engineer",
    category: "Role-based",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    url: "https://roadmap.sh/pdfs/roadmaps/qa.pdf",
    description: "Quality assurance and testing strategies",
    difficulty: "Beginner",
    duration: "4-6 months",
    skills: [
      "Manual Testing",
      "Automation",
      "Test Planning",
      "Bug Tracking",
      "Performance Testing",
    ],
  },
  {
    name: "Software Architect",
    category: "Role-based",
    icon: Settings,
    color: "from-gray-600 to-gray-800",
    url: "https://roadmap.sh/pdfs/roadmaps/software-architect.pdf",
    description: "System design and architecture patterns",
    difficulty: "Expert",
    duration: "18-24 months",
    skills: [
      "System Design",
      "Architecture Patterns",
      "Scalability",
      "Leadership",
      "Technology Strategy",
    ],
  },
  {
    name: "Cyber Security",
    category: "Role-based",
    icon: Lock,
    color: "from-red-600 to-red-800",
    url: "https://roadmap.sh/pdfs/roadmaps/cyber-security.pdf",
    description: "Information security and ethical hacking",
    difficulty: "Advanced",
    duration: "12-15 months",
    skills: [
      "Network Security",
      "Penetration Testing",
      "Incident Response",
      "Compliance",
      "Risk Assessment",
    ],
  },
  {
    name: "UX Designer",
    category: "Role-based",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    url: "https://roadmap.sh/pdfs/roadmaps/ux-design.pdf",
    description: "User experience and interface design",
    difficulty: "Beginner",
    duration: "6-8 months",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    name: "Game Developer",
    category: "Role-based",
    icon: GameController2,
    color: "from-purple-600 to-indigo-600",
    url: "https://roadmap.sh/pdfs/roadmaps/game-developer.pdf",
    description: "Game development and interactive media",
    difficulty: "Intermediate",
    duration: "10-12 months",
    skills: ["Unity", "C#", "Game Design", "3D Graphics", "Physics"],
  },
  {
    name: "Technical Writer",
    category: "Role-based",
    icon: PenTool,
    color: "from-blue-500 to-teal-500",
    url: "https://roadmap.sh/pdfs/roadmaps/technical-writer.pdf",
    description: "Documentation and technical communication",
    difficulty: "Beginner",
    duration: "3-4 months",
    skills: [
      "Technical Writing",
      "Documentation Tools",
      "API Documentation",
      "Content Strategy",
      "Communication",
    ],
  },
  {
    name: "MLOps Engineer",
    category: "Role-based",
    icon: Cpu,
    color: "from-green-600 to-teal-600",
    url: "https://roadmap.sh/pdfs/roadmaps/mlops.pdf",
    description: "Machine learning operations and deployment",
    difficulty: "Advanced",
    duration: "12-15 months",
    skills: [
      "ML Pipelines",
      "Model Deployment",
      "Monitoring",
      "DevOps",
      "Cloud Platforms",
    ],
  },
  {
    name: "Product Manager",
    category: "Role-based",
    icon: Target,
    color: "from-orange-500 to-yellow-500",
    url: "https://roadmap.sh/pdfs/roadmaps/product-manager.pdf",
    description: "Product strategy and management",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: [
      "Product Strategy",
      "Market Research",
      "Analytics",
      "Roadmapping",
      "Stakeholder Management",
    ],
  },
  {
    name: "Engineering Manager",
    category: "Role-based",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    url: "https://roadmap.sh/pdfs/roadmaps/engineering-manager.pdf",
    description: "Technical leadership and team management",
    difficulty: "Advanced",
    duration: "8-10 months",
    skills: [
      "Leadership",
      "Team Management",
      "Technical Strategy",
      "Performance Management",
      "Communication",
    ],
  },
  {
    name: "Developer Relations",
    category: "Role-based",
    icon: MessageSquare,
    color: "from-cyan-500 to-blue-500",
    url: "https://roadmap.sh/pdfs/roadmaps/devrel.pdf",
    description: "Developer advocacy and community building",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: [
      "Community Building",
      "Content Creation",
      "Public Speaking",
      "Technical Marketing",
      "Developer Experience",
    ],
  },

  // Skill-based Roadmaps
  {
    name: "Data Structures & Algorithms",
    category: "Skill-based",
    icon: Code,
    color: "from-red-500 to-orange-500",
    url: "https://roadmap.sh/pdfs/roadmaps/datastructures-and-algorithms.pdf",
    description: "Core computer science fundamentals",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: [
      "Arrays",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Complexity Analysis",
    ],
  },
  {
    name: "Prompt Engineering",
    category: "Skill-based",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    url: "https://roadmap.sh/pdfs/roadmaps/prompt-engineering.pdf",
    description: "AI prompt design and optimization",
    difficulty: "Beginner",
    duration: "2-3 months",
    skills: [
      "Prompt Design",
      "AI Models",
      "Fine-tuning",
      "Evaluation",
      "Ethics",
    ],
  },
  {
    name: "System Design",
    category: "Skill-based",
    icon: Settings,
    color: "from-gray-500 to-slate-600",
    url: "https://roadmap.sh/system-design",
    description: "Scalable system architecture",
    difficulty: "Advanced",
    duration: "8-10 months",
    skills: [
      "Scalability",
      "Load Balancing",
      "Databases",
      "Caching",
      "Microservices",
    ],
  },
  {
    name: "Software Design Architecture",
    category: "Skill-based",
    icon: Layers,
    color: "from-blue-600 to-indigo-700",
    url: "https://roadmap.sh/software-design-architecture",
    description: "Design patterns and architecture",
    difficulty: "Advanced",
    duration: "6-8 months",
    skills: [
      "Design Patterns",
      "SOLID Principles",
      "Clean Architecture",
      "Domain-Driven Design",
      "Refactoring",
    ],
  },
  {
    name: "API Design",
    category: "Skill-based",
    icon: Globe,
    color: "from-green-500 to-teal-500",
    url: "https://roadmap.sh/api-design",
    description: "RESTful and GraphQL API design",
    difficulty: "Intermediate",
    duration: "4-6 months",
    skills: ["REST", "GraphQL", "API Security", "Documentation", "Versioning"],
  },
  {
    name: "Code Review",
    category: "Skill-based",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    url: "https://roadmap.sh/code-review",
    description: "Best practices for code reviews",
    difficulty: "Beginner",
    duration: "2-3 months",
    skills: [
      "Code Quality",
      "Review Process",
      "Feedback",
      "Collaboration",
      "Best Practices",
    ],
  },

  // Technology Roadmaps
  {
    name: "JavaScript",
    category: "Technology",
    icon: Code,
    color: "from-yellow-400 to-orange-500",
    url: "https://roadmap.sh/javascript",
    description: "Modern JavaScript development",
    difficulty: "Beginner",
    duration: "4-6 months",
    skills: ["ES6+", "DOM", "Async/Await", "Modules", "Testing"],
  },
  {
    name: "TypeScript",
    category: "Technology",
    icon: Code,
    color: "from-blue-500 to-blue-700",
    url: "https://roadmap.sh/typescript",
    description: "Type-safe JavaScript development",
    difficulty: "Intermediate",
    duration: "3-4 months",
    skills: ["Types", "Interfaces", "Generics", "Decorators", "Advanced Types"],
  },
  {
    name: "Python",
    category: "Technology",
    icon: Code,
    color: "from-blue-400 to-yellow-500",
    url: "https://roadmap.sh/python",
    description: "Python programming language",
    difficulty: "Beginner",
    duration: "4-6 months",
    skills: ["Syntax", "OOP", "Libraries", "Web Frameworks", "Data Science"],
  },
  {
    name: "Java",
    category: "Technology",
    icon: Code,
    color: "from-red-500 to-orange-600",
    url: "https://roadmap.sh/java",
    description: "Enterprise Java development",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: ["OOP", "Spring", "JVM", "Concurrency", "Enterprise Patterns"],
  },
  {
    name: "Go",
    category: "Technology",
    icon: Code,
    color: "from-cyan-400 to-blue-500",
    url: "https://roadmap.sh/golang",
    description: "Go programming language",
    difficulty: "Intermediate",
    duration: "4-6 months",
    skills: [
      "Concurrency",
      "Goroutines",
      "Channels",
      "Web Services",
      "Performance",
    ],
  },
  {
    name: "Rust",
    category: "Technology",
    icon: Code,
    color: "from-orange-600 to-red-600",
    url: "https://roadmap.sh/rust",
    description: "Systems programming with Rust",
    difficulty: "Advanced",
    duration: "8-10 months",
    skills: [
      "Memory Safety",
      "Ownership",
      "Concurrency",
      "Performance",
      "Systems Programming",
    ],
  },
  {
    name: "C++",
    category: "Technology",
    icon: Code,
    color: "from-blue-600 to-purple-600",
    url: "https://roadmap.sh/cpp",
    description: "C++ programming language",
    difficulty: "Advanced",
    duration: "8-12 months",
    skills: [
      "OOP",
      "Memory Management",
      "STL",
      "Templates",
      "Performance Optimization",
    ],
  },
  {
    name: "React",
    category: "Technology",
    icon: Code,
    color: "from-cyan-400 to-blue-500",
    url: "https://roadmap.sh/react",
    description: "React.js library and ecosystem",
    difficulty: "Intermediate",
    duration: "4-6 months",
    skills: ["Components", "Hooks", "State Management", "Routing", "Testing"],
  },
  {
    name: "Vue.js",
    category: "Technology",
    icon: Code,
    color: "from-green-400 to-green-600",
    url: "https://roadmap.sh/vue",
    description: "Vue.js framework",
    difficulty: "Beginner",
    duration: "3-4 months",
    skills: ["Components", "Directives", "Vuex", "Router", "Composition API"],
  },
  {
    name: "Angular",
    category: "Technology",
    icon: Code,
    color: "from-red-500 to-red-700",
    url: "https://roadmap.sh/angular",
    description: "Angular framework",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: ["Components", "Services", "RxJS", "Routing", "Forms"],
  },
  {
    name: "Node.js",
    category: "Technology",
    icon: Database,
    color: "from-green-500 to-green-700",
    url: "https://roadmap.sh/nodejs",
    description: "Server-side JavaScript",
    difficulty: "Intermediate",
    duration: "4-6 months",
    skills: ["Event Loop", "NPM", "Express", "APIs", "Database Integration"],
  },
  {
    name: "Spring Boot",
    category: "Technology",
    icon: Database,
    color: "from-green-500 to-lime-600",
    url: "https://roadmap.sh/spring-boot",
    description: "Java Spring framework",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: [
      "Dependency Injection",
      "REST APIs",
      "Data JPA",
      "Security",
      "Testing",
    ],
  },
  {
    name: "MongoDB",
    category: "Technology",
    icon: Database,
    color: "from-green-600 to-green-800",
    url: "https://roadmap.sh/mongodb",
    description: "NoSQL database",
    difficulty: "Beginner",
    duration: "3-4 months",
    skills: ["Documents", "Queries", "Indexing", "Aggregation", "Replication"],
  },
  {
    name: "SQL",
    category: "Technology",
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    url: "https://roadmap.sh/sql",
    description: "Structured Query Language",
    difficulty: "Beginner",
    duration: "2-3 months",
    skills: [
      "Queries",
      "Joins",
      "Indexes",
      "Stored Procedures",
      "Performance Tuning",
    ],
  },
  {
    name: "Docker",
    category: "Technology",
    icon: Cloud,
    color: "from-blue-400 to-cyan-500",
    url: "https://roadmap.sh/docker",
    description: "Containerization platform",
    difficulty: "Intermediate",
    duration: "3-4 months",
    skills: ["Containers", "Images", "Dockerfile", "Compose", "Networking"],
  },
  {
    name: "Kubernetes",
    category: "Technology",
    icon: Cloud,
    color: "from-blue-600 to-indigo-700",
    url: "https://roadmap.sh/kubernetes",
    description: "Container orchestration",
    difficulty: "Advanced",
    duration: "6-8 months",
    skills: ["Pods", "Services", "Deployments", "ConfigMaps", "Monitoring"],
  },
  {
    name: "AWS",
    category: "Technology",
    icon: Cloud,
    color: "from-orange-400 to-orange-600",
    url: "https://roadmap.sh/aws",
    description: "Amazon Web Services",
    difficulty: "Intermediate",
    duration: "6-8 months",
    skills: ["EC2", "S3", "Lambda", "RDS", "IAM"],
  },
  {
    name: "GraphQL",
    category: "Technology",
    icon: Globe,
    color: "from-pink-500 to-purple-600",
    url: "https://roadmap.sh/graphql",
    description: "Query language for APIs",
    difficulty: "Intermediate",
    duration: "3-4 months",
    skills: ["Schema", "Queries", "Mutations", "Subscriptions", "Resolvers"],
  },
  {
    name: "Redis",
    category: "Technology",
    icon: Database,
    color: "from-red-500 to-red-700",
    url: "https://roadmap.sh/redis",
    description: "In-memory data structure store",
    difficulty: "Intermediate",
    duration: "2-3 months",
    skills: [
      "Caching",
      "Data Structures",
      "Pub/Sub",
      "Persistence",
      "Clustering",
    ],
  },
];

const categories = ["All", "Role-based", "Skill-based", "Technology"];

export default function FuturisticRoadmaps() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Using AI SDK with useCompletion hook
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: "/api/completion",
      initialInput: "",
    });

  // Create a messages array for display purposes
  const messages = [
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your AI career advisor. I can help you choose the right roadmap, create personalized learning plans, and provide professional guidance for your tech career. What would you like to know?",
    },
    ...(completion
      ? [{ id: "2", role: "assistant", content: completion }]
      : []),
  ];

  const filteredRoadmaps = useMemo(() => {
    return roadmaps.filter((roadmap) => {
      const matchesSearch =
        roadmap.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        roadmap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        roadmap.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || roadmap.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // PDF Download Function
  const downloadRoadmapPDF = async (roadmap: { name: string; url: string }) => {
    try {
      // Show loading feedback
      const button = document.querySelector(
        `[data-roadmap="${roadmap.name}"]`
      ) as HTMLElement;
      if (button) {
        button.innerHTML =
          '<svg class="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
      }

      const response = await fetch(roadmap.url);
      const blob = await response.blob();

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${roadmap.name
        .replace(/\s+/g, "-")
        .toLowerCase()}-roadmap.pdf`;
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Reset button
      if (button) {
        button.innerHTML =
          '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
      }
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download PDF. Please try again.");

      // Reset button on error
      const button = document.querySelector(
        `[data-roadmap="${roadmap.name}"]`
      ) as HTMLElement;
      if (button) {
        button.innerHTML =
          '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
      }
    }
  };

  const getAIRecommendation = (roadmap: { name: string }) => {
    const prompt = `I'm interested in the ${roadmap.name} roadmap. Can you provide personalized guidance including: 1) Prerequisites I should have, 2) Step-by-step learning plan, 3) Best resources, 4) Career opportunities, 5) Salary expectations, and 6) How long it typically takes to become job-ready?`;
    handleInputChange({
      target: { value: prompt },
    } as React.ChangeEvent<HTMLInputElement>);
    setIsChatOpen(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-400/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/20";
      case "Advanced":
        return "text-orange-400 bg-orange-400/20";
      case "Expert":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-4 md:p-6 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>

            {/* Desktop Stats */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>333K+ Stars</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>2.1M+ Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-800"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>333K+ Stars</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>2.1M+ Users</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search and Filter Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:gap-4 items-stretch md:items-center justify-between mb-6 md:mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-full md:max-w-md">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search roadmaps, skills, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm md:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center space-x-2 w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-gray-900 border border-gray-700 rounded-xl text-white hover:bg-gray-800 transition-all text-sm md:text-base"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5" />
                <span>{selectedCategory}</span>
                <ChevronDown
                  className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${
                    isFilterOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 left-0 md:right-0 md:left-auto w-full md:w-auto min-w-[200px] bg-gray-900 border border-gray-700 rounded-xl overflow-hidden z-20"
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full px-4 md:px-6 py-3 text-left hover:bg-gray-800 transition-colors text-sm md:text-base ${
                          selectedCategory === category
                            ? "bg-purple-500/20 text-purple-300"
                            : "text-white"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 md:p-6"
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">
                    {filteredRoadmaps.length}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">
                    Available Roadmaps
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 md:p-6"
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Download className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">PDF</p>
                  <p className="text-xs md:text-sm text-gray-400">
                    Direct Downloads
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 md:p-6"
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold">100%</p>
                  <p className="text-xs md:text-sm text-gray-400">
                    Free & Open Source
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Roadmaps Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 p-4 md:p-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredRoadmaps.map((roadmap, index) => {
                const IconComponent = roadmap.icon;
                return (
                  <motion.div
                    key={roadmap.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-6 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${roadmap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${roadmap.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex space-x-1 md:space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              getAIRecommendation(roadmap);
                            }}
                            className="w-6 h-6 md:w-8 md:h-8 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <Bot className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                          </motion.button>
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2">
                        {roadmap.name}
                      </h3>

                      <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 group-hover:text-gray-300 transition-colors line-clamp-2">
                        {roadmap.description}
                      </p>

                      <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(
                              roadmap.difficulty
                            )}`}
                          >
                            {roadmap.difficulty}
                          </span>
                          <span className="text-xs text-gray-400">
                            {roadmap.duration}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {roadmap.skills.slice(0, 3).map((skill: string) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                          {roadmap.skills.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                              +{roadmap.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`px-2 md:px-3 py-1 text-xs font-medium bg-gradient-to-r ${roadmap.color} bg-opacity-20 rounded-full`}
                        >
                          {roadmap.category}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => downloadRoadmapPDF(roadmap)}
                          data-roadmap={roadmap.name}
                          className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg text-white transition-all text-xs font-medium"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredRoadmaps.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-20"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Search className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                No roadmaps found
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl h-[90vh] md:h-[600px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold">
                      AI Career Advisor
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      Professional guidance & recommendations
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-2xl ${
                        message.role === "user"
                          ? "bg-purple-500 text-white"
                          : "bg-gray-800 text-gray-100"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.role === "assistant" && (
                          <Bot className="w-3 h-3 md:w-4 md:h-4 mt-1 text-purple-400" />
                        )}
                        {message.role === "user" && (
                          <User className="w-3 h-3 md:w-4 md:h-4 mt-1" />
                        )}
                        <div className="text-xs md:text-sm whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 p-3 md:p-4 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={handleSubmit}
                className="p-4 md:p-6 border-t border-gray-700"
              >
                <div className="flex space-x-2 md:space-x-4">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about roadmaps, career advice, learning paths..."
                    className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
                  >
                    <Send className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
