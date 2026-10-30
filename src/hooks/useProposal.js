import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/asset";

const fallbackError =
  "We could not send your request. Please try again or email contact@ceraccs.com.";

export function useProposal() {
  const [industry, setIndustry] = useState("corporate");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const confirmationRef = useRef(null);
  const errorRef = useRef(null);
  const startedAt = useRef(Date.now());
  const pending = useRef(false);
  const previousAttempt = useRef(null);

  useEffect(() => {
    if (isSuccess) confirmationRef.current?.focus();
    else if (error) {
      const field = formRef.current?.elements.namedItem(Object.keys(errors)[0]);
      if (typeof field?.focus === "function") field.focus();
      else errorRef.current?.focus();
    }
  }, [isSuccess, error, errors]);

  function handleChange() {
    setIsSuccess(false);
    setError("");
    setErrors({});
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    for (const [key, value] of Object.entries(data))
      if (typeof value === "string") data[key] = value.trim();
    data.startedAt = startedAt.current;
    const fingerprint = JSON.stringify(data);
    if (previousAttempt.current?.fingerprint !== fingerprint)
      previousAttempt.current = { fingerprint, requestId: crypto.randomUUID() };
    data.requestId = previousAttempt.current.requestId;
    pending.current = true;
    setIsSubmitting(true);
    setIsSuccess(false);
    setError("");
    setErrors({});
    try {
      const response = await fetch(asset("api/proposal"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setError(
          typeof result.error === "string" ? result.error : fallbackError,
        );
        setErrors(
          result.errors && typeof result.errors === "object"
            ? result.errors
            : {},
        );
        return;
      }
      form.reset();
      setIndustry("corporate");
      startedAt.current = Date.now();
      previousAttempt.current = null;
      setIsSuccess(true);
    } catch {
      setError(fallbackError);
    } finally {
      pending.current = false;
      setIsSubmitting(false);
    }
  }

  return {
    industry,
    setIndustry,
    isSubmitting,
    isSuccess,
    error,
    errors,
    handleSubmit,
    handleChange,
    formRef,
    confirmationRef,
    errorRef,
  };
}
