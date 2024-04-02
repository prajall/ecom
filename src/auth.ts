//@ts-nocheck
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import { User } from "./db/models/userModel";

interface user {
  email: string;
  password?: string;
  image?: string;
}

const prisma = new PrismaClient();
const config: NextAuthConfig = {
  // providers:[google],
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
          const user = await User.findOne({ email: credentials.email });
          console.log("user,", user);
          if (!user) {
            throw new Error("No user found");
          } else {
            console.log("user found: ", user);
            return { name: user.email, email: user.email };
          }
        } catch (error) {
          console.log("login error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      console.log("GOOGLE USER", user.user.email);

      // if (user.provider == "google") {
      try {
        const existingUser = await prisma.user
          .findUnique({ where: { email: user.user.email } })
          .catch((err) => {
            // throw new Error("Error cchecking user")
            console.log("error checking user: ", err);
          });
        console.log("existingUser: ", existingUser);
        if (!existingUser) {
          console.log("no existingUser");

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
          // console.log("newUser created: ", newUser);
        }

        return true;
      } catch (error) {
        console.error("Error registering Google user:", error);
        return false;
      }
      return false;
      // }
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
