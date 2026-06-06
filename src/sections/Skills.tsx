import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SKILLS } from '../data'

const CATEGORIES = ['Languages', 'Frameworks', 'Cloud & DevOps', 'Databases']

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="py-32 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="animate-on-scroll mb-20">
          <span className="text-label mb-4 block">Skills & Stack</span>
          <h2 className="heading-lg">
            Tools I wield,
            <br />
            <span className="italic text-gold">craft I build.</span>
          </h2>
        </div>

        {/* Skill bars by category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat}
              className="animate-on-scroll"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-gold" />
                <h3 className="font-mono text-sm tracking-widest uppercase text-ink/50">{cat}</h3>
              </div>
              <div className="space-y-6">
                {SKILLS.filter((s) => s.category === cat).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm font-medium text-ink">{skill.name}</span>
                      {/*<span className="font-mono text-xs text-gold">{skill.level}%</span>*/}
                    </div>
                    <div className="h-px bg-ink/15" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
