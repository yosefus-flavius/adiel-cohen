import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { connectToDatabase } from '@/server/connect';
import FlashModel, { IFlash } from '@/server/flash/flash.model';
import { Edit, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminflashList() {
    const session = await auth();

    if (!session || !session.user) {
        redirect('/login');
    }

    await connectToDatabase();
    const flashes = await FlashModel.find().sort({ createdAt: -1 });

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">ניהול ידיעות</CardTitle>
                    <Link href="/admin/flash/new">
                        <Button variant="outline" className="flex items-center gap-2">
                            <PlusCircle className="w-5 h-5" />
                            יצירת ידיעה חדשה
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
                            {flashes.map((flash: IFlash) => (
                                <TableRow className='even:bg-muted/50' key={flash._id?.toString()}>
                                    <TableCell>{flash.title}</TableCell>
                                    <TableCell className='hidden md:table-cell'>
                                        {flash.createdAt.toLocaleDateString('he-IL', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        {flash.isActive ? 'פעיל' : 'לא פעיל'}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/admin/flash/${flash._id}`}
                                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                            >
                                                <Edit className="w-4 h-4" />
                                                <span className='hidden sm:inline'> ערוך
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
                    {flashes.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                            אין ידיעות קיימות צור ידיעה חדשה כדי להתחיל
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}