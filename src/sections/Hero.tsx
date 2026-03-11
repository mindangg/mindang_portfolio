import { useEffect, useState } from 'react'
import { ArrowDownRight, Github, Linkedin, Instagram } from 'lucide-react'

const ROLES = ['Creative Developer', 'Full-Stack Engineer', 'Brand Craftsman']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setFade(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 section-padding overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

      {/*/!* Decorative circle *!/*/}
      {/*<div className="absolute top-24 right-8 md:right-24 w-64 h-64 md:w-96 md:h-96 rounded-full border border-gold/20 animate-spin-slow pointer-events-none" />*/}
      {/*<div className="absolute top-32 right-16 md:right-32 w-48 h-48 md:w-72 md:h-72 rounded-full border border-gold/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />*/}

      {/* Floating label */}
      <div className="absolute top-28 right-8 md:right-28 w-28 h-28 md:w-40 md:h-40 flex items-center justify-center animate-float pointer-events-none">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 160 160" className="w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }}>
            <defs>
              <path id="circle" d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
            </defs>
            <text className="fill-ink/40" fontSize="12" fontFamily="JetBrains Mono, monospace" letterSpacing="3">
              <textPath href="#circle">OPEN TO WORK • AVAILABLE NOW •&nbsp;</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl">
        {/* Label */}
        <div
          className="text-label mb-8 flex items-center gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <span className="w-8 h-px bg-gold inline-block" />
          Based in Ho Chi Minh City, Vietnam
        </div>

        {/* Name */}
        <h1
          className="heading-xl mb-2 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Tran
        </h1>
        <h1
          className="heading-xl text-gradient mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
        >
          Minh Dang
        </h1>

        {/* Role rotator */}
        <div
          className="mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <span className="font-display text-2xl md:text-3xl font-light italic text-ink/50 mr-3">—</span>
          <span
            className="font-display text-2xl md:text-3xl font-light italic text-ink/70 transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {ROLES[roleIdx]}
          </span>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-end gap-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
        >
          <p className="font-body text-ink/60 text-lg max-w-md leading-relaxed">
            I craft digital experiences where design precision meets engineering excellence — from pixels to production.
          </p>

          <div className="flex items-center gap-4 ml-auto">
            <a href="#work" className="btn-primary group">
              View Work
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div
        className="fixed left-6 bottom-12 z-40 hidden lg:flex flex-col items-center gap-4 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="w-px h-16 bg-gold/40" />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
          <Linkedin size={16} />
        </a>
        <a href="https://www.instagram.com/_.mindang/" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors duration-200">
          <Instagram size={16} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-24 flex items-center gap-3 text-label opacity-0 animate-fade-in"
        style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gold/60 animate-float" />
      </div>
    </section>
  )
}
