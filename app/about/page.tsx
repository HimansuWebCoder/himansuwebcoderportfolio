// import Image from "next/image";
// import { Inter } from "next/font/google";
import Container from '@/components/container'
// import Projects from "@/components/projects";
// import LandingBlogs from "@/components/landing-blogs";
import Timeline from '@/components/timeline'
import Heading from '@/components/heading'
import SubHeading from '@/components/subheading'
import Scales from '@/components/scales'
// import { Section } from "lucide-react";
// import SectionHeading from "@/components/section-heading";

// const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="relative mx-auto h-full pt-10 w-full max-w-4xl bg-white pt-10 dark:bg-neutral-900 min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About me</Heading>
        <SubHeading>
          {
            "I'm a Full-Stack Developer helping businesses establish their digital presence through modern, responsive web solutions — from local startups to international clients."
          }
        </SubHeading>

        {/* travel pics here */}
        <div className="">
          <Timeline />
        </div>
      </Container>
    </div>
  )
}
