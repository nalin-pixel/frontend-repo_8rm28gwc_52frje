import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// A clean mock viewer that simulates color/mode switching with soft shadows
const Viewer3D = () => {
  const colors = [
    { name: 'Cyber Cyan', value: '#22d3ee' },
    { name: 'Ultraviolet', value: '#8b5cf6' },
    { name: 'Polar White', value: '#e5e7eb' },
  ]
  const modes = ['Standard', 'Pro', 'Stealth']

  const [color, setColor] = useState(colors[0].value)
  const [mode, setMode] = useState(modes[0])

  const boxShadow = useMemo(() => `0 50px 100px -20px ${color}55, 0 30px 60px -30px #000`, [color])

  return (
    <section id="viewer" className="relative w-full bg-gradient-to-b from-black via-slate-900 to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">3D Interaction</h2>
            <p className="mt-2 max-w-xl text-slate-300">Rotate the product, switch modes, and explore colorways. Built for delightful control with soft shadows and depth.</p>
          </div>
          <div className="flex items-center gap-3">
            {colors.map(c => (
              <button
                key={c.value}
                onClick={() => setColor(c.value)}
                title={c.name}
                className={`h-9 w-9 rounded-full ring-2 ring-white/20 transition hover:ring-white/40 ${color===c.value ? 'scale-110' : ''}`}
                style={{ background: c.value }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 grid place-items-center">
                {/* Simulated 3D object using layered divs */}
                <motion.div
                  drag
                  dragMomentum={false}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative h-40 w-40 cursor-grab active:cursor-grabbing"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${color}66, #111)`, boxShadow }}
                    />
                    <div className="absolute -inset-6 -z-10 rounded-2xl blur-2xl" style={{ background: `${color}33` }} />
                  </motion.div>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="mb-2 text-sm uppercase tracking-wider text-slate-400">Mode</p>
            <div className="mb-6 flex gap-2">
              {modes.map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-full border px-3 py-1 text-sm transition ${mode===m ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="space-y-2 text-slate-300">
              <p>Active color: <span style={{ color }} className="font-semibold">{color}</span></p>
              <p>Active mode: <span className="text-cyan-300 font-medium">{mode}</span></p>
              <p className="text-sm text-slate-400">Tip: drag the object to rotate. Hover for a gentle lift.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Viewer3D
