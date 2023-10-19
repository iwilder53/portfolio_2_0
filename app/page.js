import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectSection'
import EmailSection from '@/components/EmailSection'
import { Metadata } from 'next'

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212] mx-auto px-2 py-4 ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">  <HeroSection /></div>
      <AboutSection />
      <ProjectsSection></ProjectsSection>
      <EmailSection />
    </main>
  )
}

export const metadata = {
  title: 'Yashkumar Bagaria Dev Portfolio',
  description: 'Portfolio site, showcasing my skills and past projects',
  keywords: ['Yashkumar Bagaria', 'Yashkumar', 'Bagaria', 'Y Bagaria', 'Yashkumar Rajkumar Bagaria', 'Next.js', 'React', 'JavaScript'],

}


