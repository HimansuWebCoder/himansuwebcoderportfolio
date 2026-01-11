// "use client"
// import React from 'react'
// import { motion, type AnimationProps } from "framer-motion";

// function MotionDiv(props: AnimationProps & {children?: React.ReactNode}) {
//   return (
//     <motion.div {...props} />
//   )
// }

// export default MotionDiv

"use client";
import React from "react";
import { motion, type MotionProps } from "motion/react";

type Props = MotionProps & {
  children?: React.ReactNode;
};

function MotionDiv({ children, ...rest }: Props) {
  return <motion.div {...rest}>{children}</motion.div>;
}

export default MotionDiv;
