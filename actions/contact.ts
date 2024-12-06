"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "שם חייב להכיל לפחות 2 תווים",
  }),
  phone: z.string().min(9, {
    message: "מספר טלפון לא תקין",
  }),
  email: z.string().email({
    message: "כתובת אימייל לא תקינה",
  }),
  message: z.string().min(10, {
    message: "ההודעה חייבת להכיל לפחות 10 תווים",
  }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validate the data
    const validatedData = formSchema.parse(data);

    // Here you would typically send the data to your backend
    // For now, we'll just log it
    console.log("Form submission:", validatedData);

    return { 
      message: "ההודעה נשלחה בהצלחה!", 
      errors: null 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        message: "אנא תקן את השגיאות", 
        errors: error.flatten().fieldErrors 
      };
    }
    return { 
      message: "אירעה שגיאה בשליחת הטופס", 
      errors: null 
    };
  }
}
