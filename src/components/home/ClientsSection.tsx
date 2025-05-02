'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Client logos
const clientLogos = [
  {
    id: 1,
    name: 'Client 1',
    logo: '/images/assets/About/partners-logo/logo01.png',
  },
  {
    id: 2,
    name: 'Client 2',
    logo: '/images/assets/About/partners-logo/logo02.png',
  },
  {
    id: 3,
    name: 'Client 3',
    logo: '/images/assets/About/partners-logo/logo03.png',
  },
  {
    id: 4,
    name: 'Client 4',
    logo: '/images/assets/About/partners-logo/logo04.png',
  },
  {
    id: 5,
    name: 'Client 5',
    logo: '/images/assets/About/partners-logo/logo05.png',
  },
  {
    id: 6,
    name: 'Client 6',
    logo: '/images/assets/About/partners-logo/logo06.png',
  },
  {
    id: 7,
    name: 'Client 7',
    logo: '/images/assets/About/partners-logo/logo07.png',
  },
  {
    id: 8,
    name: 'Client 8',
    logo: '/images/assets/About/partners-logo/logo08.png',
  },
  {
    id: 9,
    name: 'Client 9',
    logo: '/images/assets/About/partners-logo/logo09.png',
  },
  {
    id: 10,
    name: 'Client 10',
    logo: '/images/assets/About/partners-logo/logo10.png',
  },
  {
    id: 11,
    name: 'Client 11',
    logo: '/images/assets/About/partners-logo/logo11.png',
  },
  {
    id: 12,
    name: 'Electrolux',
    logo: '/images/assets/About/partners-logo/Electrolux Black.png',
  },
];

// Client projects using assets from folders
const clientProjects = [
  {
    id: 1,
    image: '/images/assets/Lookbook/Volvo Group.png',
    title: 'Volvo Group',
  },
  {
    id: 2,
    image: '/images/assets/Lookbook/Volvo Cars.png',
    title: 'Volvo Cars',
  },
  {
    id: 3,
    image: '/images/assets/Lookbook/Electrolux Washing Machine.png',
    title: 'Electrolux',
  },
  {
    id: 4,
    image: '/images/assets/Lookbook/Geely motors.png',
    title: 'Geely Motors',
  },
  {
    id: 5,
    image: '/images/assets/Lookbook/Polstar.png',
    title: 'Polestar',
  },
  {
    id: 6,
    image: '/images/assets/Lookbook/Volvo Construction Equipment.png',
    title: 'Volvo CE',
  },
  {
    id: 7,
    image: '/images/assets/Lookbook/Hyundai.png',
    title: 'Hyundai',
  },
  {
    id: 8,
    image: '/images/assets/Lookbook/Veoneer.png',
    title: 'Veoneer',
  },
  {
    id: 9,
    image: '/images/assets/Lookbook/Vitrolife AR.png',
    title: 'Vitrolife AR',
  },
  {
    id: 10,
    image: '/images/assets/Lookbook/Connected Car.png',
    title: 'Wireless Car',
  },
  {
    id: 11,
    image: '/images/assets/Lookbook/Parakey.png',
    title: 'Parakey',
  },
];

// Duplicate for seamless carousel
const duplicatedProjects = [...clientProjects, ...clientProjects, ...clientProjects];

const ClientsSection = () => {
  return (
    <section className="clients-section py-16 md:py-24 bg-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="clients-wrapper">
            <div className="clients-top-container flex flex-col items-center justify-center text-center mb-10 md:mb-16">
              <div className="clients-container-header flex flex-col items-center mb-4 md:mb-0">
                <p className="section-number">06</p>
                <h2 className="section-main-heading cc-heading-h3">clients</h2>
              </div>
            </div>

            <div className="clients-content-wrapper">
              {/* Client Logos Grid */}
              <div className="client-logos-grid mb-16">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
                  {clientLogos.map((client) => (
                    <div 
                      key={client.id} 
                      className="client-logo w-32 h-32 flex items-center justify-center bg-white p-4"
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={100}
                        height={60}
                        className="w-auto h-auto max-w-[80px] max-h-[50px] filter grayscale"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Projects Carousel - Full Width */}
      <div className="mb-16">
        <h3 className="text-xl font-medium mb-6 text-center">Previous Work</h3>
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex gap-8 pl-6"
            animate={{ x: ['0%', '-66.666%'] }}
            transition={{ 
              repeat: Infinity, 
              duration: 120,
              ease: "linear"
            }}
            style={{ width: 'fit-content' }}
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`} 
                className="client-project flex-shrink-0 w-[300px] sm:w-[400px] md:w-[591px]"
              >
                <div 
                  className="client-project-image relative overflow-hidden mb-4" 
                  style={{ borderRadius: '8px', aspectRatio: '591/440' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={591}
                    height={440}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="client-project-title text-sm md:text-base text-center">
                  {project.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
