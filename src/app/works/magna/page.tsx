'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function MagnaPage() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <MainLayout>
      <section className="py-16 md:py-24">
        <div className="padding-global">
          <div className="container-large">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Left Column */}
              <motion.div
                className="md:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  Magna
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A sophisticated automotive HMI solution for Magna, one of the world's leading automotive suppliers. This project focuses on creating an advanced cockpit experience that integrates cutting-edge technology with human-centered design principles, resulting in an intuitive and engaging interface for next-generation vehicles.
                </p>
                <CTAButton 
                  href="https://www.magna.com/"
                  text="VIEW PROJECT"
                  isExternal={true}
                />
              </motion.div>

              {/* Right Column */}
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Client</h2>
                    <p className="text-base font-medium">MAGNA</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">AUTOMOTIVE HMI</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">UI/UX DESIGN, INTERACTION DESIGN, PROTOTYPING</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Year</h2>
                    <p className="text-base font-medium">2023</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Gallery */}
            <div className="mt-16 space-y-6">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/assets/Magna/Thumbnail.png"
                    alt="Magna HMI Overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/assets/Magna/Magna2.png"
                      alt="Magna Interface"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/assets/Magna/Magna3.png"
                      alt="Magna Dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Video Section */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`relative w-full ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                  >
                    <source src="/images/assets/Magna/Magna-CP-rev-12thDec.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/assets/Magna/Magna4.png"
                    alt="Magna UI Features"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/assets/Magna/Magna1.png"
                      alt="Magna Interface Fullscreen"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/assets/Magna/Magna5.jpg"
                      alt="Magna Implementation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <ProjectNavigation currentSlug="/works/magna" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 