import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextResponse } from "next/server";

export const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const {email, name, image} = user;

      if (account.provider === "google") {

        try {
          await fetch("http://localhost:3000/api/v1/users/", {
            method: "POST",
            body: JSON.stringify({
              email,
              name,
              image
            }),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          
          return user;
        }
        catch(err) {
          throw new Error(err);
        }
      }
    }
  }
})

export { authOptions as GET, authOptions as POST };