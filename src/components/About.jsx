export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/40 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Story</h2>
          <p className="mt-4 text-blue-100">Lucky Engineering began with our grandfather’s craftsmanship and commitment to honest work. Today, our father and uncle continue that legacy, combining hands-on experience with modern equipment to deliver dependable results.</p>
          <p className="mt-3 text-blue-100">We partner closely with companies to understand site conditions, standards, and timelines — ensuring safe execution and reliable performance in the field.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <ul className="space-y-3 text-blue-100">
            <li>• Family-run, legacy-driven business</li>
            <li>• Quality-first fabrication and erection</li>
            <li>• Skilled SS & argon welding team</li>
            <li>• On-time delivery and site safety</li>
            <li>• Transparent communication and documentation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
