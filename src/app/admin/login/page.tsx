'use client';

// import { useEffect } from 'react';
// import { useSession, signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';

// Extend Session type to include our custom properties
// interface ExtendedSession {
//   user?: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//     isAdmin: boolean;
//     login?: string;
//   };
// }

export default function AdminLogin() {
  // const { data: session, status } = useSession() as { data: ExtendedSession | null; status: string };
  // const router = useRouter();

  // useEffect(() => {
  //   console.log('Session Status:', status);
  //   console.log('Session Data:', session);
    
  //   if (status === 'authenticated' && session?.user?.isAdmin) {
  //     console.log('Redirecting to admin - user is admin');
  //     router.push('/admin');
  //   }
  // }, [session, status, router]);

  // if (status === 'loading') {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <div className="text-center">
  //       <i className="pi pi-spin pi-spinner text-4xl"></i>
  //       <p className="mt-4">Loading...</p>
  //     </div>
  //   </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Admin Login</h1>
        
        {/* {status === 'authenticated' && !session?.user?.isAdmin ? (
          <div className="text-center">
            <p className="mb-4 text-red-500">
              Your account does not have admin privileges.
            </p>
            <p className="text-sm text-gray-600">
              Current user: {session?.user?.name} ({session?.user?.login})
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Please contact the site administrator if you believe this is an error.
            </p>
          </div>
        ) : status === 'unauthenticated' ? (
          <div className="flex flex-col gap-4">
            <p className="text-center text-gray-600">
              Please sign in with your admin account to continue.
            </p>
            <Button
              label="Sign in with GitHub"
              icon="pi pi-github"
              onClick={() => signIn('github')}
              className="p-button-primary w-full"
            />
          </div>
        ) : null} */}
        
        <div className="text-center">
          <p className="text-gray-600">Authentication temporarily disabled</p>
        </div>
      </div>
    </div>
  );
} 