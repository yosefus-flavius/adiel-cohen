import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import BlogModel, { IBlog } from '@/server/blog/blog.model';
import { connectToDatabase } from '@/server/connect';
import { Edit, Eye, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminBlogList() {
    const session = await auth();

    if (!session || !session.user) {
        redirect('/login');
    }

    await connectToDatabase();
    const blogs = await BlogModel.find().sort({ date: -1 });

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">ניהול מאמרים</CardTitle>
                    <Link href="/admin/blogs/new">
                        <Button variant="outline" className="flex items-center gap-2">
                            <PlusCircle className="w-5 h-5" />
                            יצירת מאמר חדש
                        </Button>
                    </Link>
                </CardHeader>
                <CardContent className="px-0 md:px-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='text-center'>כותרת</TableHead>
                                <TableHead className='text-center hidden md:table-cell '>תאריך</TableHead>
                                <TableHead className='text-center'>פעיל</TableHead>
                                <TableHead className='text-center'>פעולות</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {blogs.map((blog: IBlog) => (
                                <TableRow className='even:bg-gray-50' key={blog._id?.toString()}>
                                    <TableCell>{blog.title}</TableCell>
                                    <TableCell className='hidden md:table-cell'>
                                        {blog.date.toLocaleDateString('he-IL', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        {blog.isActive ? 'פעיל' : 'לא פעיל'}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/admin/blogs/${blog._id}`}
                                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Edit className="w-4 h-4" />
                                                <span className='hidden sm:inline'> ערוך
                                                </span>
                                            </Link>
                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                target='_blank'
                                                className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                            >
                                                <Eye className="w-4 h-4" />
                                                <span className='hidden sm:inline'> צפה
                                                </span>
                                            </Link>
                                            {/* <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-600 hover:text-red-800 flex items-center gap-1"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                                <span className='hidden sm:inline'>
                                                    מחק
                                                </span>
                                            </Button> */}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {blogs.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            אין מאמרים קיימים. צור מאמר חדש כדי להתחיל
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}