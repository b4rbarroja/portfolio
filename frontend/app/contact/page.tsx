import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function ContactPage() {
  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h1>
            <p className="text-gray-400 mt-1">Have a project in mind? Let&apos;s build something great together.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="bg-[#0d1420] border border-white/10 rounded-2xl p-6">
                <h2 className="text-white font-semibold text-lg mb-4">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="bg-white/5 p-2.5 rounded-lg shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </div>
                    <span className="break-all">m7mdjbr1425@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="bg-white/5 p-2.5 rounded-lg shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <span>+20 100 656 0891</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="bg-white/5 p-2.5 rounded-lg shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>Menofia, Egypt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0d1420] border border-white/10 rounded-2xl p-6">
                <h2 className="text-white font-semibold text-lg mb-4">Follow Me</h2>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/m7mdjbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/m7mdjbr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:m7mdjbr1425@gmail.com"
                    aria-label="Email"
                    className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <form className="bg-[#0d1420] border border-white/10 rounded-2xl p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1.5">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1.5">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-1.5">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:scale-[1.02] hover:from-blue-500 hover:to-cyan-400 active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
