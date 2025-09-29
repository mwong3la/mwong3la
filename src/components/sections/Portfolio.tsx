'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

 const portfolioItems = [
    {
      id: 1,
      title: 'TradeSphere',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      label: '001',
      subtitle: 'Next-gen Trading Platform'
    },
    {
      id: 2,
      title: 'GoalForge',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      label: '002',
      subtitle: 'KPI & Goals Tracking'
    },
    {
      id: 3,
      title: 'MediAI',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      label: '003',
      subtitle: 'AI-Powered Hospital System'
    },
    {
      id: 4,
      title: 'NutriTrack',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      label: '004',
      subtitle: 'Personalized Diet Planning'
    }
  ];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[20vw] lg:text-[15vw] font-black text-white leading-none select-none"
          >
            LATEST PORTFOLIO
          </motion.div>
        </div>

        <div className="relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-6xl lg:text-8xl font-black text-black mb-4">
              LATEST PORTFOLIO
            </h2>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Label number (for first item) */}
                {item.label && (
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                    {item.label}
                  </div>
                )}

                {/* Subtitle (for first item) */}
                {item.subtitle && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black px-3 py-1 rounded-full text-xs font-medium">
                    {item.subtitle}
                  </div>
                )}

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-black">
                        {item.title}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}