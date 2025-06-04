import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'primereact/button';

const AnimatedShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.2, 0.3]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <AnimatedShape className="w-[400px] h-[400px] -bottom-20 -left-20" />
      <AnimatedShape className="w-[300px] h-[300px] -top-20 -right-20" />
      <AnimatedShape className="w-[200px] h-[200px] bottom-40 right-20" />

      <div className="text-center relative z-10 space-y-6">
        <motion.h1 
          className="text-8xl font-bold font-display mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
            404
          </span>
        </motion.h1>
        
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-200">
            Oops! The beat dropped out
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Looks like this track isn't in our playlist. Let's get you back to where the music's playing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/">
            <Button
              label="Back to Home"
              icon="pi pi-home"
              className="p-button-rounded p-button-lg"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 