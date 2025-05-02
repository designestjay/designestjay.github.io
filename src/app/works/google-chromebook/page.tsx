'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function GoogleChromebookPage() {
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
                  Google Chromebook UI
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  A streamlined interface design project for Google Chromebook, focusing on enhancing user experience while maintaining Google's signature simplicity. This design system creates a cohesive and intuitive experience across the platform.
                </p>
                <CTAButton 
                  href="https://example.com/google-chromebook"
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
                    <p className="text-base font-medium">GOOGLE</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">INTERFACE DESIGN</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">UI DESIGN, UX RESEARCH, DESIGN SYSTEM</p>
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
                <Image
                  src="/images/assets/Google/images01.png"
                  alt="Google Chromebook UI Overview"
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
                    src="/images/assets/Google/images02.png"
                    alt="Chromebook UI Components"
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
                    src="/images/assets/Google/images03.png"
                    alt="Chromebook UI Screens"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              </div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/assets/Google/images04.png"
                  alt="Chromebook Interface System"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>

            <ProjectNavigation currentSlug="/works/google-chromebook" />
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 