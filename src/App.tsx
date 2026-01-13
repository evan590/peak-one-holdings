import { useEffect, useState } from 'react'

// Icon components
const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-9 0a9 9 0 1018 0 9 9 0 10-18 0M12 12m-5 0a5 5 0 1010 0 5 5 0 10-10 0M12 12m-1 0a1 1 0 102 0 1 1 0 10-2 0" />
  </svg>
)

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const HandshakeIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
  </svg>
)

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
              className="w-[130px] md:w-[150px]"
            />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-[#9ca3af] hover:text-white transition-colors">About</a>
            <a href="#focus" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Focus</a>
            <a href="#approach" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Approach</a>
            <a href="#founder" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Founder</a>
          </div>
          <a
            href="#contact"
            className="text-sm text-[#0a0a0f] bg-[#2DD4BF] hover:bg-[#14b8a6] px-4 py-2 rounded transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
        {/* Depth gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-[#0d1117] pointer-events-none" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)] pointer-events-none" />
        {/* Subtle teal glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2DD4BF]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 text-center ${fadeIn('hero')}`}>
          {/* Large commanding logo */}
          <div className="mb-20 mt-4">
            <img
              src="/logo.png"
              alt="Peak One Holdings"
              className="w-auto max-w-[320px] md:max-w-[450px] lg:max-w-[580px] xl:max-w-[680px] mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] mb-8 tracking-tight">
            Building Category-Defining Platforms<br className="hidden md:block" /> in Regulated Markets
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#7a8290] font-light max-w-3xl mx-auto leading-relaxed mb-14">
            Peak One Holdings develops and partners on modern, compliance-centric consumer products designed for scale and long-term category leadership.
          </p>

          {/* Thesis Statement */}
          <div className="max-w-3xl mx-auto mb-16 py-8 border-t border-b border-[#1f2937]">
            <p className="text-lg md:text-xl text-[#c9cdd4] italic font-light leading-relaxed">
              "We believe the next generation of regulated consumer platforms will be built through partnership, trust, and disciplined execution."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <a
              href="#about"
              className="px-10 py-4 bg-[#2DD4BF] text-[#0a0a0f] font-semibold rounded hover:bg-[#14b8a6] transition-colors text-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-[#2DD4BF]/40 text-[#2DD4BF] font-medium rounded hover:bg-[#2DD4BF]/10 transition-colors text-lg"
            >
              Partner With Us
            </a>
          </div>

          {/* Credibility Anchor */}
          <p className="text-[#6b7280] text-sm tracking-wider">
            Privately held · Partnership-led · Compliance-first
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="whatwedo" className="py-32 md:py-40 bg-[#0d1117] relative">
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
        <div className={`relative max-w-5xl mx-auto px-6 lg:px-8 ${fadeIn('whatwedo')}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2DD4BF]/10 rounded-2xl mb-6">
              <NetworkIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">What We Do</h2>
            <p className="text-[#9ca3af] text-xl max-w-2xl mx-auto leading-relaxed">
              Peak One Holdings operates at the intersection of consumer technology and regulated markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Build & Partner</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">Build and own regulated consumer platforms designed for long-term value creation, with a focus on partnership-driven growth alongside licensed operators.</p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Compliance-Forward</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">Designed from the ground up for licensed operator integration with a conservative compliance posture. Trust and regulatory alignment are foundational.</p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Creator-Led Distribution</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">Authentic, creator-driven growth replacing expensive paid media. Lower customer acquisition costs through genuine engagement and community.</p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Built for Scale</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">Purpose-built for scaled market adoption and category-defining outcomes. Long-term platform mindset over short-term feature development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-40 relative">
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0d1117_0%,transparent_50%)] pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('about')}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2DD4BF] text-sm tracking-[0.2em] uppercase mb-4 font-medium">About Peak One Holdings</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 leading-tight">
                A holding company built for regulated markets
              </h2>
              <div className="space-y-6 text-[#9ca3af] text-lg leading-relaxed">
                <p>
                  Peak One Holdings LLC is a privately held parent company formed to build, own, and partner on high-impact consumer platforms in regulated industries.
                </p>
                <p>
                  The company is designed to support long-term, platform-scale businesses — combining modern product design, disciplined execution, and partnership-first growth strategies.
                </p>
                <p>
                  We believe the next generation of consumer platforms in regulated markets will be built through trust, transparency, and deep alignment with licensed operators.
                </p>
              </div>
            </div>
            <div className="bg-[#0d1117] rounded-2xl p-8 md:p-12 border border-[#1f2937]">
              <h3 className="text-xl font-semibold text-white mb-6">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Long-term platform mindset over short-term gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Strategic partnerships over independent operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Sustainable growth over aggressive expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Category-defining outcomes through disciplined execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section id="focus" className="py-36 md:py-48 bg-[#0d1117] relative">
        {/* Depth vignette from edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080810_100%)] pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('focus')}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#2DD4BF]">
              <TargetIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Current Focus</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed mb-8">
                Peak One Holdings is currently developing a creator-led, social consumer platform within the regulated sports and gaming ecosystem.
              </p>
              <p className="text-lg text-[#9ca3af] leading-relaxed mb-8">
                The platform is designed to feel more like a content-driven experience than a traditional transactional product, with a strong emphasis on engagement, trust, and long-term user relationships.
              </p>
              <p className="text-lg text-[#9ca3af] leading-relaxed">
                The product is being built privately and is intended to launch exclusively through partnerships with licensed operators. Development is focused on creating genuine value for users and partners alike.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-lg p-5">
                <p className="text-[#2DD4BF] text-sm font-medium mb-1">Development Stage</p>
                <p className="text-white">Private Development</p>
              </div>
              <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-lg p-5">
                <p className="text-[#2DD4BF] text-sm font-medium mb-1">Go-to-Market</p>
                <p className="text-white">Partnership-First Launch</p>
              </div>
              <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-lg p-5">
                <p className="text-[#2DD4BF] text-sm font-medium mb-1">Target Partners</p>
                <p className="text-white">Licensed Operators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision Section */}
      <section id="vision" className="py-36 md:py-48 relative">
        {/* Subtle top-down vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d1117_0%,transparent_15%,transparent_85%,#0d1117_100%)] pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('vision')}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#2DD4BF]">
              <ChartIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Long-Term Vision</h2>
          </div>

          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed mb-8">
              Peak One Holdings is structured to support the creation of multiple platform-scale businesses over time, beginning with its flagship regulated consumer product.
            </p>
            <p className="text-lg text-[#9ca3af] leading-relaxed mb-12">
              The company's long-term vision is to build category-defining platforms at the intersection of social engagement, technology, and regulated consumer experiences. We see an opportunity to create products that genuinely serve users while operating in full alignment with regulatory requirements and licensed partners.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-[#0d1117] border border-[#1f2937]">
                <p className="text-3xl font-bold text-[#2DD4BF] mb-2">Platform</p>
                <p className="text-[#9ca3af] text-sm">Scale businesses, not features</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-[#0d1117] border border-[#1f2937]">
                <p className="text-3xl font-bold text-[#2DD4BF] mb-2">Category</p>
                <p className="text-[#9ca3af] text-sm">Defining, not competing</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-[#0d1117] border border-[#1f2937]">
                <p className="text-3xl font-bold text-[#2DD4BF] mb-2">Long-Term</p>
                <p className="text-[#9ca3af] text-sm">Durable value creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-32 md:py-40 bg-[#0d1117] relative">
        {/* Corner vignettes for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#0a0a0f_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#0a0a0f_0%,transparent_50%)] pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('approach')}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#2DD4BF]">
              <ShieldIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Approach</h2>
          </div>
          <p className="text-[#9ca3af] text-lg mb-12 max-w-3xl">
            Every decision at Peak One Holdings is guided by a set of principles designed for regulated markets and long-term success.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Partner-First Model</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">
                We build for integration with licensed operators, not to compete with them. Strategic alignment over independent operation.
              </p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Compliance-Forward</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">
                Conservative posture on regulatory matters. Trust and transparency are non-negotiable foundations.
              </p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Sustainable Growth</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">
                Long-term alignment over short-term growth tactics. Durable business models built through trust.
              </p>
            </div>

            <div className="bg-[#0a0a0f] border border-[#1f2937] rounded-xl p-10 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-3 h-3 bg-[#2DD4BF] rounded-full mb-8" />
              <h3 className="text-white text-xl font-semibold mb-4">Disciplined Execution</h3>
              <p className="text-[#9ca3af] text-lg leading-relaxed">
                Category-defining outcomes require focus and discipline. We prioritize depth over breadth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-36 md:py-48 relative">
        {/* Subtle centered glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d1117_0%,transparent_60%)] pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('founder')}`}>
          <div className="flex items-center gap-4 mb-12">
            <div className="text-[#2DD4BF]">
              <UserIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Founder</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">Evan Webdale</h3>
              <div className="space-y-6 text-lg text-[#9ca3af] leading-relaxed">
                <p>
                  Peak One Holdings was founded by Evan Webdale, founder and CEO of <span className="text-white">Uncle Don's Light Beer</span> — a first-responder-owned consumer brand operating across multiple U.S. states.
                </p>
                <p>
                  Evan has experience building and scaling regulated consumer products, managing partnerships, and operating within compliance-driven environments. This background directly informs Peak One Holdings' approach to regulated markets.
                </p>
                <p>
                  The company was founded with a clear thesis: the next generation of consumer platforms in regulated industries will be built through partnership, trust, and disciplined execution — not aggressive tactics that create regulatory risk.
                </p>
              </div>
            </div>
            <div className="bg-[#0d1117] rounded-xl p-8 border border-[#1f2937]">
              <p className="text-[#2DD4BF] text-sm font-medium uppercase tracking-wider mb-4">Background</p>
              <ul className="space-y-4 text-[#c9cdd4]">
                <li className="flex items-start gap-3">
                  <span className="text-[#2DD4BF] mt-1">•</span>
                  <span>Founder & CEO, Uncle Don's Light Beer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2DD4BF] mt-1">•</span>
                  <span>Multi-state regulated product operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2DD4BF] mt-1">•</span>
                  <span>Consumer brand development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2DD4BF] mt-1">•</span>
                  <span>Partnership & distribution management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-40 bg-[#0d1117] relative">
        {/* Bottom fade to footer */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
        <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${fadeIn('contact')}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#2DD4BF]">
              <HandshakeIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Partnerships</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
            <div>
              <p className="text-xl md:text-2xl text-[#c9cdd4] font-light leading-relaxed mb-6">
                Peak One Holdings is currently exploring strategic partnerships with licensed sportsbook and gaming operators.
              </p>
              <p className="text-lg text-[#9ca3af] leading-relaxed mb-8">
                We're looking for partners who share our commitment to compliance, long-term value creation, and building products that genuinely serve users. If you're a licensed operator interested in discussing potential collaboration, we'd welcome the conversation.
              </p>
              <a
                href="mailto:evan@peakoneholdings.com"
                className="inline-flex items-center gap-3 text-xl md:text-2xl text-white hover:text-[#2DD4BF] transition-colors font-medium group"
              >
                <span>evan@peakoneholdings.com</span>
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-8 md:p-10 border border-[#1f2937]">
              <h3 className="text-xl font-semibold text-white mb-6">Ideal Partners</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Licensed sportsbook operators</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Gaming operators seeking distribution innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Organizations committed to compliance-first approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#c9cdd4]">Partners interested in long-term strategic alignment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-[#1f2937]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Credibility Line */}
          <p className="text-center text-[#4b5563] text-sm tracking-wider mb-12">
            Built for long-term alignment with licensed operators
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="/logo.png"
                alt="Peak One Holdings LLC"
                className="w-[130px]"
              />
              <p className="text-[#6b7280] text-sm">Building category-defining platforms in regulated markets.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href="mailto:evan@peakoneholdings.com"
                className="text-[#9ca3af] hover:text-[#2DD4BF] transition-colors"
              >
                evan@peakoneholdings.com
              </a>
              <p className="text-[#6b7280] text-sm">&copy; {new Date().getFullYear()} Peak One Holdings LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
