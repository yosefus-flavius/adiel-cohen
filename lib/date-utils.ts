export function formatDateDistance(date: string | Date | number): string {
   const d = new Date(date);
   const now = new Date();
   const diff = now.getTime() - d.getTime();
   const seconds = Math.floor(diff / 1000);
   const minutes = Math.floor(seconds / 60);
   const hours = Math.floor(minutes / 60);
   const days = Math.floor(hours / 24);
   const months = Math.floor(days / 30);
   const years = Math.floor(days / 365);

   if (seconds < 60) return 'לפני מספר שניות';
   if (minutes === 1) return 'לפני דקה';
   if (minutes < 60) return `לפני ${minutes} דקות`;
   if (hours === 1) return 'לפני שעה';
   if (hours < 24) return `לפני ${hours} שעות`;
   if (days === 1) return 'אתמול';
   if (days < 30) return `לפני ${days} ימים`;
   if (months === 1) return 'לפני חודש';
   if (months < 12) return `לפני ${months} חודשים`;
   if (years === 1) return 'לפני שנה';
   return `לפני ${years} שנים`;
}
