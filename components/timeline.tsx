'use client'
import { cn } from '@/lib/utils'
import { IconCircleCheckFilled } from '@tabler/icons-react'
import { motion, useInView } from 'motion/react'
// import { view } from "motion/react-client";
import React, { useRef } from 'react'
import SectionHeading from './section-heading'

type Data = {
  title: string
  content: {
    title: string
    description?: string | React.ReactNode
  }[]
}
function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  const data: Data[] = [
    {
      title: '2025',
      content: [
        {
          title: 'Building My Freelance Brand',
          description:
            'Helped businesses across multiple industries launch their online platforms, creating responsive websites that showcase their services and connect them with clients worldwide.',
        },
      ],
    },
    {
      title: '2025',
      content: [
        {
          title: 'Frontend Developer Intern',
          description:
            'Building responsive web applications by converting Figma designs into clean, production-ready React.js code. Enhancing technical skills in JavaScript, React, and UI/UX implementation through real-world project experience.',
        },
      ],
    },
  ]

  return (
    <div
      ref={ref}
      className="shadow-section-inset dark:shadow-section-inset-dark my-6 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800"
    >
      <SectionHeading delay={0.2} className="my-4 ">
        Here is my professional journey
      </SectionHeading>
      {data.map((year, index) => (
        <div key={year.title} className="mb-6">
          <motion.h2
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{
              filter: isInView ? 'none' : 'blur(4px)',
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              delay: 0.1 * index,
            }}
            className="shadow-aceternity dark:text-[#E5E5E5] w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>

          <div className="flex flex-col gap-4 mt-2">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <div className="flex items-start gap-2">
                  <Step isInView={isInView} idx={idx}>
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        ease: 'easeInOut',
                        duration: 0.3,
                        delay: 0.2 * idx,
                      }}
                      className="text-neutral-600 font-medium"
                    >
                      {item.title}
                    </motion.h3>
                  </Step>
                </div>
                {item.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.3,
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline

const Step = ({
  isInView,
  className,
  idx,
  children,
}: {
  isInView: boolean
  className?: string
  idx: number
  children: React.ReactNode
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
        delay: 0.2 * idx,
      }}
      className={cn('flex items-start gap-2', className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
      {children}
    </motion.div>
  )
}
