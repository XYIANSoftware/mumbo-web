'use client';

import { motion } from 'framer-motion';
import { AnimationProps } from '@/types';
import { ANIMATION_CONFIG } from '@/constants';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animation?: AnimationProps;
}

export const PageHeader = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  animation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: ANIMATION_CONFIG.ease.default },
  },
}: PageHeaderProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
      {...animation}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-secondary-light">
          {title}
        </span>
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}; 