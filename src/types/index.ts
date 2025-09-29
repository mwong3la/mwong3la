export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'backend' | 'fullstack'
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'mobile' | 'tools'
}