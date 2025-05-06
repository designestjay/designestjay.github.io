'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'

export default function GeelyMotorsPage() {
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
                  Geely Motors
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  An innovative automotive HMI design for Geely Motors that reimagines the in-car user experience. This project delivers a seamless integration of cutting-edge technology and intuitive design, creating a user-centric interface that enhances the driving experience while ensuring safety and accessibility.
                </p>
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
                    <p className="text-base font-medium">GEELY MOTORS</p>
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
                    <p className="text-base font-medium">2020</p>
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
                <div className="w-full">
                  <Image
                    src="/images/assets/Geely Motors/Thumbnail.png"
                    alt="Geely Motors HMI Overview"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
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
                  <div className="w-full">
                    <Image
                      src="/images/assets/Geely Motors/Geely2.png"
                      alt="Geely Motors Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full">
                    <Image
                      src="/images/assets/Geely Motors/Geely3.png"
                      alt="Geely Motors Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
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
                    <source src="/images/assets/Geely Motors/Geely-Liv Demo Video-Optimized.mp4" type="video/mp4" />
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
                <div className="w-full">
                  <Image
                    src="/images/assets/Geely Motors/Geely4.png"
                    alt="Geely Motors UI Features"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
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
                  <div className="w-full">
                    <Image
                      src="/images/assets/Geely Motors/Geely5.png"
                      alt="Geely Motors Interface Details"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full">
                    <Image
                      src="/images/assets/Geely Motors/Geely6.png"
                      alt="Geely Motors Visualization"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <ProjectNavigation currentSlug="/works/geely-motors" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 