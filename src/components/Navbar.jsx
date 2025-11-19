import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-wide text-lg">Lucky Engineering</a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((i) => (
            <a key={i.label} href={i.href} className="text-blue-100 hover:text-white transition">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Get a Quote</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map((i) => (
            <a key={i.label} href={i.href} className="block text-blue-100 py-2">
              {i.label}
            </a>
          ))}
          <a href="#contact" className="block w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">Get a Quote</a>
        </div>
      )}
    </header>
  )
}
