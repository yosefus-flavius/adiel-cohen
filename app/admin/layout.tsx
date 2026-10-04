import AdminNavbar from '@/components/layout/admin-navbar'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ניהול',
    robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}
