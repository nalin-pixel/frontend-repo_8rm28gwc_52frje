import React, { useRef } from 'react'
import Hero3D from './components/Hero3D'
import Features from './components/Features'
import Viewer3D from './components/Viewer3D'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  const featuresRef = useRef(null)
  const handleLearnMore = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black font-[Inter] text-white">
      <Hero3D onLearnMore={handleLearnMore} />
      <div ref={featuresRef}>
        <Features />
      </div>
      <Viewer3D />
      <Gallery />
      <Pricing />
      <Contact />

      {/* Final CTA */}
      <section className="relative w-full bg-black py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">Ready to feel the future?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">Launch a premium 3D experience with luxurious motion and a pristine interface.</p>
          <a
            href="#pricing"
            className="group relative mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-3 text-lg font-semibold text-white shadow-[0_0_60px_rgba(99,102,241,0.35)] transition hover:brightness-110"
          >
            <span className="relative z-10">Start Now</span>
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </a>
          {/* small animated element */}
          <div className="mx-auto mt-10 h-24 w-24">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/30" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 blur-md" />
              <div className="absolute inset-4 rounded-full bg-black" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} NeonForge. All rights reserved.
      </footer>
    </div>
  )
}

export default App
