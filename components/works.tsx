import React from 'react'

import SectionHeading from './section-heading'
import MotionDiv from './motion-div'
// import { Link } from "next-view-transitions";
// import LanguageContainer from "./language-container";
import { languages } from '@/constants/language'
import Image from 'next/image'

const workedExperience = [
  {
    company: 'Freelancing',
    role: 'Full Stack Developer',
    duration: 'Oct 2024 - Present',
    image: '/turing.avif',
    description:
      'Designing and developing custom websites for local businesses, helping them establish their digital presence and reach clients online. Delivering end-to-end web solutions using React.js, Node.js, and modern development practices tailored to client needs.',
    techStack: [languages.react, languages.typescript, languages.redux],
  },
  {
    company: 'Web_Bocket',
    role: 'Frontend Developer Intern',
    duration: 'July 2025 - September 2025',
    image: '/turing.avif',
    description:
      'Converting Figma designs into responsive, production-ready React.js applications while strengthening skills in HTML, CSS, JavaScript, and UI/UX best practices. Gaining hands-on experience building real-world web solutions in a professional development environment.',
    techStack: [languages.react, languages.typescript, languages.redux],
  },
]

function Works() {
  return (
    <div className="my-4 p-4 shadow-section-inset">
      <SectionHeading delay={0.8}>Work Experience & Growth</SectionHeading>
      {workedExperience.map((work, idx) => (
        <MotionDiv
          key={work.description}
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: idx * 0.1, ease: 'easeInOut' }}
        >
          <div className="pb-2 block hover:opacity-80 transition mt-10">
            <div className="flex items-center justify-between transition-all ease-in-out transition-100">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                {work.company}
              </h2>
              {/*<Image
                height={100}
                width={100}
                src={work.image}
                alt={`${work.company} logo`}
                className="w-[100px] hidden rounded-md md:block "
              />*/}
            </div>
            <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
              <p className="text-sm text-neutral-800 dark:text-neutral-200">
                {work.role}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {work.duration}
              </p>
            </div>
            <p className="text-sm text-neutral-500">{work.description}</p>
            {/* <div className="mt-4 flex flex-wrap gap-2">
              {work.techStack.map((techKey) => {
                const tech = techKey;
                return (
                  <LanguageContainer
                    key={tech.name}
                    svg={<img src={tech.svg} className="w-5 h-5"/>}
                    title={tech.name}
                  />
                );
              })}
            </div> */}
          </div>
        </MotionDiv>
      ))}
    </div>
  )
}

export default Works
