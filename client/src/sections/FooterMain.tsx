import Link from "next/link";

export default function FooterMain() {
  return (
    <div className="border-t border-white/[0.1] px-6 sm:px-8 py-10 sm:py-20 bg-brand">
      <div className="max-w-7xl mx-auto text-sm text-white/60 flex sm:flex-row flex-col justify-between items-start">
        <div>
          <div className="mr-4 md:flex mb-4">
            <Link href="/" passHref>
              <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-gray-100 selection:bg-emerald-500 mr-10 py-0 cursor-pointer">
                <div className="flex flex-col">
                  <h1 className="text-white font-chillax">CAREER CRAFT AI</h1>
                </div>
              </div>
            </Link>
          </div>
          <div>
            Product by{" "}
            <a
              target="__blank"
              href="https://www.revenuerocket.site"
              rel="noopener noreferrer"
            >
              <span className="text-sky-500 font-medium">Revenue Rocket</span>
            </a>
          </div>
          <div className="mt-2">
            contact at{" "}
            <a
              className="text-sky-500 font-medium"
              target="__blank"
              href="#"
              rel="noopener noreferrer"
            >
              @Clari Path AI
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="/advisor"
            >
              AI Career Advisor
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="/roadmap"
            >
              Roadmap for Success
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="/portfolios"
            >
              Portfolio Generator
            </a>

            <Link
              className="transition-colors hover:text-white/80 text-white/60"
              href="/interviewbot"
            >
              AI Interview Prep
            </Link>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="/blog"
            >
              Blogs
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="#faqs"
            >
              FAQs
            </a>
            <a
              className="transition-colors hover:text-white/80 text-white/60"
              href="#testimonials"
            >
              Testimonials
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="#"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="#"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="mailto:support@careercraftai.com"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
            <a
              target="__blank"
              className="transition-colors hover:text-white/80 text-white/60"
              href="#"
              rel="noopener noreferrer"
            >
              Terms & Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
