import Link from 'next/link';
import { Button } from 'primereact/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 -bottom-20 -left-20" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 -top-20 -right-20" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-primary-light/10 to-secondary-light/10 bottom-40 right-20" />

      <div className="text-center relative z-10 space-y-6">
        <h1 className="text-8xl font-bold font-display mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
            404
          </span>
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">
            Oops! The beat dropped out
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Looks like this track isn't in our playlist. Let's get you back to where the music's playing.
          </p>
        </div>

        <div>
          <Link href="/">
            <Button
              label="Back to Home"
              icon="pi pi-home"
              className="p-button-rounded p-button-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
} 