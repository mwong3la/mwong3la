'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Code, Server, Smartphone, Globe } from 'lucide-react'

const services = [
  {
    id: 'fullstack',
    title: 'FULL-STACK DEVELOPMENT',
    description:
      'Building robust, scalable web applications from frontend to backend using modern technologies.',
    icon: <Code className="w-6 h-6" />,
    features: [
      'Custom Web Applications',
      'Backend API Development (Go, Java, Node.js)',
      'Frontend Development (React, Next.js)',
      'Database Design & Optimization',
      'Authentication & Security'
    ]
  },
  {
    id: 'mobile',
    title: 'MOBILE APP DEVELOPMENT',
    description:
      'Cross-platform mobile applications with seamless performance and modern UI/UX.',
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      'React Native / Flutter Development',
      'API Integration',
      'Offline-first Functionality',
      'Push Notifications & Real-time Updates'
    ]
  },
  {
    id: 'cloud',
    title: 'CLOUD & DEVOPS',
    description:
      'Deploying and managing applications with modern cloud infrastructure and automation.',
    icon: <Server className="w-6 h-6" />,
    features: [
      'Cloud Deployments (AWS, GCP, Azure)',
      'CI/CD Pipeline Setup',
      'Docker & Kubernetes',
      'Monitoring & Logging',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'architecture',
    title: 'SYSTEM ARCHITECTURE',
    description:
      'Designing high-performance, scalable, and secure system architectures tailored to business needs.',
    icon: <Globe className="w-6 h-6" />,
    features: [
      'Microservices Architecture',
      'Event-driven Systems',
      'Performance Optimization',
      'Scalability Consulting',
      'Security Best Practices'
    ]
  },
]

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl lg:text-8xl font-bold text-black leading-tight mb-8">
                SERVICES
              </h2>
            </motion.div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-300"
                >
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-100/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-gray-600 group-hover:text-black transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-gray-700 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-black group-hover:text-gray-700 transition-colors">
                      {expandedService === service.id ? (
                        <Minus size={24} />
                      ) : (
                        <Plus size={24} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-10">
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-700 flex items-center"
                              >
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Description */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-black mb-4">
                  FULL-STACK ENGINEER CRAFTING INTUITIVE, USER-FRIENDLY EXPERIENCES THROUGH
                  WIREFRAMING, PROTOTYPING, & VISUAL DESIGN.
                </h4>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-black">05</div>
                    <div className="text-sm text-gray-600 mt-1">YEARS</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">5.00</div>
                    <div className="text-sm text-gray-600 mt-1">RATING</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">10+</div>
                    <div className="text-sm text-gray-600 mt-1">HAPPY CLIENTS</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black">03</div>
                    <div className="text-sm text-gray-600 mt-1">CERTIFICATIONS</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-xl font-semibold text-black">Technical Expertise</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">React/Next.js</span>
                      {/* <span className="text-sm text-gray-600">92%</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">JavaScript</span>
                      {/* <span className="text-sm text-gray-600">90%</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Golang</span>
                      {/* <span className="text-sm text-gray-600">95%</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>



                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Java</span>
                      {/* <span className="text-sm text-gray-600">88%</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}