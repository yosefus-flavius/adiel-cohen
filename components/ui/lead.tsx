'use client'

import { sendEmail } from '@/actions/emails';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Button } from './button';
import { Card } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

export default function Lead() {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get('email') as string;
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const subject = formData.get('subject') as string;
      const message = formData.get('message') as string;

      try {
         const response = await sendEmail({ email, name, phone, subject, message });
         if (response.success) {
            setIsSubmitted(true);
         } else {
            toast.error('שירות לא זמין כעת, נסה שנית מאוחר יותר');
         }
      } catch (err) {
         toast.error('שירות לא זמין כעת, נסה שנית מאוחר יותר');
      } finally {
         setIsLoading(false);
      }
   };



   return (
      <Card className='h-[550px] max-w-[600px] p-4 mx-auto'>
         {isSubmitted ? (
            <div className="p-4 h-full flex items-center justify-center bg-green-50 border border-green-200 rounded-lg">
               <p className="text-green-700 text-center">
                  תודה! ניצור קשר בקרוב.
               </p>
            </div>
         ) : (
            <form
               onSubmit={handleSubmit}
               className="space-y-4"
            >
               <h3 className='text-center text-2xl mt-4 font-bold'>שלח עכשיו</h3>
               <div>
                  <Label htmlFor="email">אימייל</Label>
                  <Input
                     type="email"
                     name="email"
                     placeholder=" אימייל... "
                     required
                  />
               </div>
               <div>
                  <Label htmlFor="name">שם</Label>
                  <Input
                     type="text"
                     name="name"
                     placeholder="שם... "
                     required
                  />
               </div>
               <div>
                  <Label htmlFor="phone">טלפון</Label>
                  <Input
                     type="text"
                     name="phone"
                     placeholder="טלפון... "
                     required
                  />
               </div>
               <div>
                  <Label htmlFor="subject">נושא</Label>
                  <Input
                     type="text"
                     name="subject"
                     placeholder="נושא... "
                     required
                  />
               </div>
               <div>
                  <Label htmlFor="message">הודעה</Label>
                  <Textarea
                     name="message"
                     placeholder="הודעה... "
                     required
                  />
               </div>
               <Button
                  type="submit"
                     disabled={isLoading}
                     className='w-full'
               >
                  {isLoading ? 'שולח...' : 'התחל עכשיו'}
               </Button>
            </form>
         )}
         <Toaster />
      </Card>
   );
}