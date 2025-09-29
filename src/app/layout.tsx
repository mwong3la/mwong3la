import type { Metadata } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amos Mwongela - Software Engineer',
  description: 'Full-stack software engineer specializing in Golang, Java, JavaScript, web development, backend systems, and mobile applications.',
  keywords: ['Software Engineer', 'Full-stack Developer', 'Golang', 'Java', 'JavaScript', 'Web Development', 'Backend Development', 'Mobile Development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}