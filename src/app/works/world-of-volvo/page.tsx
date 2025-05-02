'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function WorldOfVolvoPage() {
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
                  World of Volvo
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A captivating interactive experience for the Volvo Experience Center's Diver Station. As UI/UX Designer and Unity Developer, I created an immersive environment that reveals Volvo's innovations and heritage in depth, enhancing the exhibition's informative layer for visitors eager to explore the brand's technological contributions.
                </p>
                <CTAButton 
                  href="https://www.worldofvolvo.com/sv/utstallning/"
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
                    <p className="text-base font-medium">WORLD OF VOLVO</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">INTERACTIVE MEDIA</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">3D VISUALIZATION, INTERACTION DESIGN, DEVELOPMENT</p>
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
                <Image
                  src="/images/assets/WOV/WOV.png"
                  alt="World of Volvo Overview"
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
                    src="/images/assets/WOV/images02.png"
                    alt="Volvo Interactive Experience"
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
                    src="/images/assets/WOV/images03.png"
                    alt="Volvo 3D Environment"
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
                    <source src="/images/assets/WOV/DIVER-Station.mp4" type="video/mp4" />
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
                  src="/images/assets/WOV/Delivery.png"
                  alt="Volvo Delivery"
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
                    src="/images/assets/WOV/3Dassets.png"
                    alt="3D Assets"
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
                    src="/images/assets/WOV/image 14.png"
                    alt="Volvo Experience Detail"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>

            <ProjectNavigation currentSlug="/works/world-of-volvo" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 