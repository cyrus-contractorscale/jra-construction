"use client";

import { FormEvent, useState } from "react";

const initial = {
  name: "",
  email: "",
  phone: "",
  workType: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <label className="sr-only" htmlFor="contact-name">
        Full Name
      </label>
      <input
        id="contact-name"
        required
        name="name"
        autoComplete="name"
        value={values.name}
        onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        className="h-10 rounded-md border border-zinc-200 bg-zinc-50 px-3 text-[13px] text-zinc-900 outline-none transition focus:border-[#0f2744]"
        placeholder="Full Name*"
      />

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        required
        type="email"
        name="email"
        autoComplete="email"
        value={values.email}
        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        className="h-10 rounded-md border border-zinc-200 bg-zinc-50 px-3 text-[13px] text-zinc-900 outline-none transition focus:border-[#0f2744]"
        placeholder="Email*"
      />

      <label className="sr-only" htmlFor="contact-phone">
        Phone
      </label>
      <input
        id="contact-phone"
        type="tel"
        name="phone"
        autoComplete="tel"
        value={values.phone}
        onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        className="h-10 rounded-md border border-zinc-200 bg-zinc-50 px-3 text-[13px] text-zinc-900 outline-none transition focus:border-[#0f2744]"
        placeholder="Phone*"
      />

      <label className="sr-only" htmlFor="contact-work-type">
        Type of work
      </label>
      <select
        id="contact-work-type"
        name="workType"
        value={values.workType}
        onChange={(e) => setValues((v) => ({ ...v, workType: e.target.value }))}
        className="h-10 rounded-md border border-zinc-200 bg-zinc-50 px-3 text-[13px] text-zinc-500 outline-none transition focus:border-[#0f2744]"
      >
        <option value="">Type of Work?</option>
        <option value="custom-home">Custom Home</option>
        <option value="renovation">Renovation</option>
        <option value="extension">Extension</option>
      </select>

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        required
        name="message"
        rows={3}
        value={values.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        className="resize-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-[13px] text-zinc-900 outline-none transition focus:border-[#0f2744]"
        placeholder="Give as much detail as possible*"
      />

      <button
        type="submit"
        className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#c40303] text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#a80202]"
      >
        Submit
      </button>
      {submitted ? (
        <p className="text-center text-[12px] font-medium text-emerald-700" role="status">
          Thanks, we&apos;ll reach out shortly.
        </p>
      ) : null}
    </form>
  );
}
