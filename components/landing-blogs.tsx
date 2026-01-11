import { getBlogs } from '@/utils/mdx'
// import { div, filter } from 'motion/react-client';
import Link from 'next/link'
import React from 'react'
import SectionHeading from './section-heading';
import MotionDiv from './motion-div';
// import { delay } from 'motion';

async function LandingBlogs() {
    const truncate = (str: string, length: number) =>
  str.length > length ? str.substring(0, length) + "..." : str;
    const allBlogs = await getBlogs()
  return (
    <div className='mt-10 px-4 py-6'>
      <SectionHeading delay={0.4} className='mb-4'>
        I love writing things down
      </SectionHeading>
      <div className='flex flex-col gap-8 '>
      {allBlogs.slice(0, 3).map((blog, idx) => (
            <MotionDiv 
            key={blog.title}
              initial= {{opacity: 0, y: 10, filter:"blur(10px)"}}
              animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
              transition={{duration: 0.3, delay: idx * 0.1, ease: "easeInOut"}}
            >
                <Link
              href={`/blog/${blog.slug}`}
              
              className="pb-10 block hover:opacity-80 transition"
            >
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <h2 className="text-primary dark:text-[#E5E5E5] text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {new Date(blog.date).toLocaleString()}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description ?? "", 120)}
              </p>
            </Link>
            </MotionDiv>
          ))}
    </div>
    </div>

  )
}

export default LandingBlogs
