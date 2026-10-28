"use client";

import { Fragment, useState, type FormEvent } from "react";
import { LINKEDIN_URL, RESEARCHGATE_URL } from "@/data/site";

type Field = "name" | "email" | "subject" | "message";
type Errors = Record<Field, string>;

const INPUTS = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "subject", label: "Subject", type: "text" },
] as const;

function validate(data: FormData): Errors {
  const value = (field: Field) => String(data.get(field) ?? "").trim();
  return {
    name: value("name") ? "" : "Enter your name.",
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value("email")) ? "" : "Enter a valid email address.",
    subject: value("subject") ? "" : "Enter a subject.",
    message: value("message").length >= 10 ? "" : "Enter a message of at least 10 characters.",
  };
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Errors>>({});
  const [status, setStatus] = useState<"valid" | "invalid" | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = validate(new FormData(e.currentTarget));
    setErrors(result);
    setStatus(Object.values(result).some(Boolean) ? "invalid" : "valid");
  }

  return (
    <form id="cf" noValidate onSubmit={handleSubmit}>
      {INPUTS.map((input) => (
        <Fragment key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <input id={input.id} name={input.id} type={input.type} aria-describedby={`e-${input.id}`} />
          <div className="err" id={`e-${input.id}`}>
            {errors[input.id]}
          </div>
        </Fragment>
      ))}
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={5} aria-describedby="e-message" />
      <div className="err" id="e-message">
        {errors.message}
      </div>
      <button className="btn p" type="submit" style={{ marginTop: 12 }}>
        Send message
      </button>
      <div role="status">
        {status === "valid" && (
          <div className="msg">
            Your details look valid, but this site isn’t connected to an email service yet, so
            nothing was sent. Please reach out via{" "}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">
              LinkedIn
            </a>{" "}
            or{" "}
            <a href={RESEARCHGATE_URL} target="_blank" rel="noopener">
              ResearchGate
            </a>{" "}
            for now.
          </div>
        )}
        {status === "invalid" && <div className="msg">Fix the highlighted fields and try again.</div>}
      </div>
    </form>
  );
}
