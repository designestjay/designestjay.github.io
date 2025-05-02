import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'

// Blog posts data
const blogPosts = [
  {
    id: 6,
    title: 'The Future of Design: Insights from Our Recent Meetup',
    summary: "Key takeaways from our design community meetup on emerging trends, AI tools, and collaborative approaches that are reshaping the creative landscape.",
    image: '/images/assets/blog/Meetup2025Feb1.jpeg',
    slug: '/blog/future-of-design-meetup',
    date: 'February 27, 2025'
  },
  {
    id: 5,
    title: 'AI in UX and UX in AI: The Symbiotic Relationship',
    summary: "Explore the evolving relationship between artificial intelligence and user experience design, and how each discipline is transforming the other in profound ways.",
    image: '/images/assets/blog/Ericsson UX.jpeg',
    slug: '/blog/ai-in-ux-design',
    date: 'January 20, 2025'
  },
  {
    id: 4,
    title: 'Unity WebGL and Mobile: Breaking Down the Barriers',
    summary: "Explore how Unity's WebGL platform is evolving to support mobile devices and what this means for developers, designers, and the future of cross-platform experiences.",
    image: '/images/assets/blog/Unity WebGpu.jpeg',
    slug: '/blog/unity-webgl-mobile',
    date: 'January 15, 2025'
  },
  {
    id: 3,
    title: 'The Art of Visual Storytelling',
    summary: 'Strong art direction shapes how audiences perceive and connect with a brand. From composition to color theory, discover how visual storytelling turns ideas into compelling narratives.',
    image: '/images/blog3.png',
    slug: '/blog/visual-storytelling',
    date: 'April 5, 2024'
  },
  {
    id: 2,
    title: 'Balancing Creativity & Strategy in Design',
    summary: "Great design isn't just about aesthetics—it's about solving problems and driving impact. Learn how to merge artistic vision with strategic thinking for more effective creative work.",
    image: '/images/blog2.png',
    slug: '/blog/creativity-and-strategy',
    date: 'March 18, 2024'
  },
  {
    id: 1,
    title: 'Beyond the Logo: The Psychology of Branding',
    summary: "Branding is more than just a logo—it's an experience. Dive into the psychology of colors, typography, and tone, and how they influence audience perception.",
    image: '/images/blog1.png',
    slug: '/blog/psychology-of-branding',
    date: 'March 25, 2024'
  }
]

// Sort blog posts by date (latest first)
const sortedBlogPosts = [...blogPosts].sort((a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateB - dateA;
});

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
