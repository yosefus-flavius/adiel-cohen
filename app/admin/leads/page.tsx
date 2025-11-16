import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { connectToDatabase } from '@/server/connect';
import LeadModel from '@/server/lead/lead.model';
import { LeadsSearch } from '@/components/leads/lead-search';
import { LeadsTable } from '@/components/leads/lead-table';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getLeads(search: string = '', isActive: string = 'all') {
  await connectToDatabase();

  const query: any = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
      { phone: { $regex: search, $options: 'i' } },
      { subject: { $regex: search, $options: 'i' } },
      { message: { $regex: search, $options: 'i' } },
    ];
  }

  if (isActive !== 'all') {
    query.isActive = isActive === 'active';
  }

  const leads = await LeadModel.find(query)
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  return leads.map((lead) => ({
    _id: (lead._id as string).toString(),
    email: lead.email,
    name: lead.name,
    phone: lead.phone,
    subject: lead.subject,
    message: lead.message,
    isActive: lead.isActive ?? true,
    createdAt: lead.createdAt ? new Date(lead.createdAt).toISOString() : new Date().toISOString(),
  }));
}

export default async function LeadsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = typeof params.search === 'string' ? params.search : '';
  const isActive = typeof params.isActive === 'string' ? params.isActive : 'all';

  const leads = await getLeads(search, isActive);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8" dir="rtl">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">ניהול לידים</h1>
          <p className="text-muted-foreground">
            צפייה וניהול של כל הפניות והלידים שהתקבלו במערכת
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <div className="text-2xl font-bold">{leads.length}</div>
            <p className="text-sm text-muted-foreground">סך הכל לידים</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="text-2xl font-bold text-green-600">
              {leads.filter((l) => l.isActive).length}
            </div>
            <p className="text-sm text-muted-foreground">לידים פעילים</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="text-2xl font-bold text-gray-600">
              {leads.filter((l) => !l.isActive).length}
            </div>
            <p className="text-sm text-muted-foreground">לידים לא פעילים</p>
          </div>
        </div>

        {/* Search & Filter */}
        <Suspense fallback={<Skeleton className="h-12 w-full" />}>
          <LeadsSearch />
        </Suspense>

        {/* Table */}
        <div className="rounded-lg border bg-card">
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <LeadsTable leads={leads} />
          </Suspense>
        </div>

        {leads.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-12 text-center">
            <p className="text-lg font-semibold">לא נמצאו לידים</p>
            <p className="text-sm text-muted-foreground">
              נסה לשנות את פרמטרי החיפוש
            </p>
          </div>
        )}
      </div>
    </div>
  );
}