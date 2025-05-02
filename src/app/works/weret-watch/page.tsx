'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function WeretWatchPage() {
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
                  Weret Watch
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A premium product design project for Weret, revolutionizing traditional timepieces with innovative technology and elegant aesthetics. This project combines detailed industrial design with thoughtful user experience.
                </p>
                <CTAButton 
                  href="https://www.stokedfortravel.com/review-weret-luxury-surf-watch/"
                  text="VIEW PRODUCT"
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
                    <p className="text-base font-medium">WERET</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">PRODUCT DESIGN</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">INDUSTRIAL DESIGN, 3D MODELING, BRAND IDENTITY</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Year</h2>
                    <p className="text-base font-medium">2022</p>
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
                  src="/images/assets/WERET/Weret-15image.png"
                  alt="Weret Watch Overview"
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
                      src="/images/assets/WERET/Weret-05image.png"
                      alt="Weret Watch Design"
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
                      src="/images/assets/WERET/Weret-11image.png"
                      alt="Weret Watch Components"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Crown Animation Video */}
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
                    <source src="/images/assets/WERET/videos/Crown Animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {!videoLoaded && (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg aspect-video">
                    <p className="text-gray-500">Loading video...</p>
                  </div>
                )}
              </motion.div>
              
              {/* Three Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/WERET/Weret-12image.png"
                      alt="Weret Watch Face"
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
                      src="/images/assets/WERET/Weret-13image.png"
                      alt="Weret Watch Strap"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/WERET/Weret-14image.png"
                      alt="Weret Watch Crown"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Full Width Images */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/assets/WERET/Weret-16image.png"
                  alt="Weret Watch Details"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/assets/WERET/Weret-17image.png"
                  alt="Weret Watch Colors"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>

            <div className="mt-16">
              <ProjectNavigation currentSlug="/works/weret-watch" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 