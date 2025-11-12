// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const authHeader = request.headers.get('authorization')
    
    if (authHeader !== `Bearer ${process.env.REVALIDATE_TOKEN}`) {
        return Response.json({ message: 'Invalid token' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')

    if (!path) {
        return Response.json({ message: 'Path is required' }, { status: 400 })
    }

    try {
        revalidatePath(path)
        return Response.json({ revalidated: true })
    } catch (err: any) {
        console.error(err)
        return Response.json({ message: 'Error revalidating' }, { status: 500 })
    }
}