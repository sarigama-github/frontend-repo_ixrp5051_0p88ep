import { Wrench, Factory, Flame, Thermometer, Cog, Pipe } from 'lucide-react'

const services = [
  { icon: Factory, title: 'Industrial Chimneys', desc: 'Design, fabrication and erection of heavy-duty steel chimneys with precise tolerances and long service life.' },
  { icon: Thermometer, title: 'Boilers & Pressure Vessels', desc: 'Custom boilers and tanks manufactured to standards with quality checks and hydro-testing.' },
  { icon: Pipe, title: 'Pipe Bending & Piping', desc: 'Accurate pipe bending, spooling, and installation for process and utility lines.' },
  { icon: Flame, title: 'SS & Argon Welding', desc: 'High-quality stainless steel and argon welding by certified fabricators for hygienic and aesthetic finishes.' },
  { icon: Cog, title: 'Hydraulic Works', desc: 'Hydraulic system fabrication, cylinder repairs, and power pack assemblies.' },
  { icon: Wrench, title: 'Custom Fabrication', desc: 'End-to-end fabrication and erection services for structures, platforms, and industrial components.' }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What We Do</h2>
        <p className="text-blue-100 text-center mt-3 max-w-2xl mx-auto">Comprehensive metal fabrication and industrial solutions for factories, plants, and infrastructure projects.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <s.icon className="w-8 h-8 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
