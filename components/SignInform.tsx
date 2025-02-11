"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/zodSchema/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setServerError(result.error);
    } else {
      setSuccessMessage("Login successful! Redirecting...");
      reset();
      setTimeout(() => router.push("/dashboard"), 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto w-[20rem] bg-white p-6 rounded-lg shadow-md mt-10 shadow-blue-700">
      <h2 className="text-2xl font-sans font-bold text-center mb-4">Sign In</h2>

      {serverError && <p className="text-red-500 text-center">{serverError}</p>}
      {successMessage && (
        <p className="text-green-500 text-center">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="example@mail.com"
            className="border-black"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <Input
            type="password"
            placeholder="********"
            className="border-black"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
