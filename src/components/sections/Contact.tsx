'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'amosmwongelah@gmail.com',
    href: 'mailto:amosmwongelah@gmail.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+2547 97 377 943',
    href: 'tel:+254123456789'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#'
  }
]

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/amosmwongela', label: 'Github' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/amosmwongela', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/amosmwongela', label: 'Twitter' }
]

const faqs = [
  {
    question: 'What technologies do you work with?',
    answer: 'I specialize in Golang for backend development, JavaScript/TypeScript for frontend (React, Next.js), Java for enterprise applications, and mobile development with React Native.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex full-stack applications can take 2-4 months. I provide detailed timelines during consultation.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes! I work with clients globally across different time zones. I use modern communication tools to ensure smooth collaboration regardless of location.'
  },
  {
    question: 'What&apos;s your approach to project management?',
    answer: 'I follow agile methodologies with regular check-ins, milestone reviews, and continuous communication. You&apos;ll have full visibility into project progress throughout development.'
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form & Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl lg:text-8xl font-bold text-black leading-tight mb-8">
                LET&apos;S TALK
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 text-gray-700 hover:text-black transition-colors group"
                >
                  <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-black hover:text-white transition-colors duration-200 rounded-full"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </motion.form>
          </div>

          {/* Right Column - FAQs */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-black mb-8">
                QUESTIONS & ANSWERS
              </h3>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full text-left"
                  >
                    <h4 className="font-semibold text-black hover:text-gray-700 transition-colors">
                      {faq.question}
                    </h4>
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-orange-500 to-red-500 p-8 rounded-lg text-white mt-8"
            >
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-black rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ready to start your project?</h4>
                  <p className="text-orange-100 mb-4">
                    Let&apos;s discuss your requirements and create something amazing together.
                  </p>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}