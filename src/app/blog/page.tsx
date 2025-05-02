import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { getSortedBlogPosts } from '@/data/blogPosts'

// Get sorted blog posts
const sortedBlogPosts = getSortedBlogPosts();

export const metadata = {
  title: "Blog — Jay Design",
  description: "Insights on design, creativity, and the visual arts from Jay Design."
};

export default function BlogPage() {
  return (
    <MainLayout>
      <section className="blog-page padding-global py-16 md:py-24">
        <div className="container-large">
          <div className="blog-wrapper">
            <div className="blog-header mb-12 md:mb-16">
              <h1 className="text-7xl font-bold mb-6">
                Blog
              </h1>
              <p className="subtitle max-w-2xl">
                Insights on design, creativity, and the visual arts.
              </p>
            </div>

            <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {sortedBlogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.slug}
                  className="blog-card block group"
                >
                  <div className="blog-image-container relative overflow-hidden aspect-video mb-4 rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="title mb-2 group-hover:text-[#080808]/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6e6e6e] mb-2">
                    {post.date}
                  </p>
                  <p className="body text-[#080808]/70">
                    {post.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
