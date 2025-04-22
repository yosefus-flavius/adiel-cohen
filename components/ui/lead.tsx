'use client'

import { sendEmail } from '@/actions/emails';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Button } from './button';
import { Card } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

const formFields = [
   {
      id: 'email',
      name: 'email',
      label: 'אימייל',
      type: 'email',
      placeholder: 'אימייל...',
      required: true,
      component: Input
   },
   {
      id: 'name',
      name: 'name',
      label: 'שם',
      type: 'text',
      placeholder: 'שם...',
      minLength: 2,
      required: true,
      component: Input
   },
   {
      id: 'phone',
      name: 'phone',
      label: 'טלפון',
      type: 'text',
      placeholder: 'טלפון...',
      pattern: '^[0-9]{9,10}$',
      required: true,
      component: Input
   },
   {
      id: 'subject',
      name: 'subject',
      label: 'נושא',
      type: 'text',
      placeholder: 'נושא...',
      minLength: 3,
      required: true,
      component: Input
   },
   {
      id: 'message',
      name: 'message',
      label: 'הודעה',
      placeholder: 'הודעה...',
      rows: 4,
      minLength: 10,
      required: true,
      component: Textarea
   }
];

export default function Lead() {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      try {
         const response = await sendEmail(data as any);
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
      <Card className="max-w-[600px] mx-auto p-6 h-[610px]">
         {isSubmitted ? (
            <div className="flex h-full items-center justify-center bg-green-50 border border-green-200 rounded-lg">
               <p className="text-green-700 text-lg font-medium text-center">
                  תודה! ניצור קשר בקרוב.
               </p>
            </div>
         ) : (
            <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-between">
               <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-center">שלח עכשיו</h3>

                  {formFields.map((field) => {
                     const Component = field.component;
                     return (
                        <div key={field.id}>
                           <Label htmlFor={field.id}>{field.label}</Label>
                           <Component
                              id={field.id}
                              name={field.name}
                              type={field.type}
                              placeholder={field.placeholder}
                              required={field.required}
                              pattern={field.pattern}
                              minLength={field.minLength}
                              rows={field.rows}
                           />
                        </div>
                     );
                  })}
               </div>

               <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white font-semibold"
               >
                  {isLoading ? 'שולח...' : 'התחל עכשיו'}
               </Button>
            </form>
         )}
         <Toaster />
      </Card>
   );
}