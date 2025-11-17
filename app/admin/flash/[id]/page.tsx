import { auth } from '@/auth';
import { connectToDatabase } from '@/server/connect';
import FlashModel, { IFlash } from '@/server/flash/flash.model';
import { redirect } from 'next/navigation';
import FlashForm from './flash-form';


async function getFlash(id: string) {
    await connectToDatabase();
    return await FlashModel.findById(id);
}

export default async function FlashEditPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session) {
        redirect('/login');
    }
    const { id } = await params;

    let flash: IFlash | null = id !== 'new' ? await getFlash(id) : null;

    if (flash) {
        flash = JSON.parse(JSON.stringify(flash));
    }

    return (
        <div className="container mx-auto p-4">
            <FlashForm flash={flash} />
        </div>
    );
}