'use client'
import React, { useState } from 'react'
import Container from '../container'
import Image from 'next/image'
// import { Link } from "next-view-transitions";
import Link from 'next/link'

// import { Menu, X } from "lucide-react";

import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import { IconMenu2, IconX } from '@tabler/icons-react'

function Navbar() {
  const navItems = [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
    // { title: 'Blogs', href: '/blog' },
  ]

  const [hovered, setHovered] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  // desktop scroll effects
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 100], [0, 10])
  const width = useTransform(scrollY, [0, 100], ['90%', '50%'])

  const [scrolled, setScrolled] = useState<boolean>(false)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  // Motion Variants
  // const menuVariants = {
  //   hidden: { opacity: 0, y: -20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.1 },
  //   },
  //   exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  // };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  }

  return (
    <Container className="relative mx-auto h-full w-full max-w-4xl bg-white pt-10 md:pt-0 dark:bg-neutral-900">
      {/* ✅ Desktop Navbar with scroll animation */}
      <motion.nav
        style={{
          boxShadow: scrolled ? 'var(--shadow-aceternity)' : 'none',
          width,
          y,
          paddingInline: scrolled ? '12px' : '40px',
          borderRadius: scrolled ? '30px' : '0',
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="hidden md:flex z-[999] top-0 fixed h-fit inset-x-0 mx-auto items-center justify-between py-2 px-10 bg-white/50 dark:bg-neutral-900 max-w-4xl backdrop-blur-sm"
      >
        {/* Avatar */}
        <Link href={'/'}>
          <Image
            src={'/avatar.webp'}
            height={100}
            width={100}
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm relative px-2 py-1"
              key={idx}
              href={item.href}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* ✅ Mobile Navbar (no scroll animations) */}
      <nav className="flex md:hidden z-[999] top-0 fixed h-fit inset-x-0 mx-auto items-center justify-between py-3 px-6 bg-white dark:bg-neutral-900 backdrop-blur-sm shadow-md">
        {/* Avatar */}
        <Link href={'/'}>
          <Image
            src={'/avatar.webp'}
            height={100}
            width={100}
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-neutral-700 dark:text-white"
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-14 h-screen left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg rounded-md p-6 md:hidden z-[998]"
          >
            <motion.ul
              className="flex flex-col items-center space-y-4"
              // variants={menuVariants}
            >
              {navItems.map((item, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    href={item.href}
                    className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default Navbar
