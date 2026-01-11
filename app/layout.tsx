import type { Metadata } from 'next'
// import { Inter } from "next/font/google";
import './globals.css'
import Navbar from '@/components/navbar'
// import { ViewTransitions } from "next-view-transitions";
import { Footer } from '@/components/navbar/footer'
import { Toaster } from 'sonner'

// const inter = Inter({
//  // required
//   weight: ["400", "500", "600", "700", "800", "900"], // fine to keep
//   display: "swap", // recommended for performance
//   preload: false,   // safe to keep with subset defined
// });
export const metadata: Metadata = {
  title: 'Himansu Naik | Full-Stack Developer Portfolio',
  description:
    'Freelance Full-Stack & Mobile App Developer specializing in React, Node.js, and Flutter. I build modern, scalable, and user-friendly web & mobile applications for businesses worldwide.',

  icons: {
    icon: '/icons/favicon.ico',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700 [--pattern-fg:var(--color-neutral-950)]/5 `}
        className={`antialiased bg-neutral-100 dark:bg-neutral-700 [--pattern-fg:var(--color-neutral-950)]/5 `}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    // </ViewTransitions>
  )
}
