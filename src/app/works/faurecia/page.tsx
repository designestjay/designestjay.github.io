'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ProjectNavigation from '@/components/works/ProjectNavigation'
import CTAButton from '@/components/ui/CTAButton'

export default function FaureciaPage() {
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
                  Cockpit of the Future
                </h1>
                <p className="text-lg mb-8 max-w-xl">
                  An automotive HMI design project for Faurecia, a global tier-1 automotive supplier. The project focused on creating innovative infotainment and driver experience interfaces that balance aesthetics with safety and usability for next-generation vehicles.
                </p>
                <CTAButton 
                  href="https://www.faurecia-cz.cz/en/technologies/cockpit-future"
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
                    <p className="text-base font-medium">FAURECIA</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Category</h2>
                    <p className="text-base font-medium">AUTOMOTIVE HMI</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Services</h2>
                    <p className="text-base font-medium">UX RESEARCH, UI DESIGN, INTERACTION DESIGN</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-sm text-gray-600 mb-1">Year</h2>
                    <p className="text-base font-medium">2023</p>
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
                  src="/images/assets/Faurecia/image01.png"
                  alt="Faurecia Dashboard Main View"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>

              {/* Two Column Layout - Main UI Views */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image02.png"
                      alt="Faurecia Dashboard Interface"
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
                      src="/images/assets/Faurecia/image03.png"
                      alt="Faurecia Navigation System"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Full Width Feature Image */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/assets/Faurecia/image15.png"
                  alt="Faurecia System Overview"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>
              
              {/* Three Column Layout - UI Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image04.png"
                      alt="Faurecia UI Module"
                      width={400}
                      height={400}
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
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image05.png"
                      alt="Faurecia Mobile Interface"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Full Width Image 06 */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/assets/Faurecia/image06.png"
                  alt="Faurecia Control Panel"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>

              {/* Two Column Layout - Detail UI Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image07.png"
                      alt="Faurecia Interface Elements"
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image16.png"
                      alt="Faurecia System Interface"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Full Width UI Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/images/assets/Faurecia/image11.png"
                  alt="Faurecia UI Element"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </motion.div>

              {/* Three Column Layout - UI Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image12.png"
                      alt="Faurecia UI Component"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image13.png"
                      alt="Faurecia Data Visualization"
                      width={400}
                      height={400}
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
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/assets/Faurecia/image14.png"
                      alt="Faurecia UI Elements"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-16">
              <ProjectNavigation currentSlug="/works/faurecia" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 