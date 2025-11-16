'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Mail, Phone, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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

interface LeadDialogProps {
  lead: Lead;
}

export function LeadDialog({ lead }: LeadDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-(--background)" dir="rtl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <DialogTitle className="text-2xl">{lead.name}</DialogTitle>
              <DialogDescription>{lead.subject}</DialogDescription>
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
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">אימייל</p>
                <p className="truncate font-medium">{lead.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">טלפון</p>
                <p className="font-medium" dir="ltr">
                  {lead.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">תאריך יצירה</p>
              <p className="font-medium">
               { new Date(lead.createdAt || '').toISOString()}
              </p>
            </div>
          </div>

          <Separator />

          {/* Message */}
          <div className="space-y-3">
            <h3 className="font-semibold">הודעה</h3>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {lead.message}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() => (window.location.href = `mailto:${lead.email}`)}
            >
              <Mail className="ml-2 h-4 w-4" />
              שלח אימייל
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => (window.location.href = `tel:${lead.phone}`)}
            >
              <Phone className="ml-2 h-4 w-4" />
              התקשר
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}