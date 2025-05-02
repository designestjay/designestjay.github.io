'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  // Effect for handling body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = '' // Reset overflow when component unmounts
    }
  }, [isMenuOpen])

  // Effect for updating the time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Stockholm',
        })
      )
    }

    updateTime()
    const timerId = setInterval(updateTime, 60000) // Update every minute

    return () => {
      clearInterval(timerId)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`nav fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
      isMenuOpen ? 'h-screen' : ''
    }`}>
      <div className="padding-global">
        <div className="container-large">
          <div className="nav_wrapper flex justify-between items-center h-[73px] md:h-[81px]">
            <Link href="/" className="nav_logo-link text-black font-medium text-lg">
              jay design
            </Link>

            <div className="nav_middle-wrapper hidden md:flex items-center">
              <div className="nav_location-wrapper flex items-center">
                <p className="nav_location text-xs font-medium mr-2 text-black">
                  BASED IN GOTHENBURG, SWEDEN
                </p>
                <Image
                  src="/images/sweden-flag.svg"
                  alt="sweden flag"
                  width={16}
                  height={16}
                  className="nav_location-icon"
                />
              </div>
              <p className="nav_time text-xs font-medium ml-8 text-black">
                {currentTime} (CET)
              </p>
            </div>

            <div className="menu-button-wrapper">
              <button
                onClick={toggleMenu}
                className={`menu-icon ${isMenuOpen ? 'active' : ''}`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <input 
                  className="menu-icon__cheeckbox" 
                  type="checkbox" 
                  checked={isMenuOpen}
                  onChange={() => {}} // Handle the change through the parent button's onClick
                  aria-hidden="true"
                />
                <div>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`nav-menu fixed inset-x-0 top-[73px] md:top-[81px] bottom-0 bg-white z-[55] transition-all duration-300 overflow-y-auto border-t border-gray-100 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        style={{ 
          transitionProperty: 'opacity, visibility, transform',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="nav-menu-wrapper flex flex-col md:flex-row h-full py-8 pb-16">
              <div className="nav-image-wrapper md:w-1/2 mb-8 md:mb-0 md:pr-8 h-auto">
                <div className="relative w-full h-0 pb-[100%] md:pb-[125%] overflow-hidden">
                  <Image
                    src="/images/assets/About/Drawer profile.jpg"
                    alt="Designer profile portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between md:w-1/2 md:pl-8">
                <div className="flex flex-col md:h-full md:justify-between">
                  <ul className="nav-menu-list space-y-6 mb-12 md:mb-0">
                    <li className="nav-menu-list-item">
                      <Link
                        href="/"
                        className="text-4xl font-semibold hover:text-[#080808]/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        home
                      </Link>
                    </li>
                    <li className="nav-menu-list-item">
                      <Link
                        href="/works"
                        className="text-4xl font-semibold hover:text-[#080808]/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        works
                      </Link>
                    </li>
                    <li className="nav-menu-list-item">
                      <Link
                        href="/blog"
                        className="text-4xl font-semibold hover:text-[#080808]/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        blog
                      </Link>
                    </li>
                    <li className="nav-menu-list-item">
                      <Link
                        href="mailto:designestjay@gmail.com?subject=Work%20Request"
                        className="text-4xl font-semibold hover:text-[#080808]/80 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        connect
                      </Link>
                    </li>
                  </ul>

                  <div className="nav-menu-right-container mt-auto">
                    <div className="footer-left-wrapper mb-8">
                      <div className="mobile-menu_contact-container pt-12 lg:pt-20">
                        <p className="mobile-menu_contact-text mb-4 opacity-50">Get in touch</p>
                        <a
                          href="mailto:designestjay@gmail.com?subject=Work%20Request"
                          className="mobile-menu_contact-link block text-xl md:text-2xl font-medium mb-3 hover:text-[#080808] transition-colors"
                        >
                          hello@iamjaydesign.com
                        </a>
                        <a
                          href="tel:+46735706733"
                          className="block text-xl md:text-2xl font-medium hover:text-[#080808] transition-colors"
                        >
                          +46 735706733
                        </a>
                      </div>

                      <ul className="nav-socials-list flex flex-wrap gap-x-6 gap-y-3 mb-8">
                        <li className="nav-socials-list-item">
                          <Link href="https://dribbble.com/Jay-Design" className="text-link block text-sm" target="_blank" rel="noopener noreferrer">DRIBBBLE</Link>
                        </li>
                        <li className="nav-socials-list-item">
                          <Link href="https://www.behance.net/iamjaydesign" className="text-link block text-sm" target="_blank" rel="noopener noreferrer">BEHANCE</Link>
                        </li>
                        <li className="nav-socials-list-item">
                          <Link href="https://www.linkedin.com/in/designjay/" className="text-link block text-sm" target="_blank" rel="noopener noreferrer">LINKEDIN</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
