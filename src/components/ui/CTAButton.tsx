'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type CTAButtonProps = {
  href: string
  text: string
  isExternal?: boolean
  className?: string
}

const CTAButton = ({ href, text, isExternal = false, className = '' }: CTAButtonProps) => {
  const buttonContent = (
    <>
      <span>{text}</span>
      <Image
        src="/images/arrow-icon-white.svg"
        alt=""
        width={16}
        height={16}
        className="group-hover:translate-x-1 transition-transform duration-300"
      />
    </>
  )

  const buttonClasses = `inline-flex items-center gap-2 bg-black text-white px-6 py-3 border border-black hover:bg-white hover:text-black transition-colors duration-300 rounded-lg font-medium group ${className}`

  return isExternal ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      {buttonContent}
    </motion.a>
  ) : (
    <Link href={href} className={buttonClasses}>
      {buttonContent}
    </Link>
  )
}

export default CTAButton 