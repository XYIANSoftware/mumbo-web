import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow specific GitHub username
      if (user.email === 'kyle@xyian.tech' || user.email?.endsWith('@xyian.tech')) {
        return true;
      }
      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.email === 'kyle@xyian.tech' || user.email?.endsWith('@xyian.tech');
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = !!token.isAdmin;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 