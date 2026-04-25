"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/form-controls";
import { services } from "@/lib/services";
import { trackBookingRequestSubmitted } from "@/lib/tracking";
import { bookingSchema, type BookingInput } from "@/lib/validations";

type BookingFormProps = {
  defaultServiceSlug?: string;
};

export function BookingForm({ defaultServiceSlug }: BookingFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      preferredService: defaultServiceSlug || "",
      clientType: "New client",
      consent: false,
      website: "",
      source: "Book Now page",
    },
  });

  async function onSubmit(values: BookingInput) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try again.");
      return;
    }

    trackBookingRequestSubmitted({
      preferred_service_slug: values.preferredService || undefined,
      client_type: values.clientType,
      has_preferred_date: Boolean(values.preferredDate),
      has_preferred_time: Boolean(values.preferredTime),
      source: values.source ?? "Book Now page",
    });

    setStatus("success");
    setMessage(result.message || "Thank you. We will be in touch shortly.");
    reset({
      preferredService: defaultServiceSlug || "",
      clientType: "New client",
      consent: false,
      website: "",
      source: "Book Now page",
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="booking-website">Website</Label>
        <Input
          id="booking-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <input type="hidden" {...register("source")} value="Book Now page" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" autoComplete="name" {...register("fullName")} />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-email">Email</Label>
          <Input
            id="booking-email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-phone">Phone</Label>
          <Input
            id="booking-phone"
            autoComplete="tel"
            placeholder="0400 000 000"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredService">Preferred service</Label>
          <Select id="preferredService" {...register("preferredService")}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </Select>
          <FieldError message={errors.preferredService?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred date</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
          <FieldError message={errors.preferredDate?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferredTime">Preferred time</Label>
          <Input id="preferredTime" type="time" {...register("preferredTime")} />
          <FieldError message={errors.preferredTime?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientType">Client type</Label>
          <Select id="clientType" {...register("clientType")}>
            <option>New client</option>
            <option>Returning client</option>
          </Select>
          <FieldError message={errors.clientType?.message} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          placeholder="Tell us about your goals, availability or any questions."
          {...register("notes")}
        />
        <FieldError message={errors.notes?.message} />
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-5 w-5 rounded border-input text-primary focus:ring-ring"
          {...register("consent")}
        />
        <div>
          <Label htmlFor="consent">
            I consent to CC & CO. contacting me about this booking request.
          </Label>
          <FieldError message={errors.consent?.message} />
        </div>
      </div>

      {message ? (
        <p
          className={
            status === "success"
              ? "rounded-2xl bg-green-50 p-4 text-sm font-medium text-green-800"
              : "rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-800"
          }
        >
          {message}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Booking Request"}
      </Button>
    </form>
  );
}
