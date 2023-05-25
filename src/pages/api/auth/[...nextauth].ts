import NextAuth from "next-auth";
// import { FirestoreAdapter } from "@next-auth/firebase-adapter";
// import { cert } from "firebase-admin/app";
import GoogleProvider from "next-auth/providers/google";

import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
