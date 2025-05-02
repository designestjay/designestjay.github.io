import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Figma Meetup Recap: UX Design Insights from Redesigning a Food Delivery App — Jay Design",
  description: "Recap of our recent Figma meetup in Göteborg, where designers collaborated to redesign a food delivery app, exploring UX insights and the latest Figma features."
};

export default function BlogPost() {
  return (
    <MainLayout>
      <article className="blog-post-page padding-global py-16 md:py-24">
        <div className="container-large max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="blog-post-header mb-12">
            <h1 className="blog-body_main-heading cc-heading-h2 text-[#080808] text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1] mb-10">
              Figma Meetup Recap: UX Design Insights from Redesigning a Food Delivery App
            </h1>
            
            <div className="blog-body_published-date cc-subtitle text-[#080808] text-[1.125rem] font-normal mb-10">
              April 25, 2025 • 5 min read
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="blog-featured-image relative aspect-[16/9] mb-12 overflow-hidden rounded-lg">
            <Image 
              src="/images/assets/blog/Figma meetup-April 24/highres_527567589.jpeg"
              alt="Figma Meetup Group Photo at Engage Studios"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Blog Content */}
          <div className="blog-body max-w-none">
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              Had such a great time at the Figma in Göteborg event yesterday! It was incredible to see our design community come together at Engage Studios, part of the BERGE Group in Gothenburg, with around 50 designers, UX enthusiasts, and creative minds filling the space with energy and ideas.
            </p>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">A Full House of Creative Collaboration</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              The evening was truly hands-on, centered around a collaborative exercise to redesign a food delivery app. As groups formed throughout the space, the room quickly filled with conversations about user flows, pain points, and innovative solutions. What made this meetup special was the mix of professionals from different backgrounds—from seasoned UX designers to UI specialists and those just starting their design journey.
            </p>
            
            <div className="image-container relative w-full h-[400px] my-10 overflow-hidden rounded-lg">
              <Image 
                src="/images/assets/blog/Figma meetup-April 24/highres_527567580.jpeg"
                alt="Designers collaborating at the Figma meetup"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">Exploring Figma's Latest AI Features</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              During the presentations, I had the opportunity to demonstrate some of Figma's newest features, including the native AI tools that have been generating buzz in the design community. We explored how these features can streamline workflows and support the creative process without replacing the critical thinking that designers bring to the table.
            </p>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              For those who missed our previous meetup, I also showcased how to create a Figma plugin using just a prompt with Cursor AI—a practical example of how AI can help designers extend their tools without deep coding knowledge. The Contrast Checker demo was especially well-received, highlighting how accessibility considerations can be seamlessly integrated into the design process.
            </p>
            
            <blockquote className="border-l-4 border-[#b14e2f] pl-6 italic my-8 text-[#6e6e6e]">
              "The value of in-person design collaboration can't be overstated. Being able to watch others work, share techniques in real-time, and bounce ideas off fellow designers creates an environment where innovation naturally flourishes."
            </blockquote>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">UX Insights from the Food Delivery App Redesign</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              The core of our meetup was the hands-on redesign of a food delivery app prototype—specifically taking a critical look at Foodora's mobile experience. Here are some of the key UX insights that emerged from our collaborative design session:
            </p>
            
            <ul className="list-disc pl-10 mb-10">
              <li className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-4">
                <strong>Progressive Disclosure:</strong> Multiple teams independently identified that the current app overwhelms users with too many options at once. Several prototypes introduced staged information revelation, showing only what users need at each step of their journey.
              </li>
              <li className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-4">
                <strong>Contextual Filtering:</strong> Rather than having filters buried in a separate menu, teams experimented with bringing contextual filtering into the main browsing experience, making refinement feel more natural and immediate.
              </li>
              <li className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-4">
                <strong>Visual Hierarchy Refinement:</strong> Many groups focused on creating clearer visual hierarchies, ensuring that primary actions (like adding to cart) stand out while secondary information recedes appropriately.
              </li>
              <li className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-4">
                <strong>Personalization Opportunities:</strong> Several prototypes explored how machine learning could help the app learn user preferences over time, surfacing relevant restaurants and dishes without requiring explicit filtering.
              </li>
            </ul>
            
            <div className="image-container relative w-full h-[400px] my-10 overflow-hidden rounded-lg">
              <Image 
                src="/images/assets/blog/Figma meetup-April 24/highres_527567584.jpeg"
                alt="Team presenting their food delivery app prototype"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">The Power of Quick Prototyping</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              One of the most valuable takeaways from the session was watching how quickly teams could iterate on ideas using Figma's collaborative tools. In just under an hour, groups went from initial sketches to interactive prototypes that communicated core concepts effectively.
            </p>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              This rapid prototyping approach reinforced an important UX principle: you don't need to perfect every pixel before testing an idea. Several teams mentioned how liberating it was to focus on core interactions rather than visual polish, allowing them to explore more conceptual territory in the limited time available.
            </p>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              One particularly interesting approach involved a team that split their prototype into two parallel versions—one focusing on streamlining the ordering process for returning users, and another emphasizing discovery for new users. This parallel prototyping technique helped them identify which elements were essential across both user journeys.
            </p>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">Building Our Design Community</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              Beyond the technical skills and design insights, what made the evening truly special was watching Gothenburg's design community grow stronger through shared experiences. As designers presented their prototypes at the end of the session, the supportive atmosphere was palpable—questions were thoughtful, feedback was constructive, and everyone walked away with new perspectives.
            </p>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              I'm incredibly grateful to everyone who joined us and to Engage Studios for providing such a welcoming space. This growing community of creative minds is what makes Gothenburg an increasingly exciting place for designers.
            </p>
            
            <div className="image-container relative w-full h-[400px] my-10 overflow-hidden rounded-lg">
              <Image 
                src="/images/assets/blog/Figma meetup-April 24/1745589693309.jpg"
                alt="Designers networking after the main session"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-[#080808] text-[1.625rem] font-medium leading-[1.2] mb-5 mt-12">Looking Forward</h2>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              The momentum from this meetup continues as we plan our next event in June. We're committed to hosting these gatherings every two months, creating consistent opportunities for designers to connect, learn, and grow together.
            </p>
            
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              Whether you're curious about Figma's capabilities, looking to expand your design toolkit, or simply want to connect with fellow UX enthusiasts, we'd love to see you at our next meetup. The collaborative energy of in-person design events creates a special kind of magic that digital-only interaction can't replicate.
            </p>
            
            <div className="event-link bg-gray-50 p-6 rounded-lg mb-10">
              <h3 className="text-[#080808] text-[1.25rem] font-medium mb-4">Join Our Next Meetup</h3>
              <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-4">
                If you're interested in joining our next Figma meetup in Göteborg, connect with me on LinkedIn for updates on upcoming events. Our next session is planned for June 2025.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/iamjaydesign/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#080808] text-white px-6 py-3 rounded-md hover:bg-[#080808]/90 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="related-posts mt-20">
            <h3 className="text-2xl font-semibold mb-10">More articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/future-of-design-meetup" className="block group">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image 
                    src="/images/assets/blog/Meetup2025Feb1.jpeg"
                    alt="The Future of Design: Insights from Our Recent Meetup"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-medium mb-2 group-hover:text-[#b14e2f] transition-colors">
                  The Future of Design: Insights from Our Recent Meetup
                </h4>
                <p className="text-sm text-[#6e6e6e]">
                  Key takeaways from our design community meetup on emerging trends and collaborative approaches.
                </p>
              </Link>
              
              <Link href="/blog/ai-in-ux-design" className="block group">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image 
                    src="/images/assets/blog/Ericsson UX.jpeg"
                    alt="AI in UX and UX in AI: The Symbiotic Relationship"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-medium mb-2 group-hover:text-[#b14e2f] transition-colors">
                  AI in UX and UX in AI: The Symbiotic Relationship
                </h4>
                <p className="text-sm text-[#6e6e6e]">
                  Explore the evolving relationship between AI and user experience design.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  )
} 