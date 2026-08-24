import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRevealVariants } from '../../lib/motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  const variants = useRevealVariants();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={reduce ? { duration: 0 } : { delay }}
    >
      {children}
    </motion.div>
  );
}
