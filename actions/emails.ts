"use server"
import { contactInfo } from '@/lib/data/contact';
import { connectToDatabase } from '@/server/connect';
import LeadModel from '@/server/lead/lead.model';
// send email with node mailer from contact us page

import nodemailer from 'nodemailer';

export async function sendEmail({ name, email, message, subject ,phone}: { name: string, email: string, message: string, subject: string, phone: string }) {
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
         from: email,
         to: contactInfo.email,
         subject: `הודעה חדשה מהאתר שלנו 😎 מ ${name}`,
         text: `
         שם: ${name}
         אימייל: ${email}
         נושא: ${subject}
         הודעה: ${message}
         טלפון: ${phone}
         `
      };

      await transporter.sendMail(mailOptions);
      return { success: true, message: 'Email sent successfully' };
   } catch (error) {
      console.error(error);
      return { success: false, message: 'Email not sent' };
   }
}


