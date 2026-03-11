import { useScrollAnimation } from '../hooks/useScrollAnimation'

// const STATS = [
//   { value: '7+', label: 'Years Experience' },
//   { value: '50+', label: 'Projects Delivered' },
//   { value: '30+', label: 'Happy Clients' },
//   { value: '12', label: 'Design Awards' },
// ]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-32 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — image placeholder */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* Main image block */}
              <div className="aspect-[3/4] bg-ink rounded-none overflow-hidden relative">
                <img
                  src="/IMG_3618.jpg"
                  alt="portrait"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Subtle gold overlay for cohesion */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,4,0.45) 100%)' }}
                />
              </div>

              {/* Accent block */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-1/3 bg-gold/10 border border-gold/30 -z-10" />

              {/* Year badge */}
              <div className="absolute -top-4 -left-4 bg-accent text-cream px-4 py-2 font-mono text-xs tracking-widest">
                EST. 2026
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <span className="text-label mb-4 block">About Me</span>
              <h2 className="heading-lg mb-8">
                Design with care,<br />
                <span className="italic text-gold">code with precision.</span>
              </h2>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <p className="font-body text-ink/60 text-lg leading-relaxed mb-6">
                I am a third-year Software Engineering student at Sai Gon University with a strong foundation in web
                development and artificial intelligence.
              </p>
              <p className="font-body text-ink/60 text-lg leading-relaxed mb-10">
                I am passionate about building useful products that solve real-world
                problems and improve people’s daily lives. My goal is to create meaningful technology that not only helps
                others but also inspires them.
              </p>
            </div>

            {/*/!* Stats *!/*/}
            {/*<div*/}
            {/*  className="grid grid-cols-2 gap-6 animate-on-scroll"*/}
            {/*  style={{ transitionDelay: '0.3s' }}*/}
            {/*>*/}
            {/*  {STATS.map((stat) => (*/}
            {/*    <div key={stat.label} className="border-t border-gold/30 pt-4">*/}
            {/*      <div className="font-display text-4xl font-bold text-gradient mb-1">{stat.value}</div>*/}
            {/*      <div className="font-mono text-xs text-ink/40 uppercase tracking-widest">{stat.label}</div>*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* CV download */}
            <div className="animate-on-scroll mt-10" style={{ transitionDelay: '0.4s' }}>
              <a href="https://drive.google.com/file/d/1T7eecTdPFu29Uuq_y0_sf8-a7o5qhXCC/view" target='_blank' className="btn-outline">
                See my CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                  <path d="M7 1v9M3 7l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
