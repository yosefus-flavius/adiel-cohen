import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const adminEmails = ['yosalsoni@gmail.com', 'adielcohenproj@gmail.com', 'ac37278461@gmail.com', 'adil7278461@gmail.com'];

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    callbacks: {
        async signIn({ user }) {
            // Add your admin email addresses here
            return adminEmails.includes(user.email ?? '');
        },
        async session({ session, token }) {
            return session;
        },
        async jwt({ token }) {
            return token;
        }
    }
})

