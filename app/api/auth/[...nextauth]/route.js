import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import db from "@/app/api/server";
const users = db.collection('users')

const authOptions = NextAuth({
  providers: [
    //Normal Authentication
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = req.body

        const user = await users.findOne({ email: username });

        if (user && await bcrypt.compare(password, user.password)) {
          console.log(user)
          return user;
        }
        else {
          console.log("user not found")
          return;
        }
      },
    }),
    //Google Authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),


  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const existUser = await users.findOne({email: profile.email})

        if(!existUser) {
          const newUser = await users.insertOne(profile)
          return newUser;
        }
      }
      return existUser; 
    },
    async jwt({ token, user, session }) {
      console.log("jwt: " + token, user, session)
      if (user) {
        return {
          ...token,
          fiderating: user.fiderating,
          mobilenum: user.mobilenum
        }
      }
      return token
    },
    async session({ token, user, session }) {
      console.log("session: " + token, user, session)
      return {
        ...session,
        user: {
          ...session.user,
          fiderating: token.fiderating,
          mobilenum: token.mobilenum
        }
      }
    },
  },
  pages: {
    signIn: "/",
    signOut: "/"
  },
})

export { authOptions as GET, authOptions as POST }