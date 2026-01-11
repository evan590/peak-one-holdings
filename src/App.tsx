import { useEffect, useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const fadeIn = (id: string) =>
    `transition-all duration-700 ${isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1f2937]/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img
              src="/logo.png"
              alt="Peak One Holdings"
              className="h-9 w-auto"
            />
          </a>
          <a
            href="#contact"
            className="text-sm text-[#9ca3af] hover:text-[#2DD4BF] transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className={`max-w-5xl mx-auto px-6 lg:px-8 text-center ${fadeIn('hero')}`}>
          <div className="mb-16">
            <img
              src="/logo.png"
              alt="Peak One Holdings"
              className="h-36 md:h-44 lg:h-52 w-auto mx-auto"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-tight mb-8 tracking-tight">
            Building Next-Generation Consumer Platforms in Regulated Markets
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#9ca3af] font-light max-w-4xl mx-auto leading-relaxed">
            Peak One Holdings builds and partners on modern consumer platforms designed for scale, compliance, and long-term category leadership.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* About Section */}
      <section id="about" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('about')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">About</h2>
          <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed">
            Peak One Holdings LLC is a privately held parent company formed to build, own, and partner on high-impact consumer platforms in regulated industries. The company is designed to support long-term, platform-scale businesses — combining modern product design, disciplined execution, and partnership-first growth strategies.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Current Focus Section */}
      <section id="focus" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('focus')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">Current Focus</h2>
          <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed">
            Peak One Holdings is currently developing a creator-led, social consumer platform within the regulated sports and gaming ecosystem. The platform is designed to feel more like a content-driven experience than a traditional transactional product, with a strong emphasis on engagement, trust, and long-term user relationships. The product is being built privately and is intended to launch through partnerships with licensed operators.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Long-Term Vision Section */}
      <section id="vision" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('vision')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">Long-Term Vision</h2>
          <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed">
            Peak One Holdings is structured to support the creation of multiple platform-scale businesses over time, beginning with its flagship regulated consumer product. The company's long-term vision is to build category-defining platforms at the intersection of social engagement, technology, and regulated consumer experiences.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Approach Section */}
      <section id="approach" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('approach')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">Our Approach</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="text-[#2DD4BF] mt-2">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl text-[#c9cdd4] font-light">Partner-first operating model</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#2DD4BF] mt-2">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl text-[#c9cdd4] font-light">Conservative, compliance-forward posture</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#2DD4BF] mt-2">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl text-[#c9cdd4] font-light">Creator-led distribution replacing paid media</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#2DD4BF] mt-2">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl text-[#c9cdd4] font-light">Emphasis on trust, transparency, and sustainability</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#2DD4BF] mt-2">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span className="text-xl md:text-2xl text-[#c9cdd4] font-light">Long-term alignment over short-term growth tactics</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Founder Section */}
      <section id="founder" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('founder')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">Founder</h2>
          <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed">
            Peak One Holdings was founded by Evan Webdale, founder and CEO of Uncle Don's Light Beer — a first-responder-owned consumer brand operating across multiple U.S. states. Evan has experience building and scaling regulated consumer products, managing partnerships, and operating within compliance-driven environments.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-28 md:py-36">
        <div className={`max-w-4xl mx-auto px-6 lg:px-8 ${fadeIn('contact')}`}>
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#2DD4BF] mb-10 font-medium">Partnerships</h2>
          <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed mb-12">
            Peak One Holdings is currently exploring strategic partnerships with licensed sportsbook and gaming operators.
          </p>
          <a
            href="mailto:evan@peakoneholdings.com"
            className="inline-flex items-center gap-3 text-xl md:text-2xl text-white hover:text-[#2DD4BF] transition-colors font-normal group"
          >
            <span>evan@peakoneholdings.com</span>
            <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#1f2937]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#6b7280]">
            <img
              src="/logo.png"
              alt="Peak One Holdings LLC"
              className="h-7 w-auto opacity-50"
            />
            <span>&copy; {new Date().getFullYear()} Peak One Holdings LLC. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
