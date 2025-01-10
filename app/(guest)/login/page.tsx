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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">כניסה למערכת ניהול</h1>
                <p className="mb-6 text-gray-600">
                    הכניסה מותרת רק למנהלים המורשים
                </p>
                <Button
                    onClick={handleGoogleLogin}
                    className="w-full"
                >
                    התחבר עם Google
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                    * רק מנהלים עם כתובות דוא״ל מורשות יכולים להתחבר
                </div>
            </div>
        </div>
    )
}
