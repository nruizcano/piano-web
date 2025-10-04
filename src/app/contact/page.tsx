"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";

const emailSchema = z.object({
  from: z.email("Please enter a valid email address."),
  subject: z.string().min(1, "Please enter a subject."),
  message: z
    .string()
    .min(10, "Please enter a message that is at least 10 characters long."),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function ContactPage() {
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    try {
      const response = await fetch("/api/maileroo/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: data.from,
          to: toEmail,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      toast.success("Email sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the email.");
    }
  };

  return (
    <div className="flex flex-col min-w-full place-items-center pt-8 sm:pt-0">
      <h1 className="text-4xl sm:text-6xl mb-8 sm:mb-16">Send me an email</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full lg:max-w-lg"
      >
        <div>
          <span>
            <label htmlFor="from">From</label>
            {errors.from && <p className="errMsg">{errors.from.message}</p>}
          </span>
          <input type="email" id="from" {...register("from")} />
        </div>
        <div>
          <span>
            <label htmlFor="subject">Subject</label>
            {errors.subject && (
              <p className="errMsg">{errors.subject.message}</p>
            )}
          </span>
          <input type="text" id="subject" {...register("subject")} />
        </div>
        <div>
          <span>
            <label htmlFor="message">Message</label>
            {errors.message && (
              <p className="errMsg">{errors.message.message}</p>
            )}
          </span>
          <textarea id="message" className="min-h-40" {...register("message")} />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[var(--accent)] px-4 py-2 rounded-xs min-w-fit w-20 text-sm cursor-pointer self-end"
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </form>
      <p className="mt-12 text-center">
        You can also reach me directly via email at{" "}
        <Link href={`mailto:${toEmail}`} className="link">
          {toEmail}
        </Link>
        .
      </p>
      <ToastContainer />
    </div>
  );
}
