"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitApplication, type FormState } from "@/lib/actions";

const applicationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
    message: z.string().min(10, "Cover letter/Message must be at least 10 characters."),
});

type FormData = z.infer<typeof applicationSchema>;

export function CareerForm() {
    const { toast } = useToast();
    const initialState: FormState = { success: false, message: "" };
    const [state, formAction] = useActionState(submitApplication, initialState);

    const form = useForm<FormData>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            linkedin: "",
            message: "",
        },
    });

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.success ? "Success!" : "Error",
                description: state.message,
                variant: state.success ? "default" : "destructive",
            });
            if (state.success) {
                form.reset();
            }
        }
    }, [state, toast, form]);

    return (
        <Form {...form}>
            <form action={formAction} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91 98765 43210" type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>LinkedIn Profile / Portfolio URL (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="https://linkedin.com/in/johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cover Letter / Additional Details</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us about your experience and why you want to join us..." {...field} rows={6} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                    Submit Application
                </Button>
            </form>
        </Form>
    );
}
