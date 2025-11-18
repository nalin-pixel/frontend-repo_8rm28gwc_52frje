import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero3D = ({ onLearnMore }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Elevate Reality
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">.3D</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-center text-lg text-slate-300"
        >
          A futuristic product experience with fluid motion, glowing accents, and an interactive 3D showcase.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center rounded-full bg-white/5 px-7 py-3 text-base font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/10"
          >
            <span className="relative z-10">Buy Now</span>
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-sky-500/30 to-violet-500/30 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </a>
          <button
            onClick={onLearnMore}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3 text-base font-semibold text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition hover:brightness-110"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle top light */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
    </section>
  )
}

export default Hero3D
