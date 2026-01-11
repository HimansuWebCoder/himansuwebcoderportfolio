"use client";
import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function Container({children, className}: {children: ReactNode,className?: string }) {
  return (
    // <div className={cn("max-w-4xl h-full w-full mx-auto bg-white dark:bg-black relative", className)}>
    <div className={cn("max-w-4xl h-full w-full mx-auto bg-white dark:bg-black relative", className)}>
        
      {children}
   
    </div>
  )
}

export default Container
