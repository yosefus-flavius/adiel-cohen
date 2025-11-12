import { auth } from '@/auth';
import { adminLinks } from '@/components/layout/admin-navbar';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Admin() {
    const session = await auth();

    if (!session || !session.user) {
        redirect('/login');
    }

    return (
        <main className='container mx-auto px-4 py-4'>
            <section className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-6">גישה מהירה</h2>
                <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
                    {adminLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="focus:outline-hidden focus:ring-2 focus:ring-primary rounded-lg"
                        >
                            <Card className="flex w-28 aspect-square justify-center flex-col items-center gap-3 
                  font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg
                  hover:text-primary">
                                <span className="text-2xl" aria-hidden="true">{link.icon}</span>
                                <span>{link.name}</span>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
