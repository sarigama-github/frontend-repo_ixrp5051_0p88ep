import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '', service: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus(`Thank you — your inquiry ID is ${data.id}`)
      setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '', service: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again or call us.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Request a Quote</h2>
          <p className="mt-3 text-blue-100">Tell us about your requirement — size, material, drawings, site constraints — and we’ll get back within 1 business day.</p>
          {status && <p className="mt-4 text-sm text-blue-200">{status}</p>}
        </div>

        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" placeholder="Your Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
            <input className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" placeholder="Company" value={form.company} onChange={e=>setForm({ ...form, company: e.target.value })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="email" className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" placeholder="Email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
            <input className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" placeholder="Phone" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <select className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" value={form.service} onChange={e=>setForm({ ...form, service: e.target.value })}>
              <option value="">Service of interest</option>
              <option>Chimneys</option>
              <option>Boilers & Tanks</option>
              <option>SS & Argon Welding</option>
              <option>Pipe Bending</option>
              <option>Fabrication</option>
              <option>Hydraulic Works</option>
            </select>
            <input className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10" placeholder="Subject" value={form.subject} onChange={e=>setForm({ ...form, subject: e.target.value })} required />
          </div>
          <textarea className="w-full bg-slate-800 text-white rounded-lg p-3 border border-white/10 min-h-[120px]" placeholder="Message" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} required />
          <button type="submit" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold">Send Inquiry</button>
        </form>
      </div>
    </section>
  )
}
