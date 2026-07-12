import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Comprehensive SEO Metadata for Careerhub
export const metadata: Metadata = {
  // Basic metadata - optimized for "Careerhub" searches
  title: {
    default:
      "Careerhub | Anonymous Professional Community - Speak Freely, Stay Anonymous",
    template: "%s | Careerhub",
  },
  description:
    "Careerhub is the #1 anonymous professional community. Share insights, discuss salaries, review companies, and connect with verified professionals - all while staying completely anonymous. Free to join.",

  // Application info
  applicationName: "Careerhub",
  generator: "Next.js",
  keywords: [
    "anonymous professional community",
    "anonymous workplace discussions",
    "anonymous salary sharing",
    "company reviews anonymous",
    "blind alternative",
    "anonymous work chat",
    "professional networking anonymous",
    "workplace insights",
    "salary transparency",
    "anonymous career advice",
    "verified employee reviews",
    "Careerhub",
    "CareerHub",
    "anonymous work platform",
    "workplace gossip anonymous",
    "tech salary discussions",
    "anonymous professional network",
  ],

  // Authors and creator
  authors: [{ name: "Careerhub Team" }],
  creator: "Careerhub",
  publisher: "Careerhub",

  // Robots directives for SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  metadataBase: new URL("https://www.Careerhub.tech"),
  alternates: {
    canonical: "/",
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.Careerhub.tech",
    siteName: "Careerhub",
    title: "Careerhub - Anonymous Professional Community",
    description:
      "Join the #1 anonymous professional community. Share insights, discuss salaries, and connect with verified professionals - completely anonymously.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careerhub - Speak Freely, Stay Anonymous",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Careerhub - Anonymous Professional Community",
    description:
      "Join the #1 anonymous professional community. Share insights, discuss salaries, and connect with verified professionals.",
    images: ["/og-image.png"],
    creator: "@Careerhub",
  },

  // Favicon and Icons
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Verification for search engines
  verification: {
    google: "b4v_63mdwxhz8vbnoxcUJ4NCwzEUz3FE7U_M9QnCHPA",
  },

  // Category
  category: "technology",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1254D9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Google - WebSite (controls site name display) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.Careerhub.tech/#website",
              name: "Careerhub",
              alternateName: ["CareerHub", "Careerhub.tech", "Careerhub"],
              url: "https://www.Careerhub.tech",
              description:
                "The #1 anonymous professional community for sharing insights, salaries, and company reviews.",
              inLanguage: "en-US",
              publisher: {
                "@id": "https://www.Careerhub.tech/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.Careerhub.tech/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data for Google - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.Careerhub.tech/#organization",
              name: "Careerhub",
              alternateName: "Careerhub",
              url: "https://www.Careerhub.tech",
              logo: {
                "@type": "ImageObject",
                "@id": "https://www.Careerhub.tech/#logo",
                url: "https://www.Careerhub.tech/icon.png",
                contentUrl: "https://www.Careerhub.tech/icon.png",
                width: 512,
                height: 512,
                caption: "Careerhub",
              },
              image: { "@id": "https://www.Careerhub.tech/#logo" },
              description:
                "Anonymous professional community for workplace discussions, salary sharing, and company reviews.",
              foundingDate: "2024",
              slogan: "Speak Freely, Stay Anonymous",
            }),
          }}
        />

        {/* Structured Data for Google - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Careerhub",
              url: "https://www.Careerhub.tech",
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
