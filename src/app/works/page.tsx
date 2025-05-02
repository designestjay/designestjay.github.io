import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/utils/projectNavigation'

export const metadata = {
  title: "Selected Works — Jay Design",
  description: "A curated collection of projects. Thoughtful, bold, and designed to make an impact."
};

export default function WorksPage() {
  return (
    <MainLayout>
      <section className="works-page padding-global py-16 md:py-24">
        <div className="container-large">
          <div className="works-wrapper">
            <div className="works-header mb-12 md:mb-16">
              <h1 className="text-7xl font-bold mb-6">
                Selected Works
              </h1>
              <p className="subtitle max-w-2xl">
                A curated collection of projects. Thoughtful, bold, and designed to make an impact.
              </p>
              <p className="caption-small mt-4 text-right">(2020 - 2025)</p>
            </div>

            <div className="works-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
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
                  <div className="mt-4 flex justify-between items-center">
                    <h3 className="title">{project.title}</h3>
                    <span className="bg-[#FBFBFB] text-[#080808] text-xs font-medium px-2.5 py-0.5 rounded">{project.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
