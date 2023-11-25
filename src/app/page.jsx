import React from 'react'
import { HeroSection, SectionTwo } from '@/containers'
import Image from 'next/image'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
        <HeroSection />
        <SectionTwo />
    </main>
  )
}

export default Home
