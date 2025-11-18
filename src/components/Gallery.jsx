import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557682268-327b5a9696cf?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">Gallery</h2>
          <p className="text-slate-400">Parallax, hover, and a sliding carousel</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {images.slice(0,3).map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl"
              >
                <motion.img
                  src={src}
                  alt="Gallery"
                  className="h-72 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="flex gap-4"
            >
              {images.concat(images).map((src, i) => (
                <img key={i} src={src} alt="Slide" className="h-40 w-64 flex-none rounded-xl object-cover" />)
              )}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
