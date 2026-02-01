import { useEffect, useState } from 'react';

function LobsterIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="50" cy="55" rx="18" ry="25" fill="url(#lobsterGrad)" />
      {/* Tail segments */}
      <ellipse cx="50" cy="82" rx="12" ry="8" fill="#A02030" />
      <ellipse cx="50" cy="90" rx="10" ry="6" fill="#8B1A1A" />
      <path d="M40 94 L50 100 L60 94" fill="#C41E3A" />
      {/* Head */}
      <ellipse cx="50" cy="32" rx="14" ry="10" fill="url(#lobsterGrad)" />
      {/* Eyes */}
      <circle cx="44" cy="28" r="3" fill="#0A1628" />
      <circle cx="56" cy="28" r="3" fill="#0A1628" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="57" cy="27" r="1" fill="white" />
      {/* Antennae */}
      <path d="M42 24 Q30 10 20 5" stroke="#C41E3A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58 24 Q70 10 80 5" stroke="#C41E3A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Left Claw */}
      <g className="animate-claw" style={{ transformOrigin: '25px 45px' }}>
        <ellipse cx="20" cy="45" rx="12" ry="8" fill="#C41E3A" transform="rotate(-30 20 45)" />
        <path d="M8 38 Q5 42 10 48" stroke="#A02030" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M12 35 Q8 40 12 48" stroke="#A02030" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Right Claw */}
      <g className="animate-claw" style={{ transformOrigin: '75px 45px', animationDelay: '0.5s' }}>
        <ellipse cx="80" cy="45" rx="12" ry="8" fill="#C41E3A" transform="rotate(30 80 45)" />
        <path d="M92 38 Q95 42 90 48" stroke="#A02030" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M88 35 Q92 40 88 48" stroke="#A02030" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Legs */}
      <path d="M35 50 L25 60" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 58 L28 70" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 66 L30 78" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 50 L75 60" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 58 L72 70" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 66 L70 78" stroke="#A02030" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="lobsterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#8B1A1A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Bubble({ delay, left, size }: { delay: number; left: number; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-50px',
        animation: `bubble ${8 + Math.random() * 4}s ease-in infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

function WavePattern() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill="rgba(26, 47, 74, 0.5)"
          className="animate-wave"
        />
        <path
          d="M0,80 C200,40 400,100 600,80 C800,60 1000,100 1200,80 L1200,120 L0,120 Z"
          fill="rgba(10, 22, 40, 0.8)"
          className="animate-wave"
          style={{ animationDelay: '-2s' }}
        />
      </svg>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <div
      className="glass-card rounded-2xl p-8 hover:border-[#C41E3A]/30 transition-all duration-500 hover:transform hover:-translate-y-2 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-xl lobster-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold mb-4 text-[#E8D4C4]">{title}</h3>
      <p className="text-[#F0F7FA]/70 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative flex gap-6 group">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full lobster-gradient flex items-center justify-center font-display text-2xl font-bold text-white shadow-lg shadow-[#C41E3A]/30 group-hover:scale-110 transition-transform">
          {number}
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-[#C41E3A] to-transparent absolute left-8 top-16 -z-10" />
      </div>
      <div className="pb-12">
        <h3 className="font-display text-xl font-bold mb-2 text-[#E8D4C4]">{title}</h3>
        <p className="text-[#F0F7FA]/70">{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    left: Math.random() * 100,
    size: 10 + Math.random() * 30,
  }));

  return (
    <div className="min-h-screen ocean-gradient shell-texture">
      {/* Floating Bubbles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <LobsterIcon className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <span className="font-display text-2xl font-bold text-[#E8D4C4]">Lobster</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#F0F7FA]/70 hover:text-[#FF6B6B] transition-colors">Features</a>
            <a href="#how-it-works" className="text-[#F0F7FA]/70 hover:text-[#FF6B6B] transition-colors">How It Works</a>
            <button className="cta-button px-6 py-2 rounded-full text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Decorative Lobster */}
        <div
          className="absolute right-0 top-1/4 opacity-10 animate-float pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <LobsterIcon className="w-96 h-96" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="text-2xl">🦞</span>
              <span className="text-[#FF6B6B] font-medium">Deep dive into research</span>
            </div>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-[#E8D4C4]">Crack Open</span>
            <br />
            <span className="text-gradient">Economics & CS</span>
            <br />
            <span className="text-[#E8D4C4]">Research</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-[#F0F7FA]/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Like a lobster navigating the ocean depths, we help you explore the deepest
            waters of academic research. Pinch through complexity, surface with clarity.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <button className="cta-button px-10 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3">
              <span>Start Researching</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-10 py-4 rounded-full border border-[#E8D4C4]/30 text-[#E8D4C4] font-bold text-lg hover:bg-[#E8D4C4]/10 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#E8D4C4]/10 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div>
              <div className="font-display text-4xl md:text-5xl font-black text-gradient">50K+</div>
              <div className="text-[#F0F7FA]/50 mt-2">Research Papers</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-black text-gradient">12K+</div>
              <div className="text-[#F0F7FA]/50 mt-2">Active Researchers</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-black text-gradient">98%</div>
              <div className="text-[#F0F7FA]/50 mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <WavePattern />
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#E8D4C4] mb-6">
              Why Choose <span className="text-gradient">Lobster</span>?
            </h2>
            <p className="text-xl text-[#F0F7FA]/60 max-w-2xl mx-auto">
              Our shell-hardened platform provides the tools you need to navigate
              complex research waters with precision and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Deep Analysis"
              description="Like a lobster's compound eyes seeing in all directions, our AI analyzes research from every angle to surface key insights."
              delay={0}
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning Fast"
              description="Lobsters can swim backwards at 11mph. We process research papers even faster, delivering results in milliseconds."
              delay={100}
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Shell-Hard Security"
              description="Your research is protected by an exoskeleton of encryption. Multi-layered security keeps your data safe."
              delay={200}
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Colony Collaboration"
              description="Lobsters thrive in groups. Share findings, collaborate on papers, and build your research colony."
              delay={300}
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Trend Tracking"
              description="Detect currents in academic research. Know where the field is heading before others catch on."
              delay={400}
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Visual Mapping"
              description="Transform complex research landscapes into beautiful visual maps. See connections others miss."
              delay={500}
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <LobsterIcon className="w-64 h-64 rotate-45" />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-32 px-6 bg-gradient-to-b from-transparent to-[#0A1628]/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#E8D4C4] mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-[#F0F7FA]/60 max-w-2xl mx-auto">
              Three simple steps to crack open your research potential
            </p>
          </div>

          <div className="space-y-4">
            <StepCard
              number="1"
              title="Dive In"
              description="Upload your research papers, paste URLs, or describe your topic. Our platform accepts multiple formats and instantly begins processing."
            />
            <StepCard
              number="2"
              title="Pinch & Parse"
              description="Our AI claws through thousands of papers, extracting key insights, identifying connections, and building a comprehensive knowledge graph."
            />
            <StepCard
              number="3"
              title="Surface Insights"
              description="Receive beautifully organized summaries, visualizations, and actionable insights. Export in any format for your papers or presentations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden">
            {/* Background Lobster */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <LobsterIcon className="w-full h-full" />
            </div>

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-black text-[#E8D4C4] mb-6">
                Ready to Take the <span className="text-gradient">Plunge</span>?
              </h2>
              <p className="text-xl text-[#F0F7FA]/70 mb-10 max-w-2xl mx-auto">
                Join thousands of researchers who've discovered that the best insights
                come from the deepest waters. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cta-button px-12 py-5 rounded-full text-white font-bold text-lg flex items-center justify-center gap-3">
                  <span>🦞</span>
                  <span>Start Free Trial</span>
                </button>
                <button className="px-12 py-5 rounded-full border border-[#E8D4C4]/30 text-[#E8D4C4] font-bold text-lg hover:bg-[#E8D4C4]/10 transition-colors">
                  Contact Sales
                </button>
              </div>
              <p className="text-[#F0F7FA]/40 mt-6 text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[#E8D4C4]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LobsterIcon className="w-8 h-8" />
              <span className="font-display text-xl font-bold text-[#E8D4C4]">Lobster Research</span>
            </div>
            <div className="flex gap-8 text-[#F0F7FA]/50 text-sm">
              <a href="#" className="hover:text-[#FF6B6B] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#FF6B6B] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#FF6B6B] transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#E8D4C4]/5 text-center">
            <p className="text-[#F0F7FA]/30 text-xs">
              Requested by <a href="https://twitter.com/onlybased_god" className="hover:text-[#FF6B6B] transition-colors">@onlybased_god</a> · Built by <a href="https://twitter.com/clonkbot" className="hover:text-[#FF6B6B] transition-colors">@clonkbot</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}