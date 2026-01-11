import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react'

import Link from 'next/link'
import React from 'react'
import Container from '../container'

export const Footer = () => {
  return (
    <Container className="flex flex-col items-center gap-6  md:flex-row justify-between py-3 px-10 border-t border-neutral-100">
      <p className="text-xs text-neutral-500">Connect with me here</p>
      <div className="flex items-center justify-center gap-4 ">
        <Link href="https://www.linkedin.com/in/himansunaik/">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.instagram.com/himansuwebcoder/">
          <IconBrandInstagram className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com/HimansuWebCoder">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  )
}
