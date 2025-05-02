import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata = {
  title: "Jay Design Portfolio — Creative Director Portfolio",
  description: "Based in Gothenburg, Sweden, I specialize in capturing authentic moments and turning them into visual stories. My work has been featured in GQ Magazine, and I've collaborated with clients ranging from families to global brands.",
  metadataBase: new URL("https://iamjaydesign.com"),
  openGraph: {
    title: "Jay Design Portfolio — Creative Director Portfolio",
    description: "Based in Gothenburg, Sweden, I specialize in capturing authentic moments and turning them into visual stories.",
    url: "https://iamjaydesign.com",
    siteName: "Jay Design Portfolio",
    images: [
      {
        url: "/images/assets/About/image-02.png",
        width: 632,
        height: 757,
        alt: "Jay Design Portfolio Preview",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Design Portfolio — Creative Director Portfolio",
    description: "Based in Gothenburg, Sweden, I specialize in capturing authentic moments and turning them into visual stories.",
    images: "/images/assets/About/image-02.png",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon.png",
        type: "image/png",
        sizes: "16x16",
      }
    ],
    apple: {
      url: "/favicon.png",
      type: "image/png",
      sizes: "180x180",
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ClientBody>
          <div id="main-wrapper" className="page-wrapper">
            {children}
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
