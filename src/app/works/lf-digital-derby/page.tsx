'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function LFDigitalDerbyPage() {
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
                  LF Digital Derby
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  An innovative digital FIFA derby match between IFK and Häcken football clubs in Gothenburg, Sweden. We scanned actual players using LIDAR and photogrammetry, created authentic uniforms with 3D garment software, and utilized Unreal's LiveLink face capture technology to bring the players to life with realistic expressions and movements.
                </p>
                <CTAButton 
                  href="https://spelaroll.nu/"
                  text="VIEW CAMPAIGN"
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
                    <p className="text-base font-medium">LF DIGITAL</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">3D VISUALIZATION / GAME</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">3D SCANNING, PHOTOGRAMMETRY, FACIAL CAPTURE, UNREAL ENGINE DEVELOPMENT</p>
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
                <Image
                  src="/images/assets/LFDigitalDerby/Digital Fifa Derby-01.png"
                  alt="LF Digital Derby Campaign"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/assets/LFDigitalDerby/Digital Fifa Derby-02.png"
                    alt="Derby Campaign Visuals"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/assets/LFDigitalDerby/Digital Fifa Derby-03.png"
                    alt="Derby Campaign Elements"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
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
                <div className={`relative w-full rounded-lg overflow-hidden ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <video 
                    className="w-full h-auto rounded-lg"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                  >
                    <source src="/images/assets/LFDigitalDerby/IFK-16-9-web.mp4" type="video/mp4" />
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
                <Image
                  src="/images/assets/LFDigitalDerby/Digital Fifa Derby-04.png"
                  alt="Derby Campaign Overview"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/assets/LFDigitalDerby/Digital Fifa Derby-05.png"
                    alt="Derby Campaign Details"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>

            <ProjectNavigation currentSlug="/works/lf-digital-derby" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 