import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Work() {
  const ref = useScrollAnimation()

  return (
    <section id="work" className="py-32 bg-ink section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="animate-on-scroll">
            <span className="text-label text-gold/60 mb-4 block">Selected Work</span>
            <h2 className="heading-lg text-cream">
              Projects that
              <br />
              <span className="italic text-gold">speak for themselves.</span>
            </h2>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="animate-on-scroll group"
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative overflow-hidden border border-cream/5 transition-all duration-500 ${
          project.featured ? 'md:col-span-2' : ''
        }`}
        style={{ backgroundColor: project.color }}
      >
        {/* Color wash on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at top right, ${project.color}88, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Content */}
        <div className="relative p-8 min-h-72 flex flex-col justify-between">
          {/* Top */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs text-cream/30 tracking-widest uppercase">
              {project.category}
            </span>
            <div
              className={`w-10 h-10 border border-cream/20 flex items-center justify-center transition-all duration-300 ${
                hovered ? 'bg-gold border-gold' : ''
              }`}
            >
              <ArrowUpRight
                size={16}
                className={`transition-colors duration-300 ${hovered ? 'text-ink' : 'text-cream/40'}`}
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <div className="font-mono text-xs text-gold/60 mb-3">{project.year}</div>
            <h3 className="font-display text-2xl font-bold text-cream mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="font-body text-sm text-cream/50 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-cream/30 border border-cream/10 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
