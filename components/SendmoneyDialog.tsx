"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export default function SendMoneyButton() {
  const [open, setOpen] = useState(false);
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !receiverId ||
      !amount ||
      isNaN(Number(amount)) ||
      Number(amount) <= 0
    ) {
      setError("Please provide valid receiver ID and amount.");
      return;
    }

    try {
      const response = await fetch("/api/transaction/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverId: Number(receiverId),
          amount: Number(amount),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Transaction successful!");
        setReceiverId("");
        setAmount("");
        setOpen(false);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while processing the transaction.");
    }
  };

  return (
    <>
      <Button className="bg-blue-700 m-12" onClick={() => setOpen(true)}>
        Send Money
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-[22rem]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-blue-700 mb-4">
              Transfer Money
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="receiverId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Receiver ID:
              </label>
              <Input
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="receiverId"
                value={receiverId}
                onChange={(e) => setReceiverId(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Amount:
              </label>
              <Input
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700  m-auto"
            >
              Send Money
            </Button>
          </form>

          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-600 mt-4 text-center">{success}</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
