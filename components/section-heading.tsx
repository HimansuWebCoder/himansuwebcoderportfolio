"use client"
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

function SectionHeading({children, delay = 0, className} : {children : string, delay: number, className?: string}) {
  return (
    <h2 className={cn("relative mt-4 w-fit max-w-lg text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-300", className)}>
        <Background/>
        {
      children.split(" ").map((word, idx) => (
        <motion.span
        
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)"
          }}

          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}

          transition={{
            delay: delay + idx * 0.1,
            duration: 0.3,
            ease: "easeInOut"
          }}

        key={word + idx} 
        className="inline-block"
          viewport={{ once: true }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  )
}

export default SectionHeading

const Background = () =>{
  return (
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.3, ease: "easeInOut", delay:1}}
          className='absolute inset-0 h-full dark:bg-[#262626] w-full bg-neutral-100 scale-[1.04]'> 
            <div className="h-1 w-1 absolute animate-pulse -top-px -left-px rounded-full bg-neutral-200"></div>
            <div className="h-1 w-1 absolute animate-pulse -top-px -right-px rounded-full bg-neutral-200"></div>
            <div className="h-1 w-1 absolute animate-pulse -bottom-px -left-px rounded-full bg-neutral-200"></div>
            <div className="h-1 w-1 absolute animate-pulse -bottom-px -right-px rounded-full bg-neutral-200"></div>
          </motion.div>

  )
}