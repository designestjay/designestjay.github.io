import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Style Guide — Jay Design",
  description: "Style guide and design elements used across the portfolio website."
};

export default function StyleGuidePage() {
  return (
    <MainLayout>
      <section className="style-guide-section padding-global py-16">
        <div className="container-large">
          <div className="style-guide-header mb-16">
            <h1 className="text-7xl font-bold mb-6">Style Guide</h1>
            <p className="text-xl max-w-3xl">A comprehensive collection of all visual elements and components used throughout the website.</p>
          </div>

          {/* Colors Section */}
          <div className="style-guide-colors mb-24">
            <h2 className="text-5xl font-semibold mb-8">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="color-item">
                <div className="color-box h-32 rounded-md bg-[#080808] mb-3"></div>
                <h4 className="font-medium">Primary</h4>
                <p className="text-sm text-[#9ca0a3]">#080808</p>
              </div>
              <div className="color-item">
                <div className="color-box h-32 rounded-md bg-[#F5F5F5] border border-gray-200 mb-3"></div>
                <h4 className="font-medium">Stroke</h4>
                <p className="text-sm text-[#9ca0a3]">#F5F5F5</p>
              </div>
              <div className="color-item">
                <div className="color-box h-32 rounded-md bg-[#FBFBFB] border border-gray-200 mb-3"></div>
                <h4 className="font-medium">Gray</h4>
                <p className="text-sm text-[#9ca0a3]">#FBFBFB</p>
              </div>
              <div className="color-item">
                <div className="color-box h-32 rounded-md bg-[#FFFFFF] border border-gray-200 mb-3"></div>
                <h4 className="font-medium">White</h4>
                <p className="text-sm text-[#9ca0a3]">#FFFFFF</p>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="style-guide-typography mb-24">
            <h2 className="text-5xl font-semibold mb-8">Typography</h2>
            <div className="grid gap-8">
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 1</h3>
                  <p className="text-sm text-[#9ca0a3]">Bold - 70px</p>
                </div>
                <h1 className="text-7xl font-bold">The quick brown fox jumps</h1>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 2</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 62px</p>
                </div>
                <h2 className="section-main-heading cc-heading-h3">The quick brown fox jumps</h2>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 3</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 54px</p>
                </div>
                <h3 className="text-5xl font-semibold">The quick brown fox jumps</h3>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 4</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 48px</p>
                </div>
                <h4 className="text-4xl font-semibold">The quick brown fox jumps</h4>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 5</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 40px</p>
                </div>
                <h5 className="text-3xl font-semibold">The quick brown fox jumps</h5>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Heading 6</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 32px</p>
                </div>
                <h6 className="text-2xl font-semibold">The quick brown fox jumps</h6>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Title</h3>
                  <p className="text-sm text-[#9ca0a3]">Bold - 24px</p>
                </div>
                <p className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</p>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Sub title</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 18px</p>
                </div>
                <p className="text-lg font-semibold">The quick brown fox jumps over the lazy dog</p>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Body</h3>
                  <p className="text-sm text-[#9ca0a3]">Semibold - 16px</p>
                </div>
                <p className="text-base font-semibold">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!</p>
              </div>
              
              <div className="typography-item">
                <div className="flex flex-wrap justify-between items-baseline mb-2">
                  <h3 className="font-medium">Caption Small</h3>
                  <p className="text-sm text-[#9ca0a3]">Medium - 12px</p>
                </div>
                <p className="text-xs font-medium">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="style-guide-buttons mb-24">
            <h2 className="text-5xl font-semibold mb-8">Buttons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="button-item">
                <h3 className="font-medium mb-3">Primary Button</h3>
                <button className="btn-primary">
                  Button Text
                </button>
              </div>
              
              <div className="button-item">
                <h3 className="font-medium mb-3">Secondary Button</h3>
                <button className="btn-secondary">
                  Button Text
                </button>
              </div>
              
              <div className="button-item">
                <h3 className="font-medium mb-3">Accent Button</h3>
                <button className="btn-accent">
                  Button Text
                </button>
              </div>
              
              <div className="button-item">
                <h3 className="font-medium mb-3">Text Link</h3>
                <Link href="#" className="text-link">
                  Link Text →
                </Link>
              </div>
              
              <div className="button-item">
                <h3 className="font-medium mb-3">Small Button</h3>
                <button className="btn-small">
                  Button Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 