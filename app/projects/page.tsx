import React from 'react'

import Container from '@/components/container'
import Projects from '@/components/projects'
import Heading from '@/components/heading'
import SubHeading from '@/components/subheading'
import { projects } from '@/constants/projects'
import Scales from '@/components/scales'

function ProjectPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="relative  mx-auto h-full w-full max-w-4xl bg-white pt-10 dark:bg-neutral-900 min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <SubHeading>
          A selection of projects I've designed and developed — helping
          businesses establish their digital presence and connect with clients
          effectively.
        </SubHeading>

        <Projects projects={projects} />
      </Container>
    </div>
  )
}

export default ProjectPage
