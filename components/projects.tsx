'use client'
import { projects as defaultProjects, Project } from '@/constants/projects'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionHeading from './section-heading'

function Projects({ projects = defaultProjects }: { projects: Project[] }) {
  return (
    <div className="my-4 p-4 shadow-section-inset">
      <SectionHeading delay={0.2}>
        I love building website & web apps that can help businesses to generate
        more revenue.
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: 'easeInOut',
            }}
            key={project.title}
            className="py-4 group mb-4 hover:shadow-aceternity hover:rounded-md transition-all ease-in-out duration-300"
          >
            <Link href={project.href}>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-xl  w-full object-cover group-hover:scale-105 transition-all duration-300"
                // className="rounded-xl  w-full object-cover  transition duration-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium group-hover:pl-4 transition-all duration-300 tracking-tight text-neutral-500 dark:text-neutral-200">
                {project.title}
              </h2>
              <p className="mt-2 max-w-[14rem] group-hover:pl-4 transition-all duration-300  text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
