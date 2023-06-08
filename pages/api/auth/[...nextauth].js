import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

async function userInDb(user) {
  await setDoc(doc(db, "users", user.user.email), {
    userData: {
      name: user.user.name,
      email: user.user.email,
      image: user.user.image,
    },
    applications: [],
  });
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  callbacks: {
    async signIn(user) {
      await userInDb(user);
      return true;
    },
  },
};
export default NextAuth(authOptions);
