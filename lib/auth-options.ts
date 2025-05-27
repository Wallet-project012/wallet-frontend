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
    CredentialsProvider({
      id: 'otp',
      name: 'OTP Login',
      credentials: {
        number: { label: 'Phone Number', type: 'text' },
        otp: { label: 'OTP Code', type: 'text' },
      },
      async authorize(credentials) {
        const { number, otp } = credentials ?? {};

        // TODO: Replace with your own backend OTP verification logic
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ number, otp }),
        });

        if (!res.ok) return null;

        const user = await res.json();
        return user; // must return { id, name, email } at minimum
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
