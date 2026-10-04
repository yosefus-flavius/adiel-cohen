"use server"
import { contactInfo } from '@/lib/data/contact';
import { connectToDatabase } from '@/server/connect';
import LeadModel from '@/server/lead/lead.model';
// send email with node mailer from contact us page

import nodemailer from 'nodemailer';

interface LeadInput {
   name: string;
   phone: string;
   email?: string;
   message?: string;
   subject?: string;
}

export async function sendEmail(input: LeadInput) {
   const name = (input.name ?? '').trim();
   const phone = (input.phone ?? '').trim();
   const email = (input.email ?? '').trim();
   const message = (input.message ?? '').trim();
   const subject = (input.subject ?? '').trim() || 'פנייה מהאתר';

   // Only name and phone are required; email and message are optional.
   if (name.length < 2 || !/^[0-9+\-\s]{9,15}$/.test(phone)) {
      return { success: false, message: 'Invalid input' };
   }

   try {
      await connectToDatabase();
      const lead = await LeadModel.create({ name, email, message, subject, phone });

      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
         }
      });

      const mailOptions = {
         from: email || process.env.EMAIL_USER,
         ...(email ? { replyTo: email } : {}),
         to: contactInfo.email,
         subject: `הודעה חדשה מהאתר שלנו 😎 מ ${name}`,
         text: `
         שם: ${name}
         טלפון: ${phone}
         אימייל: ${email || 'לא צוין'}
         נושא: ${subject}
         הודעה: ${message || 'ללא הודעה'}
         `
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully', result, lead);
      return { success: true, message: 'Email sent successfully' };
   } catch (error) {
      console.error(error);
      return { success: false, message: 'Email not sent' };
   }
}
