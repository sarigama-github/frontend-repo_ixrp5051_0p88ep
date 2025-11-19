import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Lucky Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl"
          >
            Trusted specialists in industrial fabrication since our founding by our grandfather. Today, led by our father and uncle, we deliver reliable solutions in chimneys, boilers, tanks, SS & Argon welding, pipe bending, custom fabrication and hydraulic works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">Get a Quote</a>
            <a href="#services" className="px-6 py-3 rounded-lg border border-blue-300/40 text-blue-100 hover:bg-blue-300/10 transition">Our Services</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-white">25+ </p>
              <p className="text-xs text-blue-100">Years Combined Experience</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-white">100+ </p>
              <p className="text-xs text-blue-100">Projects Delivered</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-white">ISO</p>
              <p className="text-xs text-blue-100">Quality Driven</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-lg bg-slate-700/60 border border-white/10" />
              <div className="rounded-lg bg-slate-700/60 border border-white/10" />
              <div className="rounded-lg bg-slate-700/60 border border-white/10" />
              <div className="rounded-lg bg-slate-700/60 border border-white/10" />
            </div>
          </div>
          <p className="mt-3 text-sm text-blue-200/70">Fabrication visuals coming soon — replace with your workshop photos.</p>
        </div>
      </div>
    </section>
  )
}
