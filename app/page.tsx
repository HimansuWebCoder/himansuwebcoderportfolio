// import Image from "next/image";
// import { Inter } from "next/font/google";
import Container from '@/components/container'
import Projects from '@/components/projects'
import LandingBlogs from '@/components/landing-blogs'
import Heading from '@/components/heading'
import SubHeading from '@/components/subheading'
import { projects } from '@/constants/projects'
import Testimonials from '@/components/testimonials'
import Scales from '@/components/scales'
import Works from '@/components/works'

// const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="relative mx-auto h-full w-full max-w-4xl pt-10 bg-white pt-10 dark:bg-neutral-900 min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        {/* side grid lines */}
        <Scales />
        <Heading>Himansu Naik</Heading>

        <SubHeading>
          <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
            Building
            <a
              className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white  mx-1"
              href="#"
            >
              Websites
            </a>
            &
            <a
              className="inline-block px-2 py-0 font-bold bg-gray-100 dark:bg-zinc-700 dark:text-white mx-1"
              href="#"
            >
              Web App
            </a>
          </div>
          I build result driven website & web apps — helping clients get more
          customers and grow their businesses.
          <br />
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        {/*<LandingBlogs />*/}
        <Works />
        <Testimonials />
      </Container>
    </div>
  )
}
