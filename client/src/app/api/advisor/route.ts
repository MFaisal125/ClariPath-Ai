// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { message } = await req.json();

//   const apiKey = process.env.MISTRAL_API_KEY;
//   const apiUrl = "https://api.mistral.ai/v1/chat/completions";

//   const response = await fetch(apiUrl, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "mistral-small-latest",
//       messages: [{ role: "user", content: message }],
//     }),
//   });

//   return new NextResponse(response.body, {
//     headers: { "Content-Type": "text/event-stream" },
//   });
// }

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return NextResponse.json(
//         { error: "Message is required" },
//         { status: 400 }
//       );
//     }

//     const apiKey = process.env.OPENROUTER_API_KEY;

//     if (!apiKey) {
//       return NextResponse.json(
//         { error: "OPENROUTER_API_KEY is not configured" },
//         { status: 500 }
//       );
//     }

//     // OpenRouter API endpoint
//     const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//         "HTTP-Referer": "http://localhost:3000", // Optional: your site URL
//         "X-Title": "CareerCraft AI", // Optional: your app name
//       },
//       body: JSON.stringify({
//         model: "mistralai/mistral-7b-instruct", // Using Mistral model through OpenRouter
//         messages: [{ role: "user", content: message }],
//         max_tokens: 1000,
//         temperature: 0.7,
//         stream: false,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("OpenRouter API Error:", errorText);
//       return NextResponse.json(
//         {
//           error: `OpenRouter API Error: ${response.status} - ${errorText}`,
//         },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     console.log("OpenRouter Response:", data);

//     // Return the response in the format expected by the frontend
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("API Route Error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";

// // Best free models for career advice (in order of preference)
// const FREE_MODELS = [
//   "meta-llama/llama-3.2-11b-vision-instruct:free", // Best for comprehensive career advice
//   "meta-llama/llama-3.2-3b-instruct:free", // Fast and reliable
//   "microsoft/phi-3-mini-128k-instruct:free", // Great for detailed responses
//   "google/gemma-2-9b-it:free", // Excellent for professional advice
//   "qwen/qwen-2-7b-instruct:free", // Good backup option
// ];

// async function tryModel(
//   apiKey: string,
//   message: string,
//   modelIndex = 0
// ): Promise<any> {
//   if (modelIndex >= FREE_MODELS.length) {
//     throw new Error("All models failed");
//   }

//   const model = FREE_MODELS[modelIndex];
//   const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//         "HTTP-Referer": "http://localhost:3000",
//         "X-Title": "CareerCraft AI - Professional Career Advisor",
//       },
//       body: JSON.stringify({
//         model: model,
//         messages: [
//           {
//             role: "system",
//             content: `You are CareerCraft AI, an expert senior career advisor with 15+ years of experience in career development, job placement, and professional growth. You specialize in:

// - Career path planning and transitions
// - Resume and LinkedIn optimization
// - Interview preparation and strategies
// - Skill development recommendations
// - Industry insights and job market trends
// - Salary negotiation tactics
// - Professional networking advice
// - Work-life balance guidance

// Always provide practical, actionable advice. Be encouraging yet realistic. Use simple, professional English. If asked about non-career topics, politely redirect: "I'm here for career advice! Ask about jobs or career growth."`,
//           },
//           {
//             role: "user",
//             content: message,
//           },
//         ],
//         max_tokens: 2000, // Increased for detailed responses
//         temperature: 0.7,
//         top_p: 0.9,
//         stream: false,
//       }),
//     });

//     if (!response.ok) {
//       console.log(`Model ${model} failed, trying next...`);
//       return tryModel(apiKey, message, modelIndex + 1);
//     }

//     const data = await response.json();
//     console.log(`Success with model: ${model}`);
//     return data;
//   } catch (error) {
//     console.log(`Model ${model} error:`, error);
//     return tryModel(apiKey, message, modelIndex + 1);
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return NextResponse.json(
//         { error: "Message is required" },
//         { status: 400 }
//       );
//     }

//     const apiKey = process.env.OPENROUTER_API_KEY;

//     if (!apiKey) {
//       return NextResponse.json(
//         { error: "OPENROUTER_API_KEY is not configured" },
//         { status: 500 }
//       );
//     }

//     // Enhanced career-focused prompt
//     const careerPrompt = `As a professional career advisor, please provide detailed guidance for: ${message}`;

//     const data = await tryModel(apiKey, careerPrompt);

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("All models failed:", error);
//     return NextResponse.json(
//       {
//         choices: [
//           {
//             message: {
//               content:
//                 "I'm temporarily unavailable, but I'm here to help with your career! Please try again in a moment, or ask me about:\n\n• Career planning & transitions\n• Resume & interview tips\n• Skill development\n• Job search strategies\n• Salary negotiation\n• Professional networking",
//             },
//           },
//         ],
//       },
//       { status: 200 }
//     );
//   }
// }

import { NextResponse } from "next/server";

// Fast and reliable models for career/business advice (in priority order)
const PROFESSIONAL_MODELS = [
  "meta-llama/llama-3.2-3b-instruct:free", // Fastest and most reliable
  "microsoft/phi-3-mini-128k-instruct:free", // Great for business advice
  "google/gemma-2-9b-it:free", // Excellent for career guidance
  "mistralai/mistral-7b-instruct:free", // Professional responses
  "qwen/qwen-2-7b-instruct:free", // Good backup
  "huggingface/zephyr-7b-beta:free", // Alternative option
];

async function tryModel(
  apiKey: string,
  message: string,
  modelIndex = 0
): Promise<any> {
  if (modelIndex >= PROFESSIONAL_MODELS.length) {
    // Return a helpful fallback response instead of throwing error
    return {
      choices: [
        {
          message: {
            content: `I'm here to help with your career and business questions! Here's some quick advice:

**For Career Development:**
• Focus on building in-demand skills
• Network actively in your industry
• Keep your resume updated regularly
• Practice interview skills consistently

**For Business Growth:**
• Understand your target market
• Focus on customer satisfaction
• Build strong financial management
• Invest in marketing and branding

Please try asking your specific question again, and I'll provide detailed guidance!`,
          },
        },
      ],
    };
  }

  const model = PROFESSIONAL_MODELS[modelIndex];
  const apiUrl = "https://openrouter.ai/api/v1/chat/completions";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "CareerCraft AI - Professional Advisor",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "system",
            content: `You are CareerCraft AI, a senior professional advisor with 20+ years of experience in:

🎯 CAREER DEVELOPMENT:
- Career transitions and planning
- Resume optimization and LinkedIn profiles
- Interview preparation and salary negotiation
- Skill development and certifications
- Professional networking strategies

💼 BUSINESS ADVISORY:
- Business strategy and planning
- Leadership and management
- Entrepreneurship and startups
- Marketing and sales strategies
- Financial planning and growth

📈 INDUSTRY EXPERTISE:
- Technology and IT careers
- Finance and consulting
- Healthcare and education
- Marketing and creative fields
- Remote work and freelancing

Always provide practical, actionable advice. Be professional yet approachable. Use bullet points and clear structure. If asked about non-professional topics, redirect: "I specialize in career and business advice. How can I help with your professional growth?"`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 0.9,
        stream: false,
      }),
    });

    if (!response.ok) {
      return tryModel(apiKey, message, modelIndex + 1);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return tryModel(apiKey, message, modelIndex + 1);
  }
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is not configured" },
        { status: 500 }
      );
    }

    // Enhanced professional prompt
    const professionalPrompt = `As a senior career and business advisor, provide detailed guidance for: ${message}`;

    const data = await tryModel(apiKey, professionalPrompt);

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ API Route Error:", error);
    return NextResponse.json(
      {
        choices: [
          {
            message: {
              content: `I'm temporarily having connection issues, but I'm here to help with your career and business questions!

**Quick Professional Tips:**
• **Career Growth**: Focus on continuous learning and networking
• **Business Success**: Prioritize customer needs and market research  
• **Leadership**: Develop communication and decision-making skills
• **Interview Prep**: Practice STAR method for behavioral questions

Please try your question again, and I'll provide detailed guidance!`,
            },
          },
        ],
      },
      { status: 200 }
    );
  }
}
