'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Awards data
const awards = [
  {
    id: 1,
    count: '11X',
    title: 'Reddot Design Awards'
  },
  {
    id: 2,
    count: '2X',
    title: 'IF Design Awards'
  },
  {
    id: 3,
    count: '1X',
    title: 'A\' Design Award'
  },
  {
    id: 4,
    count: '1X',
    title: 'German Innovation Award'
  }
]

const AwardsSection = () => {
  return (
    <section className="awards-section py-16 md:py-24 bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="awards-wrapper">
            <div className="awards-top-container flex flex-col md:flex-row justify-between mb-10 md:mb-16">
              <div className="awards-container-header flex items-center mb-4 md:mb-0">
                <p className="section-number">04</p>
                <h2 className="section-main-heading cc-heading-h3">awards</h2>
              </div>
            </div>

            <div className="awards-content-wrapper">
              <div className="awards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {awards.map((award, index) => (
                  <motion.div 
                    key={award.id} 
                    className="award-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="award-count text-3xl md:text-4xl font-medium mb-2">{award.count}</p>
                    <h3 className="award-title text-sm md:text-base">{award.title}</h3>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="awards-note text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Award-winning designer with multiple international recognitions in design excellence and innovation
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
