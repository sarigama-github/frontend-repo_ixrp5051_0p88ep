import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_45%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Contact />
        <footer className="py-10 text-center text-blue-200/80 border-t border-white/5">
          © {new Date().getFullYear()} Lucky Engineering. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
