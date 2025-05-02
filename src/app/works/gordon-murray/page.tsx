'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function GordonMurrayPage() {
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
                  Gordon Murray Design
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A sophisticated automotive HMI design project for Gordon Murray Design, the legendary automotive engineering company. The project focused on creating next-generation interfaces that enhance the driving experience while maintaining the brand's iconic design language.
                </p>
                <CTAButton 
                  href="https://www.gordonmurrayautomotive.com/automotive/t50"
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
                    <p className="text-base font-medium">GORDON MURRAY DESIGN</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">AUTOMOTIVE HMI</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">UI DESIGN, INTERACTION DESIGN, USER TESTING</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Year</h2>
                    <p className="text-base font-medium">2021</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project Gallery */}
            <div className="mt-16 space-y-8">
              {/* Hero Image */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/assets/GMA/image01.png"
                  alt="Gordon Murray Design HMI Overview"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/GMA/image20.png"
                      alt="GMA Interface Components"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/GMA/image21.png"
                      alt="GMA Dashboard Design"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Video Section */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={`relative w-full rounded-lg overflow-hidden aspect-video ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <video 
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                  >
                    <source src="/images/assets/GMA/Videos/T.50 Continued Development of XP2 & XP3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {!videoLoaded && (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg aspect-video">
                    <p className="text-gray-500">Loading video...</p>
                  </div>
                )}
              </motion.div>

              {/* Full Width Image */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/assets/GMA/image22.png"
                  alt="GMA Interface System"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
              
              {/* Three Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/GMA/image17.png"
                      alt="GMA UI Element"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/GMA/image18.png"
                      alt="GMA UI Component"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Full Width UI Controls with Black Background */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-black p-8 rounded-lg">
                  <Image
                    src="/images/assets/GMA/image19.png"
                    alt="GMA UI Controls"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg mx-auto"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16">
              <ProjectNavigation currentSlug="/works/gordon-murray" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 