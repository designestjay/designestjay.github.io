'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/utils/projectNavigation'

const SelectedWorks = () => {
  return (
    <section className="selected-works py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="services_wrapper">
            <div className="services_top-container flex flex-col md:flex-row justify-between mb-10 md:mb-16">
              <div className="services_container-header flex items-center mb-4 md:mb-0">
                <motion.p
                  className="section-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >01</motion.p>
                <motion.h2
                  className="section-main-heading cc-heading-h3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >selected works</motion.h2>
              </div>

              <motion.p
                className="text-right text-sm font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >(2020 - 2025)</motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/works" className="hidden md:block text-sm font-medium hover:text-[#b14e2f] transition-colors">
                  see all works
                </Link>
              </motion.div>
            </div>

            <div className="services_content-wrapper">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {projects.filter(project => !project.hidden).map((project) => (
                  <Link
                    key={project.id}
                    href={project.slug}
                    className="project-card block group"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/works"
                className="mt-10 block text-center md:hidden text-sm font-medium hover:text-[#b14e2f] transition-colors"
              >
                see all works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectedWorks
