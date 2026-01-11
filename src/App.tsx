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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-[#1f2937]/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img
              src="/logo.png"
              alt="Peak One Holdings"
              className="h-8 w-auto"
            />
          </a>
          <a
            href="#contact"
            className="text-sm text-[#9ca3af] hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className={`max-w-4xl mx-auto px-6 text-center ${fadeIn('hero')}`}>
          <img
            src="/logo.png"
            alt="Peak One Holdings"
            className="h-24 md:h-32 w-auto mx-auto mb-12"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Building next-generation consumer platforms in regulated markets.
          </h1>
          <p className="text-lg md:text-xl text-[#9ca3af] font-light max-w-2xl mx-auto">
            Partner-first. Compliance-forward. Built for scale.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('about')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">About</h2>
          <div className="space-y-6 text-lg text-[#9ca3af] font-light leading-relaxed">
            <p>
              Peak One Holdings LLC is a privately held parent company focused on building, owning,
              and partnering on next-generation consumer platforms in regulated markets.
            </p>
            <p>
              The company operates with a long-term platform mindset, prioritizing strategic
              partnerships over independent licensing, and sustainable growth over short-term volume.
            </p>
            <p>
              Peak One Holdings is designed to support category-defining outcomes through disciplined
              execution in compliance-driven environments.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Current Focus Section */}
      <section id="focus" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('focus')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">Current Focus</h2>
          <div className="space-y-6 text-lg text-[#9ca3af] font-light leading-relaxed">
            <p>
              Peak One Holdings is currently developing a creator-led social sportsbook platform
              designed to feel like a content feed rather than a traditional sportsbook.
            </p>
            <p>
              The platform is being built exclusively for partnership with licensed operators,
              with a focus on creator-driven distribution as an alternative to traditional paid media.
            </p>
            <p className="text-[#6b7280] text-base">
              The product is in private development and not publicly launched.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Approach Section */}
      <section id="approach" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('approach')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">Approach</h2>
          <div className="grid gap-8 md:gap-10">
            <div className="space-y-3">
              <h3 className="text-white font-medium">Partner-First Operating Model</h3>
              <p className="text-[#9ca3af] font-light leading-relaxed">
                Designed from the outset to integrate with licensed infrastructure rather than
                operate independently. Built to be a strategic partner, not a competitor.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-medium">Conservative Compliance Posture</h3>
              <p className="text-[#9ca3af] font-light leading-relaxed">
                Long-term value in regulated markets is built through trust, transparency,
                and disciplined execution. This philosophy informs every decision.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-medium">Creator-Led Distribution</h3>
              <p className="text-[#9ca3af] font-light leading-relaxed">
                Replacing expensive paid media with authentic, creator-driven growth.
                Lower customer acquisition costs through genuine engagement.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-medium">Long-Term Alignment</h3>
              <p className="text-[#9ca3af] font-light leading-relaxed">
                Focused on sustainable partnerships and durable business models,
                not short-term volume or temporary arbitrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Founder Section */}
      <section id="founder" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('founder')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">Founder</h2>
          <div className="space-y-6 text-lg text-[#9ca3af] font-light leading-relaxed">
            <p>
              Peak One Holdings was founded by Evan Webdale, founder and CEO of Uncle Don's
              Light Beer — a first-responder-owned consumer brand operating across multiple U.S. states.
            </p>
            <p>
              Evan has experience building and scaling regulated consumer products, managing
              partnerships, and operating within compliance-driven environments.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Areas of Focus Section */}
      <section id="areas" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('areas')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">Areas of Focus</h2>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 border border-[#1f2937] text-[#9ca3af] text-sm font-light">
              Regulated Consumer Platforms
            </span>
            <span className="px-4 py-2 border border-[#1f2937] text-[#9ca3af] text-sm font-light">
              Creator-Driven Distribution
            </span>
            <span className="px-4 py-2 border border-[#1f2937] text-[#9ca3af] text-sm font-light">
              Social Wagering Infrastructure
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#1f2937]" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className={`max-w-3xl mx-auto px-6 ${fadeIn('contact')}`}>
          <h2 className="text-sm uppercase tracking-widest text-[#2DD4BF] mb-8">Partnerships</h2>
          <div className="space-y-8">
            <p className="text-lg text-[#9ca3af] font-light leading-relaxed">
              Peak One Holdings is exploring strategic partnerships with licensed sportsbook
              and gaming operators.
            </p>
            <div>
              <a
                href="mailto:evan@peakoneholdings.com"
                className="inline-flex items-center gap-2 text-white hover:text-[#2DD4BF] transition-colors"
              >
                <span>evan@peakoneholdings.com</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#1f2937]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#6b7280]">
            <img
              src="/logo.png"
              alt="Peak One Holdings LLC"
              className="h-6 w-auto opacity-60"
            />
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
