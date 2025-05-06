'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'

export default function VolvoGroupARPage() {
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
                  Volvo Group AR
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  An innovative augmented reality experience developed for Volvo Group's Ocean Race exhibition. This interactive AR application allows visitors to explore Volvo's maritime technologies and contributions to sustainable ocean racing through immersive digital content overlaid on physical exhibits, creating an engaging and educational experience.
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
                    <p className="text-base font-medium">VOLVO GROUP</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">AUGMENTED REALITY</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">AR DEVELOPMENT, UI/UX DESIGN, INTERACTIVE MEDIA</p>
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
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/assets/Volvo Group AR/Hero.jpg"
                    alt="Volvo Group Ocean Race AR Experience"
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
                      src="/images/assets/Volvo Group AR/Volvo Group Ocean Race Interactive Play-1.jpg"
                      alt="Volvo AR Interface"
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
                      src="/images/assets/Volvo Group AR/Volvo Group Ocean Race Interactive Play-2.jpg"
                      alt="Volvo AR Interaction"
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
                <div className={`relative w-full aspect-video rounded-lg overflow-hidden ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                  >
                    <source src="/images/assets/Volvo Group AR/Volvo Group Ocean Race Interactive Play-Product Video.mp4" type="video/mp4" />
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
                    src="/images/assets/Volvo Group AR/Volvo_Exhibition9.jpg"
                    alt="Volvo Exhibition"
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
                      src="/images/assets/Volvo Group AR/Volvo Group Ocean Race Interactive Play-5.jpg"
                      alt="Volvo AR Experience Detail"
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
                      src="/images/assets/Volvo Group AR/Volvo Group Ocean Race Interactive Play-6.jpg"
                      alt="Volvo AR Interaction Detail"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src="/images/assets/Volvo Group AR/Volvo_Exhibition7.jpg"
                      alt="Volvo Exhibition Detail"
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
                      src="/images/assets/Volvo Group AR/Volvo_Exhibition11.jpg"
                      alt="Volvo Exhibition Environment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <ProjectNavigation currentSlug="/works/volvo-group-ar" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 