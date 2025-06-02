'use client';

import { motion } from 'framer-motion';
import { CardProps } from '@/types';

export const Card = ({
  children,
  className = '',
  onClick,
  hover = true,
}: CardProps) => {
  return (
    <motion.div
      className={`
        bg-background-paper 
        rounded-xl 
        p-6 
        ${hover ? 'hover:shadow-xl hover:scale-[1.02]' : ''} 
        transition-all 
        duration-300 
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
}; 