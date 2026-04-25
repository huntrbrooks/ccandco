import { z } from "zod";

const phoneRegex = /^(\+?61|0)?[\s-]?[2-478](?:[\s-]?\d){8}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), {
      message: "Please enter a valid Australian phone number.",
    }),
  message: z.string().min(10, "Please include a little more detail."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
  source: z.string().optional(),
});

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().refine((value) => phoneRegex.test(value), {
    message: "Please enter a valid Australian phone number.",
  }),
  preferredService: z.string().min(1, "Please choose a preferred service."),
  preferredDate: z.string().min(1, "Please choose a preferred date."),
  preferredTime: z.string().min(1, "Please choose a preferred time."),
  clientType: z.enum(["New client", "Returning client"], {
    error: "Please select whether you are a new or returning client.",
  }),
  notes: z.string().max(1000, "Please keep notes under 1000 characters.").optional(),
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm you consent to be contacted about your request.",
  }),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
  source: z.string().optional(),
});

export const tradeSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  businessName: z.string().min(2, "Please enter your business name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), {
      message: "Please enter a valid Australian phone number.",
    }),
  enquiryType: z.string().min(1, "Please choose an enquiry type."),
  message: z.string().min(10, "Please include a little more detail."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
  source: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
export type TradeInput = z.infer<typeof tradeSchema>;
