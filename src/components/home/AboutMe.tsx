'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <section className="about-me-section py-24 md:py-32 bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="about-wrapper">
            <div className="about-top-container flex flex-col md:flex-row justify-between mb-16 md:mb-24">
              <div className="about-container-header flex items-center mb-4 md:mb-0">
                <p className="section-number">02</p>
                <h2 className="section-main-heading cc-heading-h3">about me</h2>
              </div>
            </div>

            <div className="about-content-wrapper grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24">
              <div className="about-text">
                <motion.p 
                  className="main-hero_paragraph cc-subtitle mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Hey, I'm Jay, a Creative Director based in Gothenburg. With a passion for user experience, technology and design, I create delightful digital products and experiences that captivate audiences and drive business results.
                </motion.p>

                <div className="stats-container grid grid-cols-3 gap-8 xl:gap-12">
                  <motion.div 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-5xl font-semibold mb-3">50+</p>
                    <h3 className="text-base font-semibold">Projects Completed</h3>
                  </motion.div>

                  <motion.div 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-5xl font-semibold mb-3">15+</p>
                    <h3 className="text-base font-semibold">Years of Experience</h3>
                  </motion.div>

                  <motion.div 
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-5xl font-semibold mb-3">20K+</p>
                    <h3 className="text-base font-semibold">Social Followers</h3>
                  </motion.div>
                </div>
              </div>

              <motion.div 
                className="about-image relative overflow-hidden aspect-[3/4] bg-gray-100" 
                style={{ borderRadius: '8px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about me.png"
                  alt="Jay - Creative Director"
                  fill
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div 
              className="social-links mt-24 flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="https://dribbble.com/Jay-Design" className="text-link mr-8" target="_blank" rel="noopener noreferrer">
                DRIBBBLE
              </Link>
              <Link href="https://www.behance.net/iamjaydesign" className="text-link mr-8" target="_blank" rel="noopener noreferrer">
                BEHANCE
              </Link>
              <Link href="https://www.linkedin.com/in/designjay/" className="text-link" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
