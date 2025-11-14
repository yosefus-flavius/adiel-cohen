// import { formatDistanceToNow } from 'date-fns';
// import { he } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LeadDialog } from './lead-dialog';
import DeleteButton from './delete-button';

interface Lead {
  _id: string;
  email: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
  isActive: boolean;
  createdAt: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">שם</TableHead>
            <TableHead className="text-right">אימייל</TableHead>
            <TableHead className="text-right">טלפון</TableHead>
            <TableHead className="text-right">נושא</TableHead>
            <TableHead className="text-right">סטטוס</TableHead>
            <TableHead className="text-right">תאריך</TableHead>
            <TableHead className="text-right w-20">פעולות</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                אין תוצאות.
              </TableCell>
            </TableRow>
          ) : (
            leads.map((lead) => (
              <TableRow key={lead._id}>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {lead.email}
                </TableCell>
                <TableCell className="text-muted-foreground" dir="ltr">
                  {lead.phone}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {lead.subject}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={lead.isActive ? 'default' : 'secondary'}
                    className={
                      lead.isActive
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gray-500 hover:bg-gray-600'
                    }
                  >
                    {lead.isActive ? 'פעיל' : 'לא פעיל'}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {/* {formatDistanceToNow(new Date(lead.createdAt), {
                    addSuffix: true,
                    locale: he,
                  })} */}
                </TableCell>
                <TableCell className='flex gap-2'>
                     <LeadDialog lead={lead} />
                     <DeleteButton id={lead._id} isActive={lead.isActive} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Mobile View */}
      <div className="space-y-4 p-4 md:hidden">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="space-y-3 rounded-lg border bg-card p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{lead.name}</h3>
                <p className="text-sm text-muted-foreground">{lead.email}</p>
              </div>
              <Badge
                variant={lead.isActive ? 'default' : 'secondary'}
                className={
                  lead.isActive
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-500 hover:bg-gray-600'
                }
              >
                {lead.isActive ? 'פעיל' : 'לא פעיל'}
              </Badge>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground" dir="ltr">
                📞 {lead.phone}
              </p>
              <p className="font-medium">{lead.subject}</p>
              <p className="line-clamp-2 text-muted-foreground">
                {lead.message}
              </p>
              <p className="text-xs text-muted-foreground">
                {/* {formatDistanceToNow(new Date(lead.createdAt), {
                  addSuffix: true,
                  locale: he,
                })} */}
              </p>
            </div>
            <LeadDialog lead={lead} />
          </div>
        ))}
      </div>
    </div>
  );
}