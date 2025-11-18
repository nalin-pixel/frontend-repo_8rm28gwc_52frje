import React from 'react'
import { motion } from 'framer-motion'
import { Cuboid, Cpu, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    icon: Cuboid,
    title: 'Cinematic 3D',
    desc: 'Real-time rendering with buttery-smooth motion and depth-aware lighting.'
  },
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'Lightweight assets and progressive loading for instant interaction.'
  },
  {
    icon: Sparkles,
    title: 'Neon Accents',
    desc: 'A luxe palette of black, white, and electric cyan-violet glow.'
  },
  {
    icon: Zap,
    title: 'Micro Interactions',
    desc: 'Haptic-like feedback through hover, tilt, and parallax motion.'
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.05 * i, duration: 0.6 } })
}

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Product Features
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-600/20 blur-2xl transition-opacity group-hover:opacity-70" />
              <f.icon className="mb-4 h-8 w-8 text-cyan-300" />
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
