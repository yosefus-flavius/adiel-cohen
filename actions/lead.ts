"use server"
import { auth } from "@/auth";
import { connectToDatabase } from "@/server/connect";
import LeadModel from "@/server/lead/lead.model";
import { revalidatePath } from "next/cache";



export async function deleteLead(fd: FormData) {
   const session = await auth();
   if (!session) {
      throw new Error('Unauthorized');
   }
   const _id = fd.get('id');
   await connectToDatabase();
   const old = await LeadModel.findById(_id);
   await LeadModel.findByIdAndUpdate(_id, { isActive: !old.isActive  });
   revalidatePath('/admin/leads')
}