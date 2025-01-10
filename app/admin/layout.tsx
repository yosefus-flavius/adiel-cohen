import AdminNavbar from '@/components/layout/admin-navbar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}
