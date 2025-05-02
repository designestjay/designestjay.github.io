import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-white py-24 md:py-32">
      <div className="padding-global">
        <div className="container-large">
          <div className="footer-container-header flex items-center mb-16">
            <p className="section-number">07</p>
          </div>

          <div className="footer_container-top mb-16 md:mb-24 xl:mb-32">
            <h2 className="footer_container-main-heading cc-heading-h1">
              Jay Design<br />Creative Director
            </h2>
          </div>

          <div className="footer_container-middle flex flex-col md:flex-row justify-between mb-24 xl:mb-32">
            <div className="footer-left-wrapper mb-12 md:mb-0">
              <a
                href="mailto:designestjay@gmail.com?subject=Work%20Request"
                className="footer-contact-link block mb-4"
              >
                hello@iamjaydesign.com
              </a>
              <a
                href="tel:+46735706733"
                className="footer-contact-link block"
              >
                +46 735706733
              </a>
            </div>

            <div className="footer-right-wrapper flex flex-col md:flex-row gap-16 xl:gap-24">
              <ul className="footer-list list-none p-0 space-y-3">
                <li className="footer-list-item">
                  <Link href="https://dribbble.com/Jay-Design" className="text-link text-sm" target="_blank" rel="noopener noreferrer">
                    DRIBBBLE
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link href="https://www.behance.net/iamjaydesign" className="text-link text-sm" target="_blank" rel="noopener noreferrer">
                    BEHANCE
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link href="https://www.linkedin.com/in/designjay/" className="text-link text-sm" target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_container-bottom flex flex-col md:flex-row justify-between">
            <p className="footer_copyright-text caption-small opacity-70 mb-6 md:mb-0">
              @ 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
