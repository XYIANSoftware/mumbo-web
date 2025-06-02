import { AnimationProps } from '@/types';
import { ANIMATION_CONFIG } from '@/constants';

interface AnimationConfig {
  type: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  duration?: number;
  delay?: number;
}

export const useAnimation = ({ type, duration = 0.5, delay = 0 }: AnimationConfig): AnimationProps => {
  const animations: Record<AnimationConfig['type'], AnimationProps> = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: ANIMATION_CONFIG.ease.default },
    },
  };

  return animations[type];
}; 