import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Name</label>
              <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-cyan-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300">Email</label>
              <input type="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-cyan-400" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-slate-300">Message</label>
              <textarea rows="4" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 focus:border-cyan-400" placeholder="Tell us about your vision" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-400">We typically respond within 24 hours.</p>
            <button className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-2 font-medium text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition hover:brightness-110">
              Send
            </button>
          </div>
          {/* Floating particles */}
          <div className="pointer-events-none absolute -top-32 right-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
