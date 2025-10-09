"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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

      if (response.ok && result.success) {
        toast.success("Email sent successfully!");
        reset();
      } else {
        toast.error(result.error);
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while sending the email. Please try again.",
      );
    }
  };

  return (
    <div className="flex flex-col min-w-full place-items-center pt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full md:max-w-lg items-center mb-10"
      >
        <legend className="text-4xl sm:text-5xl text-center mb-8 sm:mb-16">
          Send me an email
        </legend>
        <fieldset className="flex flex-col gap-8 w-full">
          <div>
            <label htmlFor="from">From</label>
            <input type="email" id="from" {...register("from")} />
            {errors.from && <p className="errMsg">{errors.from.message}</p>}
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" {...register("subject")} />
            {errors.subject && (
              <p className="errMsg">{errors.subject.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="min-h-40"
              {...register("message")}
            />
            {errors.message && (
              <p className="errMsg">{errors.message.message}</p>
            )}
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-20 self-end hover:shadow-md mt-6"
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </form>
      <p className="text-center">
        You can also reach me directly via email at{" "}
        <Link href={`mailto:${toEmail}`} className="link">
          {toEmail}
        </Link>
        .
      </p>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
}
