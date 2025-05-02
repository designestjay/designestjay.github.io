import React from 'react'
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

// Get only the 3 latest posts
const latestPosts = sortedBlogPosts.slice(0, 3);

const BlogSection = () => {
  return (
    <section className="blog-section py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="blog-wrapper">
            <div className="blog-top-container flex flex-col md:flex-row justify-between mb-10 md:mb-16">
              <div className="blog-container-header flex items-center mb-4 md:mb-0">
                <p className="section-number">05</p>
                <h2 className="section-main-heading cc-heading-h3">blog</h2>
              </div>

              <Link href="/blog" className="hidden md:block text-sm font-medium hover:text-[#b14e2f] transition-colors">
                see all blogs
              </Link>
            </div>

            <div className="blog-content-wrapper">
              <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestPosts.map((post) => (
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
                    <h3 className="blog-title text-xl font-medium mb-2 group-hover:text-[#b14e2f] transition-colors">
                      {post.title}
                    </h3>
                    <p className="blog-summary text-[16px] text-gray-700">
                      {post.summary}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                href="/blog"
                className="mt-10 block text-center md:hidden text-sm font-medium hover:text-[#b14e2f] transition-colors"
              >
                see all blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
