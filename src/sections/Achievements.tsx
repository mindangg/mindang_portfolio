import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ACHIEVEMENTS } from '../data'

export default function Achievements() {
  const ref = useScrollAnimation()

  return (
    <section id="achievements" className="py-32 bg-ink/5 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-20">
          <span className="text-label mb-4 block">Achievements</span>
          <h2 className="heading-lg">
            Competed, built,
            <br />
            <span className="italic text-gold">and won.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={ach.title}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="group border border-ink/10 bg-cream hover:border-gold/50 transition-all duration-400 p-8 h-full flex flex-col gap-6 hover:-translate-y-1 hover:shadow-xl">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Prize badge */}
                  <span className="font-mono text-sm bg-ink text-gold px-3 py-1.5 tracking-widest whitespace-nowrap">
                    {ach.prize}
                  </span>
                  {/* Year */}
                  <span className="font-mono text-xs text-ink/30 mt-1">{ach.year}</span>
                </div>

                {/* Title + event */}
                <div>
                  <h3 className="font-display text-xl font-bold text-ink leading-tight mb-2">
                    {ach.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-px bg-gold/60 flex-shrink-0" />
                    <span className="font-body text-sm text-gold font-medium">{ach.event}</span>
                  </div>
                  <div className="font-mono text-xs text-ink/30 mt-1 tracking-wide">
                    {ach.organizer}
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-ink/55 text-base leading-relaxed flex-1">
                  {ach.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-ink/8">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-ink/5 border border-ink/10 text-ink/50 px-3 py-1 group-hover:border-gold/30 group-hover:text-ink/70 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
