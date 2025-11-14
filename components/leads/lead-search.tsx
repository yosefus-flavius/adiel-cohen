'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Loader2 } from 'lucide-react';

export function LeadsSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSearch = searchParams.get('search') || '';
  const currentStatus = searchParams.get('isActive') || 'all';

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  }, 300);

  const handleStatusChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (value && value !== 'all') {
      params.set('isActive', value);
    } else {
      params.delete('isActive');
    }

    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      {/* Search Input */}
      <div className="flex-1 space-y-2">
        <Label htmlFor="search">חיפוש</Label>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search"
            type="text"
            placeholder="חפש לפי שם, אימייל, טלפון, נושא או הודעה..."
            defaultValue={currentSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="pr-10"
            dir="rtl"
          />
          {isPending && (
            <Loader2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Status Filter */}
      <div className="w-full space-y-2 sm:w-[200px]">
        <Label htmlFor="status">סטטוס</Label>
        <Select value={currentStatus} onValueChange={handleStatusChange}>
          <SelectTrigger id="status">
            <SelectValue placeholder="בחר סטטוס" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">הכל</SelectItem>
            <SelectItem value="active">פעיל</SelectItem>
            <SelectItem value="inactive">לא פעיל</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}