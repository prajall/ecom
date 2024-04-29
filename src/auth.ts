//@ts-nocheck
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";

interface user {
  email: string;
  password?: string;
  image?: string;
}

const prisma = new PrismaClient();
const config: NextAuthConfig = {
  providers: [
    google,
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        return { email: credentials.email };
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      return { email: user.user.email, name: user.user.name };
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
