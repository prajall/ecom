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
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: { email: true },
          });
          console.log(user);

          if (!user) {
            throw new Error("no existing user");
          } else {
            return { id: user.id, email: user.email };
          }
        } catch (error) {
          console.error("Login error:", error.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      if (user.account.provider == "google") {
        try {
          const existingUser = await prisma.user
            .findUnique({ where: { email: user.user.email } })
            .catch((err) => {
              console.log("error checking user: ", err);
            });
          console.log("existingUser: ", existingUser);
          if (!existingUser) {
            console.log("no existingUser Creating new user");

            const newUser = prisma.user
              .create({
                data: {
                  email: user.user.email,
                  name: user.user.name,
                  image: user.user.image,
                },
              })
              .catch((err) => {
                console.log("Error creating error: ", err);
              });
            console.log("new Google user created: ", newUser);
            return { email: user.user.email, name: user.user.name };
          }
          return false;
        } catch (error) {
          console.error("Error registering Google user:", error);
          return false;
        }
      }
      if (user.account?.provider == "credentials") {
        return { message: "custom message from server" };
      }
      return false;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
