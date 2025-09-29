'use client'

import React from 'react'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/mwong3la', label: 'Github' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/mwong3la', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/mwong3la', label: 'Twitter' },
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:amosmwongelah@gmail.com', label: 'Email' }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Amos Mwongela</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack software engineer specializing in Golang, Java, and JavaScript.
              Building scalable solutions for web, backend, and mobile platforms.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-orange-500 transition-colors duration-200 rounded-full"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>amosmwongelah@gmail.com</p>
              <p>+2547 97 377 943</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Amos Mwongela. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-gray-800 hover:bg-orange-500 transition-colors duration-200 rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}