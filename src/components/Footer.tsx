import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/5 py-12 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold">
          <span className="text-cream">min</span>
          <span className="text-gold">dang</span>
          <span className="text-cream">.</span>
        </div>

        <p className="font-mono text-xs text-cream/20 tracking-widest">
          © {new Date().getFullYear()} — Designed & Built with care
        </p>

        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: 'https://github.com/mindangg' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/minh-%C4%91%C4%83ng-tr%E1%BA%A7n-195913355/' }
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/20 hover:text-gold transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
