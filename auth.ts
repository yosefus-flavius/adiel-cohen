import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Comma-separated list of admin Google accounts, e.g. ADMIN_EMAILS="a@gmail.com,b@gmail.com".
// If unset, nobody can sign in (fail closed).
export const adminEmails = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    callbacks: {
        async signIn({ user }) {
            return adminEmails.includes((user.email ?? '').toLowerCase());
        },
        async session({ session }) {
            return session;
        },
        // async jwt({ token }) {
        //     return token;
        // }
    },
    // AUTH_SECRET is read from the environment by Auth.js; there is intentionally no fallback.
    trustHost: true,
})
