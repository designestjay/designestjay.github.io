'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project, getPreviousProject, getNextProject } from '@/utils/projectNavigation'

type ProjectNavigationProps = {
  currentSlug: string
}

const ProjectNavigation = ({ currentSlug }: ProjectNavigationProps) => {
  const [prevProject, setPrevProject] = useState<Project | null>(null)
  const [nextProject, setNextProject] = useState<Project | null>(null)
  
  useEffect(() => {
    setPrevProject(getPreviousProject(currentSlug))
    setNextProject(getNextProject(currentSlug))
  }, [currentSlug])

  return (
    <>
      {/* More Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                More Works
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/works" 
                  className="text-sm font-medium uppercase hover:text-[#b14e2f] transition-colors"
                >
                  See All Works
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevProject && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={prevProject.slug} className="block group">
                    <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                      <Image
                        src={prevProject.image}
                        alt={prevProject.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <h3 className="text-xl font-medium">{prevProject.title}</h3>
                      <p className="text-sm opacity-80">{prevProject.category}</p>
                    </div>
                  </Link>
                </motion.div>
              )}

              {nextProject && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href={nextProject.slug} className="block group">
                    <div className="relative overflow-hidden aspect-[4/3] rounded-lg">
                      <Image
                        src={nextProject.image}
                        alt={nextProject.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <h3 className="text-xl font-medium">{nextProject.title}</h3>
                      <p className="text-sm opacity-80">{nextProject.category}</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectNavigation 