import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { EXPERIENCES } from '../data'

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-32 bg-ink/5 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-20">
          <span className="text-label mb-4 block">Experience</span>
          <h2 className="heading-lg">
            Where I've been
            <br />
            <span className="italic text-gold">sharpening the blade.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent hidden md:block" />

          <div className="space-y-0">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                className="animate-on-scroll md:pl-16 relative pb-16 last:pb-0"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-3 h-3 border-2 hidden md:block -translate-x-[5px] transition-colors ${
                    exp.current ? 'bg-gold border-gold' : 'bg-cream border-gold/40'
                  }`}
                />

                {/* Content */}
                <div className="group border-b border-ink/8 pb-16 last:border-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-display text-2xl font-bold">{exp.role}</h3>
                        {exp.current && (
                          <span className="font-mono text-xs bg-accent text-cream px-2 py-0.5 tracking-widest uppercase">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="font-body text-gold font-medium">{exp.company}</div>
                    </div>
                    <span className="font-mono text-sm text-ink/40 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="font-body text-ink/60 text-lg leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
