import React from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'

export default function NotFound() {
  return (
    <MainLayout>
      <section className="not-found-section py-16 md:py-32 flex flex-col items-center justify-center text-center">
        <div className="padding-global">
          <div className="container-large">
            <h1 className="text-6xl md:text-8xl font-medium mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Page Not Found</h2>
            <p className="text-lg mb-10 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 border border-black hover:bg-white hover:text-black transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
