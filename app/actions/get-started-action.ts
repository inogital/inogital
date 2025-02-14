"use server";

import { z } from "zod";
import sendMail from "@/lib/send-mail";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().max(500),
  services: z.string().min(1),
});

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, "1 h"), // Increased limit to 10 per hour
  analytics: true,
});

export async function submitForm(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, message: "Invalid form data" };
  }

  const { name, email, phone, message, services } = result.data;

  // Get IP address
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "unknown";

  // Implement rate limiting
  const identifier = `${ip}:${email}`; // Composite key of IP and email
  const { success, limit, reset, remaining } = await ratelimit.limit(
    identifier
  );

  if (!success) {
    return {
      success: false,
      message: `Too many requests. Please try again in ${Math.ceil(
        (reset - Date.now()) / 1000 / 60
      )} minutes.`,
    };
  }

  try {
    const res = await sendMail({
      subject: `New Form Submission from ${name}`,
      to: "info@inogital.com",
      text: `${name} with email address ${email} and phone number ${phone} requested ${services} service with the following message: ${message}\n\nSubmitted from IP: ${ip}`,
    });

    if (res === "ok") {
      return {
        success: true,
        message: "Form submitted successfully",
        remaining: remaining,
      };
    } else {
      return { success: false, message: "Error sending email" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Internal server error" };
  }
}
