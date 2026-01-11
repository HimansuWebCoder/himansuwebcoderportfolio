// import Image from "next/image";
// import { Inter } from "next/font/google";
import Container from '@/components/container'

import Heading from '@/components/heading'
import SubHeading from '@/components/subheading'
import { ContactForm } from '@/components/contact-form'
import Scales from '@/components/scales'
import SocialLinks from '@/components/social-links'

// const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="relative pt-10 mx-auto h-full w-full max-w-4xl bg-white pt-10 dark:bg-neutral-900 min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>
          {
            "Looking to bring your project to life? <br /> Ready to build your digital presence? Let's connect and get started."
          }
        </SubHeading>
        <ContactForm />
        {/*<SocialLinks />*/}
      </Container>
    </div>
  )
}
