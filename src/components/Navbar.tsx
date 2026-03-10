import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-gold/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="section-padding flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl font-bold tracking-tight group"
        >
          <span className="text-ink">min</span>
          <span className="text-gold group-hover:text-accent transition-colors duration-300">dang</span>
          <span className="text-ink">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm font-medium text-ink/60 hover:text-ink transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:minhdang875425@gmail.com"
            className="btn-primary text-sm py-3 px-6"
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream border-t border-gold/20 transition-all duration-400 overflow-hidden ${
          open ? 'max-h-screen py-8' : 'max-h-0'
        }`}
      >
        <ul className="section-padding flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="font-display text-2xl font-bold text-ink hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <a href="mailto:minhdang875425@gmail.com" className="btn-primary inline-block">
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
