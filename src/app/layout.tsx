import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kundanprasadyadav.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Kundan Prasad Yadav Portfolio",
  category: "technology",
  title: {
    default: "Kundan| A MERN Stack Developer in Kathmandu, Nepal",
    template: "%s | Kundan Prasad Yadav",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  description:
    "Kundan is a B.Tech Computer Engineering graduate from NIMS University Jaipur, a MERN Stack developer, and a freelance developer in Kathmandu, Nepal.",
  keywords: [
    "Kundan Prasad Yadav",
    "MERN Stack Developer",
    "Developer in Kathmandu",
    "Freelance Developer Nepal",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer Nepal",
    "Computer Engineering Graduate",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Kundan Prasad Yadav" }],
  creator: "Kundan Prasad Yadav",
  publisher: "Kundan Prasad Yadav",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Kundan| A MERN Stack Developer in Kathmandu, Nepal",
    description:
      "B.Tech Computer Engineering graduate from NIMS University Jaipur, building modern web apps and freelance solutions in Kathmandu, Nepal.",
    url: siteUrl,
    siteName: "Kundan Prasad Yadav",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kundan Prasad Yadav portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundan| A MERN Stack Developer in Kathmandu, Nepal",
    description:
      "MERN Stack developer and freelance web developer based in Kathmandu, Nepal.",
    creator: "@kundanprasad",
    images: ["/og-image.svg"],
  },
  other: {
    "theme-color": "#020617",
    "msvalidate.01": "6B5176165543C9FDD35835E961986347",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
