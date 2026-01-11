"use client";
import React from "react";
import { motion } from "motion/react";

function LanguageContainer({
  svg,
  title,
}: {
  svg: React.ReactNode;
  title: string;
}) {
  return (
    <motion.div
        initial={{ width: "32px", height:"32px", opacity: 0.7, x: -10 }}
        whileHover={{ width: "100px", opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      className="flex group items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 -mr-2 hover:z-10 " 
      
    >
      {/* Circle Icon */}
      <span className="flex h-8 w-8 items-center justify-center rounded-full">
        {svg}
      </span>

      {/* Slide-in text */}
      <motion.span
        className="hidden group-hover:block whitespace-nowrap text-neutral-500 dark:text-neutral-200"
      >
        {title}
      </motion.span>
    </motion.div>
  );
}

export default LanguageContainer;
