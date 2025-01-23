"use client";

import InputField from "@/components/ui/InputFields";
import { useRef, useState } from "react";

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const fullnameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      fullname: fullnameRef.current?.value,
      phoneNumber: phoneRef.current?.value || undefined,
    };

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message || "Sign-up successful!");
      } else {
        setMessage(result.message || "An error occurred.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputField label="Email" type="email" ref={emailRef} />
          <InputField
            label="Phone Number (optional)"
            type="text"
            ref={phoneRef}
          />
          <InputField label="Full Name" type="text" ref={fullnameRef} />
          <InputField label="Password" type="password" ref={passwordRef} />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
