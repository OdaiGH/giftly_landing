"use client";

import { FormEvent, useState } from "react";
import { Locale } from "./SiteChrome";

export function AndroidInterestForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/android-interest", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!response.ok) throw new Error("submission_failed");
      setSubmitted(true);
    } catch {
      setError(
        ar
          ? "تعذر إرسال طلبك الآن. حاول مرة أخرى بعد قليل."
          : "We couldn’t send your request. Please try again shortly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <p className="android-interest-success" role="status">
        {ar ? "تم! سنبلغك فور إطلاق نسخة Android." : "Done! We’ll let you know as soon as Android launches."}
      </p>
    );
  }

  return (
    <form className="android-interest-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="android-contact">
        {ar ? "بريدك الإلكتروني أو رقم جوالك" : "Your email or phone number"}
      </label>
      <input
        id="android-contact"
        name="contact"
        required
        placeholder={ar ? "بريدك الإلكتروني أو رقم جوالك" : "Your email or phone number"}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? (ar ? "جارٍ الإرسال..." : "Sending...") : (ar ? "أبلغني عند التوفر" : "Notify me")}
      </button>
      {error && (
        <p className="form-error android-interest-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
