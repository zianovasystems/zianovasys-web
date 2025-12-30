"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  success: boolean;
  message: string;
};

// This is a mock action. In a real app, you would connect to Firebase here.
export async function submitInquiry(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = inquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message:
        validatedFields.error.errors.map((e) => e.message).join(", ") ||
        "An unexpected error occurred.",
    };
  }

  try {
    // Here you would save the data to Firestore.
    // For example: await db.collection('inquiries').add(validatedFields.data);
    console.log("New inquiry submitted:", validatedFields.data);

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
