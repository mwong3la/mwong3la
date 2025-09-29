'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-200 relative overflow-hidden">
      {/* DEVELOPER Background Text - positioned to align with left content */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className="container mx-auto h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] lg:text-[12vw] font-black text-white leading-none select-none absolute top-20"
          >
            DEVELOPER
          </motion.div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 h-screen pt-32">
        <div className="container mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 items-center h-full">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="text-sm font-medium text-gray-700 tracking-wider">
                  👋🏾 I&apos;M AMOS MWONGELA
                </div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
                  BACKEND,
                  <br />
                  PRODUCT FULLSTACK
                  <br />
                  & MOBILE.
                </h1>
              </motion.div>
            </div>

            {/* Right Content - Large Circle with Profile */}
            <div className="relative flex justify-center items-center">
              {/* Large Orange Circle - positioned to match reference exactly */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-[450px] h-[450px] lg:w-[500px] lg:h-[500px]"
              >
                {/* Orange/Red Circle Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-red-500"></div>

                {/* Profile Silhouette - realistic shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    {/* Main profile silhouette */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-80 bg-black/90 rounded-t-full"></div>
                    {/* Head silhouette */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-28 h-36 bg-black/90 rounded-t-full"></div>
                    {/* Neck area */}
                    <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-black/90"></div>
                  </div>
                </div>

                {/* Purple Signature - EXACTLY like reference, spanning across the circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="flex items-center gap-4 text-7xl lg:text-8xl font-light text-purple-600"
                    style={{ fontFamily: 'Dancing Script, cursive' }}
                  >
                    <span>Amos</span>
                    <span>Mwongela</span>
                  </motion.div>
                </div>

                {/* Skill Badges - positioned exactly like reference */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-8 left-8 bg-black text-white px-4 py-2 rounded-full text-sm font-medium z-20"
                >
                  Branding
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute top-12 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium z-20"
                >
                  Designer
                </motion.div>
              </motion.div>

              {/* Info Card - positioned like in reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-0 right-0 bg-white p-6 rounded-2xl shadow-lg max-w-sm z-20"
              >
                <div className="text-sm text-gray-800 leading-relaxed mb-4">
                  <strong>5+ Years of Expertise</strong>, Full-Stack
                  Software Engineer in Kenya, Africa.
                </div>
                <div className="text-sm text-gray-600 underline mb-4">
                  amosmwongelah@gmail.com
                </div>

                {/* LET'S DISCUSS Badge - exact style */}
                <div className="flex justify-end">
                  <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center">
                    <div className="text-xs font-bold text-center leading-tight">
                      LET&apos;S<br />DISCUSS
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-600"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}