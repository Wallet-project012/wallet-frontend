import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import axios from 'axios';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
          email: credentials?.email,
          password: credentials?.password,
        });

        const { user, token } = res.data;

        if (user && token) {
          return { ...user, token }; // Include token in returned object
        }
        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        // token.accessToken = user.token; // Store backend token
      }
      return token;
    },
    async session({ session, token }) {
      // session.user = token.user;
      // session.accessToken = token.accessToken; // Expose token to client
      return session;
    },
  },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
};
