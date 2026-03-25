"use client";

import { FormEvent, useState } from "react";
import type { SiteContent } from "@/lib/content";

type ContactFormProps = {
  form: SiteContent["contactPage"]["form"];
};

export const ContactForm = ({ form }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Future integration point:
    // Send form data to an API route, CRM, or email service.
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-pine/10 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="text-2xl text-pine">{form.title}</h2>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink/80">
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition focus:border-pine"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-ink/80">
            {form.company}
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition focus:border-pine"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink/80">
            {form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition focus:border-pine"
          />
        </div>

        <div>
          <label htmlFor="country" className="mb-2 block text-sm font-semibold text-ink/80">
            {form.country}
          </label>
          <input
            id="country"
            name="country"
            required
            className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition focus:border-pine"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink/80">
            {form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 text-sm text-ink outline-none ring-0 transition focus:border-pine"
          />
        </div>

        <button
          type="submit"
          className="inline-flex rounded-full bg-pine px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-moss"
        >
          {form.submit}
        </button>
      </form>

      {submitted ? (
        <p className="mt-4 rounded-xl border border-moss/20 bg-moss/10 px-4 py-3 text-sm text-ink">
          {form.success}
        </p>
      ) : null}
    </div>
  );
};

