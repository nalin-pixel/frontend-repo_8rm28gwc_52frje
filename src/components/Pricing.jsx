import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-black via-slate-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Pricing
        </motion.h2>

        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
          >
            <div className="absolute -inset-24 -z-0 rounded-full bg-gradient-to-r from-sky-500/20 to-violet-600/20 blur-3xl" />
            <h3 className="text-2xl font-semibold">Elite</h3>
            <p className="mt-2 text-slate-300">Everything you need for a premium 3D product presence.</p>
            <div className="my-6 text-5xl font-extrabold">$299</div>
            <ul className="space-y-2 text-slate-300">
              <li>Interactive 3D hero</li>
              <li>Feature animations</li>
              <li>Gallery & parallax</li>
              <li>Priority support</li>
            </ul>
            <a
              href="#contact"
              className="group relative mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
            >
              <span className="relative z-10">Get Started</span>
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
