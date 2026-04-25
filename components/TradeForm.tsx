"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/form-controls";
import { trackTradeEnquirySubmitted } from "@/lib/tracking";
import { tradeSchema, type TradeInput } from "@/lib/validations";

const enquiryTypes = [
  "Training enquiry",
  "Beauty industry collaboration",
  "Product partnership",
  "Wholesale opportunity",
  "Brand collaboration",
  "Other trade enquiry",
];

export function TradeForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TradeInput>({
    resolver: zodResolver(tradeSchema),
    defaultValues: {
      website: "",
      source: "Trade page",
    },
  });

  async function onSubmit(values: TradeInput) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/trade", {
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

    trackTradeEnquirySubmitted({
      enquiry_type: values.enquiryType || undefined,
      source: values.source ?? "Trade page",
    });

    setStatus("success");
    setMessage(result.message || "Thank you. We will be in touch shortly.");
    reset({ website: "", source: "Trade page" });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="trade-website">Website</Label>
        <Input
          id="trade-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <input type="hidden" {...register("source")} value="Trade page" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="trade-name">Name</Label>
          <Input id="trade-name" autoComplete="name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessName">Business name</Label>
          <Input id="businessName" {...register("businessName")} />
          <FieldError message={errors.businessName?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="trade-email">Email</Label>
          <Input
            id="trade-email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="trade-phone">Phone</Label>
          <Input
            id="trade-phone"
            autoComplete="tel"
            placeholder="0400 000 000"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiryType">Enquiry type</Label>
        <Select id="enquiryType" {...register("enquiryType")}>
          <option value="">Select an enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <FieldError message={errors.enquiryType?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="trade-message">Message</Label>
        <Textarea
          id="trade-message"
          placeholder="Tell us about the opportunity."
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
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
        {isSubmitting ? "Sending..." : "Send Trade Enquiry"}
      </Button>
    </form>
  );
}
