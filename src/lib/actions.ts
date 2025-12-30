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
import nodemailer from "nodemailer";

// ... existing imports

// ... existing schema

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

  const { name, email, message } = validatedFields.data;

  try {
    const port = Number(process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: port,
      // secure: true for 465, false for other ports
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipient = "shaik.m.rafi@zianovasys.com";
    const subject = `New Inquiry from ${name} - Zianova Website`;
    const emailBody = `
      <h3>New Inquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // specific check for missing env vars to avoid attempting connection
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn("⚠️ SMTP settings not missing in environment variables. Falling back to console log.");
      console.log(`--- [SIMULATION] Sending Email ---`);
      console.log(`To: ${recipient}`);
      console.log(`Subject: ${subject}`);
      console.log(`Body: ${emailBody}`);
      console.log(`--- [SIMULATION] End ---`);
    } else {
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`, // sender address
        to: recipient, // receiver
        replyTo: email,
        subject: subject, // Subject line
        html: emailBody, // html body
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // plain text body
      });
      console.log(`Email sent successfully to ${recipient}`);
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    };
  } catch (error: any) {
    console.error("Error sending email:", error);

    let errorMessage = "Failed to send email.";
    if (error.responseCode === 535) {
      errorMessage = "Authentication failed. Please check your SMTP Password (use an App Password for Gmail).";
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
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
