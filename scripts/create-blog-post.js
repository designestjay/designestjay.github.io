#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promisifiedQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

const createBlogPost = async () => {
  try {
    console.log('🚀 Creating a new blog post...\n');

    // Get input from user
    const title = await promisifiedQuestion('Title: ');
    const summary = await promisifiedQuestion('Summary: ');
    const date = await promisifiedQuestion('Date (e.g. April 25, 2025): ');
    const imagePath = await promisifiedQuestion('Main image path (from public directory): ');
    
    // Generate slug
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString('en-US', { month: 'long' }).toLowerCase();
    const slug = `/blog/${slugify(`${title}-${month}-${year}`)}`;
    const directoryPath = path.join(process.cwd(), 'src/app', slug);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
      console.log(`📁 Created directory: ${directoryPath}`);
    }

    // Create page.tsx file
    const pagePath = path.join(directoryPath, 'page.tsx');
    const pageContent = `import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "${title} — Jay Design",
  description: "${summary}"
};

export default function BlogPost() {
  return (
    <MainLayout>
      <article className="blog-post-page padding-global py-16 md:py-24">
        <div className="container-large max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="blog-post-header mb-12">
            <h1 className="blog-body_main-heading cc-heading-h2 text-[#080808] text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1] mb-10">
              ${title}
            </h1>
            
            <div className="blog-body_published-date cc-subtitle text-[#080808] text-[1.125rem] font-normal mb-10">
              ${date} • 5 min read
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="blog-featured-image relative aspect-[16/9] mb-12 overflow-hidden rounded-lg">
            <Image 
              src="${imagePath}"
              alt="${title}"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Blog Content */}
          <div className="blog-body max-w-none">
            <p className="text-[#6e6e6e] text-[1.125rem] font-normal leading-[1.4] mb-10">
              Your intro paragraph here.
            </p>
            
            {/* Add your content sections here */}
            
          </div>
        </div>
      </article>
    </MainLayout>
  )
}`;

    fs.writeFileSync(pagePath, pageContent);
    console.log(`📝 Created page: ${pagePath}`);

    // Update blogPosts.ts
    const dataFilePath = path.join(process.cwd(), 'src/data/blogPosts.ts');
    const dataContent = fs.readFileSync(dataFilePath, 'utf8');
    
    // Find the highest ID
    const idRegex = /id: (\d+),/g;
    let highestId = 0;
    let match;
    
    while ((match = idRegex.exec(dataContent)) !== null) {
      const id = parseInt(match[1], 10);
      if (id > highestId) {
        highestId = id;
      }
    }
    
    const newId = highestId + 1;
    
    // Create new blog post entry
    const newBlogPost = `  {
    id: ${newId},
    title: '${title}',
    summary: "${summary}",
    image: '${imagePath}',
    slug: '${slug}',
    date: '${date}'
  },`;
    
    // Insert at the beginning of the array
    const updatedContent = dataContent.replace(
      'export const blogPosts: BlogPost[] = [',
      `export const blogPosts: BlogPost[] = [
${newBlogPost}`
    );
    
    fs.writeFileSync(dataFilePath, updatedContent);
    console.log(`📊 Updated blog data file: ${dataFilePath}`);
    
    console.log('\n✅ Blog post created successfully!');
    console.log(`\nNext steps:`);
    console.log(`1. Add your content to ${pagePath}`);
    console.log(`2. Ensure the image at ${imagePath} exists`);
    console.log(`3. Run your dev server to preview the blog post`);
    
    rl.close();
  } catch (error) {
    console.error('❌ Error creating blog post:', error);
    rl.close();
  }
};

// Execute the function
createBlogPost(); 