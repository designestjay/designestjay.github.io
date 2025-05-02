// Blog post interface
export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  slug: string;
  date: string;
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 7,
    title: 'Figma Meetup Recap: UX Design Insights from Redesigning a Food Delivery App',
    summary: "Recap of our recent Figma meetup in Göteborg, where designers collaborated to redesign a food delivery app, exploring UX insights and the latest Figma features.",
    image: '/images/assets/blog/Figma meetup-April 24/highres_527567589.jpeg',
    slug: '/blog/figma-meetup-april-2025',
    date: 'April 25, 2025'
  },
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
];

// Helper function to get sorted blog posts
export const getSortedBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
};

// Helper function to get latest N posts
export const getLatestPosts = (count: number = 3): BlogPost[] => {
  const sorted = getSortedBlogPosts();
  return sorted.slice(0, count);
}; 