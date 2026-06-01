import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TabTitleAnimator from "@/components/shared/TabTitleAnimator";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Create Media | Growth, Marketing & Branding Partner",
  description:
    "We build brands, content, campaigns, and growth systems for businesses ready to dominate their market. Performance marketing, UGC, branding, and business development all under one roof.",
  keywords: [
    "Best Digital Marketing Agency",
    "Performance Marketing Agency",
    "Branding Agency",
    "UGC Video Agency",
    "Meta Ads Agency",
    "Website Development Company",
    "Video Editing Agency",
    "Social Media Marketing Agency",
    "Business Development Agency",
    "Vibe Create Media",
    "Digital Marketing",
    "Growth Marketing",
    "Content Marketing",
    "UGG Videos",
    "Brand Strategy",
  ],
  authors: [{ name: "Vibe Create Media" }],
  creator: "Vibe Create Media",
  publisher: "Vibe Create Media",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vibe Create Media",
    title: "Vibe Create Media | Growth, Marketing & Branding Partner",
    description:
      "We build brands, content, campaigns, and growth systems for businesses ready to dominate their market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Create Media | Growth, Marketing & Branding Partner",
    description:
      "We build brands, content, campaigns, and growth systems for businesses ready to dominate their market.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vibe Create Media",
              description:
                "Growth, Marketing, Branding, Content, UGC, Business Development, and Performance Marketing Partner",
              url: "https://vibecreatemedia.com",
              email: "growth@vibecreatemedia.com",
              telephone: "+917020906559",
              founder: {
                "@type": "Person",
                name: "Dr. Aditya Fattepurkar",
                jobTitle: "Founder",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Mrs. Shivani Fattepurkar",
                  jobTitle: "CEO",
                },
                {
                  "@type": "Person",
                  name: "Prathviraj Jadhav",
                  jobTitle: "Growth Lead",
                },
                {
                  "@type": "Person",
                  name: "Ram Shingne",
                  jobTitle: "Designer",
                },
                {
                  "@type": "Person",
                  name: "Harish Lonkar",
                  jobTitle: "Videographer",
                },
                {
                  "@type": "Person",
                  name: "Ritika",
                  jobTitle: "Social Media Manager",
                },
              ],
              sameAs: [
                "https://www.instagram.com/vibecreatemedia/",
                "https://www.facebook.com/vibecreatemedia/",
                "https://www.threads.com/@vibecreatemedia",
                "https://www.linkedin.com/company/vibecreate-media/"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased bg-background text-foreground`}
      >
        <TabTitleAnimator />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
