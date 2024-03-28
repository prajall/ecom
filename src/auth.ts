//@ts-nocheck
import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
import { connectDB } from "./db/dbConfig";
import { User } from "./db/models/userModel";

const config:NextAuthConfig = {
  // providers:[google],
  providers:[google,Credentials({
    name:"credentials",
    credentials:{
      email:{
        label:"email"
      },
      password:{
        label:"password",
        type:"password"
      }
    },
    async authorize(credentials) {
      try{

        const user = await User.findOne({email:credentials.email})
        if(!user){
          throw new Error("No user found")
        }
        else{
          console.log("user found: ",user)
          return {name:user.email,email:user.email}
        }
      }
      catch(error){
        console.log("login error: ",error)
      }
    },   
  },
  )],
  callbacks: {
    async signIn(user, account, metadata) {

      console.log("user",user)

      if (user.provider == 'google') {
        // Here you can register or update the user in your database based on Google authentication
        try {
          connectDB();
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser =  User.create({
              email: user.email,
              image: user.image
            });
            await newUser.save();
          }
        } catch (error) {
          console.error("Error registering Google user:", error);
        }
      }
      return true; 
    }
  }
}

export const {handlers,auth,signIn,signOut} = NextAuth(config)

