"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function Login() {

    const handleGoogleLogin = async () => {
        await signIn('google', {
            callbackUrl: '/admin'
        })
    }
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-background px-4">
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-card-foreground shadow-sm">
                <h1 className="text-2xl font-bold mb-4">כניסה למערכת ניהול</h1>
                <p className="mb-6 text-muted-foreground">
                    הכניסה מותרת רק למנהלים המורשים
                </p>
                <Button
                    onClick={handleGoogleLogin}
                    className="w-full"
                >
                    התחבר עם Google
                </Button>
                <div className="mt-4 text-sm text-muted-foreground">
                    * רק מנהלים עם כתובות דוא״ל מורשות יכולים להתחבר
                </div>
            </div>
        </main>
    )
}
