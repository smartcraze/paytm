"use client";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormData = {
  phoneNumber: string;
  amount: number;
};

export default function SendMoneyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data: FormData) => {
    setSuccess(false);
    setServerError("");

    try {
      const response = await fetch("/api/transaction/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: data.phoneNumber,
          amount: Number(data.amount),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        reset();
      } else {
        setServerError(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setServerError("An error occurred while processing the transaction.");
    }
  };

  if (success) {
    return (
      <div className="text-center p-6">
        <TransactionSuccess />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 bg-white  md:p-3 rounded-xl shadow-lg max-w-md w-[22rem] mx-auto border border-gray-200"
    >
      <h1 className="text-black text-center text-lg font-sans font-bold">
        Transer Money
      </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <Input
          type="text"
          {...register("phoneNumber", { required: "Phone number is required" })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.phoneNumber && (
          <p className="text-red-600 text-sm mt-1">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <Input
          type="number"
          {...register("amount", {
            required: "Amount is required",
            min: { value: 1, message: "Amount must be greater than 0" },
          })}
          className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        {errors.amount && (
          <p className="text-red-600 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>

      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
        Send Money
      </Button>

      {serverError && (
        <p className="text-red-600 mt-4 text-center">{serverError}</p>
      )}
    </form>
  );
}

export function TransactionSuccess() {
  return (
    <div className="text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
      <p className="text-green-600 mt-4 text-lg font-semibold">
        Transaction Successful!
      </p>
    </div>
  );
}
