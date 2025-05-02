// Updated AboutSection with new text - July 10, 2024
// This change needs to be reflected on the live site
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="about-section padding-global py-24 md:py-32">
      <div className="container-large">
        <div className="about-top-container flex flex-col md:flex-row justify-between mb-10 md:mb-16">
          <div className="about-container-header flex items-center mb-4 md:mb-0">
            <p className="section-number">02</p>
            <h2 className="section-main-heading cc-heading-h3">about me</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="about-text">
            <motion.p 
              className="mb-8 main-hero_paragraph cc-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hey, I'm Jay, a Creative Director based in Gothenburg. With a passion for user experience, technology and design, I create delightful digital products and experiences that captivate audiences and drive business results.
            </motion.p>
            
            <div className="about-stats grid grid-cols-3 gap-6">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-semibold mb-2">50+</h3>
                <p className="font-medium">Projects Completed</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-semibold mb-2">15+</h3>
                <p className="font-medium">Years of Experience</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-semibold mb-2">20K+</h3>
                <p className="font-medium">Social Followers</p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="about-image relative aspect-[3/4] md:aspect-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about me.png"
              alt="Jay - Creative Director"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 