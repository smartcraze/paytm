import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SendMoneyForm() {
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

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
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while processing the transaction.");
    }
  };

  return (
    <div className="bg-gray-600 p-4 shadow-md rounded-md">
      <h1>Send Money</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="receiverId">Receiver ID:</label>
          <input
            className="bg-gray-800"
            type="text"
            id="receiverId"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            className="bg-gray-800"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
