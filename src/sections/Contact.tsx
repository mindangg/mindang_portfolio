import { useState } from 'react'
import { Send, MapPin, Mail, Phone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const ref = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with actual form submission logic
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 bg-ink section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <div className="animate-on-scroll">
              <span className="text-label text-gold/60 mb-4 block">Get In Touch</span>
              <h2 className="heading-lg text-cream mb-8">
                Let's build something
                <br />
                <span className="italic text-gold">remarkable together.</span>
              </h2>
              <p className="font-body text-cream/50 text-lg leading-relaxed mb-12">
                Whether you have a project in mind, need a creative partner, or just want to talk craft —
                my inbox is always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="animate-on-scroll space-y-6" style={{ transitionDelay: '0.15s' }}>
              {[
                { icon: Mail, label: 'Email', value: 'minhdang875425@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+84 90 240 4915' },
                { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-cream/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-cream/30 uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="font-body text-cream/70">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Big email link */}
            <div className="animate-on-scroll mt-16" style={{ transitionDelay: '0.25s' }}>
              <a
                href="minhdang875425@gmail.com"
                className="font-display text-3xl md:text-4xl font-bold text-cream/20 hover:text-gold transition-colors duration-300 break-all"
              >
                minhdang875425@gmail.com
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Minh Dang' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'minhdang875425@gmail.com' },
                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs text-cream/30 uppercase tracking-widest block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-transparent border border-cream/10 text-cream placeholder:text-cream/20 px-5 py-4 font-body focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-xs text-cream/30 uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full bg-transparent border border-cream/10 text-cream placeholder:text-cream/20 px-5 py-4 font-body focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-3 py-5 font-body font-medium tracking-wide transition-all duration-300 ${
                  sent
                    ? 'bg-accent/80 text-cream cursor-default'
                    : 'bg-gold text-ink hover:bg-gold-light'
                }`}
              >
                {sent ? (
                  <>Message Sent! ✓</>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
