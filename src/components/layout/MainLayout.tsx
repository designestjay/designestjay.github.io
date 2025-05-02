import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="main-wrapper pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
