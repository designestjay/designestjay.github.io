'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function VolvoCarARPage() {
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
                  Volvo Cars AR
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  This is a mobile augmented reality experience that allows users to view and explore Volvo EX90, EX30 and ES90 in a new and engaging way. Users can place the AR models on any surface, view them from all angles, and capture screenshots of the cars in their real environment.
                </p>
                <CTAButton 
                  href="https://apps.apple.com/se/app/volvo-cars-ar/id6448719010"
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
                    <p className="text-base font-medium">VOLVO CARS</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">AUGMENTED REALITY</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">MOBILE AR, 3D VISUALIZATION, UX/UI DESIGN</p>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/assets/Volvo Cars AR/Volvo Cars AR01.png"
                  alt="Volvo Cars AR Overview"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>

              {/* AR02.png and Video side by side in 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src="/images/assets/Volvo Cars AR/Volvo Cars AR02.png"
                    alt="Volvo Cars AR Interface"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className={`relative w-full rounded-lg overflow-hidden h-full ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <video 
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      onLoadedData={() => setVideoLoaded(true)}
                    >
                      <source src="/images/assets/Volvo Cars AR/Volvo AR-White.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src="/images/assets/Volvo Cars AR/Volvo Cars AR03.png"
                    alt="Volvo Cars AR Experience"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Image
                    src="/images/assets/Volvo Cars AR/Volvo Cars AR04.png"
                    alt="Volvo Cars AR Features"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/images/assets/Volvo Cars AR/Volvo Cars AR05.png"
                  alt="Volvo Cars AR App Usage"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </div>

            <ProjectNavigation currentSlug="/works/volvo-cars-ar" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 