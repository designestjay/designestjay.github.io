'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'

export default function ESABPage() {
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
                  ESAB
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A cutting-edge interactive application designed for ESAB, a global leader in welding and cutting equipment. The application provides an immersive experience showcasing ESAB's innovative products and technologies, allowing users to explore their features and benefits in detail.
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
                    <p className="text-base font-medium">ESAB</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">INTERACTIVE APPLICATION</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">UI/UX DESIGN, INTERACTIVE DEVELOPMENT</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Year</h2>
                    <p className="text-base font-medium">2024</p>
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
                    src="/images/assets/ESAB/Image-1.png"
                    alt="ESAB Overview"
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
                      src="/images/assets/ESAB/Image-2.png"
                      alt="ESAB Interface"
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
                      src="/images/assets/ESAB/Image-3.png"
                      alt="ESAB Application Detail"
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
                    <source src="/images/assets/ESAB/ESAB-Interactive App.mp4" type="video/mp4" />
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
                    src="/images/assets/ESAB/Image-4.png"
                    alt="ESAB Interface Detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </motion.div>
            </div>

            <ProjectNavigation currentSlug="/works/esab" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 