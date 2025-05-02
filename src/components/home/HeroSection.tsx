'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

const HeroSection = () => {
  return (
    <section className="hero-section py-24 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container-large relative px-4 md:px-6 lg:px-8">
        <div className="hero-content max-w-4xl">
          <motion.h1
            className="main-hero_heading text-6xl md:text-7xl lg:text-[88px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jay Design <br/>
            Creative Director
          </motion.h1>

          <motion.p
            className="main-hero_paragraph cc-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Based in Gothenburg, Sweden, I specialize in capturing authentic moments and turning them into visual stories. With 15+ years of experience in Interaction Design, I've had the privilege of winning international Design awards and speaking at prestigious events. My work has been recognized globally, and I've had the opportunity to collaborate with a diverse range of clients, from families to global brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <CTAButton
              href="mailto:designestjay@gmail.com?subject=Work%20Request"
              text="LET'S CONNECT"
            />
          </motion.div>
        </div>
        
        {/* Social links - inside container with absolute positioning */}
        <motion.div 
          className="hero-social-links hidden md:flex items-center absolute top-8 right-0 md:right-6 lg:right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="https://dribbble.com/Jay-Design" className="text-link uppercase text-sm mr-6" target="_blank" rel="noopener noreferrer">Dribbble</Link>
          <Link href="https://www.behance.net/iamjaydesign" className="text-link uppercase text-sm mr-6" target="_blank" rel="noopener noreferrer">Behance</Link>
          <Link href="https://www.linkedin.com/in/designjay/" className="text-link uppercase text-sm" target="_blank" rel="noopener noreferrer">Linkedin</Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
