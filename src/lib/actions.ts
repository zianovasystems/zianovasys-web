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

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
  message: z.string().min(10, "Cover letter/Message must be at least 10 characters."),
});

export async function submitApplication(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = applicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    linkedin: formData.get("linkedin"),
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
    // For example: await db.collection('applications').add(validatedFields.data);
    console.log("New job application submitted:", validatedFields.data);

    return {
      success: true,
      message: "Application submitted successfully! We will review your details alongside other candidates and reply soon.",
    };
  } catch (error) {
    console.error("Error submitting application:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
