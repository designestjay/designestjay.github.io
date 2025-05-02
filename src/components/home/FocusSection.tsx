'use client'

import React, { useState, useRef } from 'react'

// Focus area data
const focusAreas = [
  {
    id: 1,
    title: 'Art Direction',
    color: '#50b196' // green
  },
  {
    id: 2,
    title: 'UI/UX',
    color: '#cf9253' // gold
  },
  {
    id: 3,
    title: 'Motion Graphics',
    color: '#d0c1ae' // beige
  },
  {
    id: 4,
    title: 'AR/VR',
    color: '#080808' // primary
  },
  {
    id: 5,
    title: '3D Visualization',
    color: '#6b5b95' // purple
  }
]

const FocusSection = () => {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="focus-section py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="focus-wrapper">
            <div className="focus-top-container flex flex-col md:flex-row justify-between mb-10 md:mb-16">
              <div className="focus-container-header flex items-center mb-4 md:mb-0">
                <p className="section-number">03</p>
                <h2 className="section-main-heading cc-heading-h3">focus</h2>
              </div>
            </div>

            <div className="focus-content-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
              {focusAreas.map((focus) => (
                <div
                  key={focus.id}
                  className="focus-item p-6 border border-[#F5F5F5] flex items-center rounded-md"
                >
                  <div
                    className="focus-icon w-8 h-8 mr-4 rounded-md"
                    style={{ backgroundColor: focus.color }}
                  ></div>
                  <h3 className="subtitle">{focus.title}</h3>
                </div>
              ))}
            </div>

            {/* Work Reel Video */}
            <div className="mt-8 relative overflow-hidden rounded-xl cursor-pointer" onClick={toggleSound}>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full z-10 text-sm">
                {isMuted ? 'Click for sound' : 'Sound on'}
              </div>
              <video 
                ref={videoRef}
                className="w-full rounded-xl"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/images/assets/WorkReel/WORK REEL-Jay 2024.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusSection
