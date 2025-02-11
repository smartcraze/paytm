"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

interface Transaction {
  id: number;
  senderId: number;
  receiverId: number;
  amount: number;
  type: string;
  status: string;
  createdAt: string;
  receiver: { fullName: string };
  sender: { fullName: string };
}

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserAndTransactions = async () => {
      try {
        const session = await getSession();
        if (!session?.user?.id) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }
        setUserId(session.user.id);

        const response = await fetch("/api/transaction");
        const data = await response.json();
        if (response.ok) {
          setTransactions(data.data);
        } else {
          setError(data.message || "Failed to fetch transactions");
        }
      } catch (err) {
        setError("Error fetching transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndTransactions();
  }, []);

  return (
    <div className="container bg-slate-950 min-h-screen text-white p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      {loading ? (
        <p className="text-gray-400">Loading transactions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : transactions.length === 0 ? (
        <p className="text-gray-400">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 border border-gray-700">Transaction ID</th>
                <th className="p-3 border border-gray-700">Details</th>
                <th className="p-3 border border-gray-700">User ID</th>
                <th className="p-3 border border-gray-700">Amount</th>
                <th className="p-3 border border-gray-700">Status</th>
                <th className="p-3 border border-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const isSent = transaction.senderId === userId;
                const transactionPartner = isSent
                  ? transaction.receiver.fullName
                  : transaction.sender.fullName;
                const transactionPartnerId = isSent
                  ? transaction.receiverId
                  : transaction.senderId;

                return (
                  <tr
                    key={transaction.id}
                    className="border border-gray-700 text-gray-300"
                  >
                    {/* Transaction ID */}
                    <td className="p-3 border border-gray-700">
                      {transaction.id}
                    </td>

                    {/* To / From Information */}
                    <td
                      className={`p-3 border border-gray-700 ${
                        isSent ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {isSent
                        ? `To: ${transactionPartner}`
                        : `From: ${transactionPartner}`}
                    </td>

                    {/* User ID - Now Fixed */}
                    <td className="p-3 border border-gray-700 text-gray-400">
                      {transactionPartnerId}
                    </td>

                    {/* Amount - Colored */}
                    <td
                      className={`p-3 border border-gray-700 font-bold ${
                        isSent ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {isSent ? "- ₹" : "+ ₹"}
                      {transaction.amount}
                    </td>

                    {/* Status */}
                    <td
                      className={`p-3 border border-gray-700 ${
                        transaction.status === "COMPLETED"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {transaction.status}
                    </td>

                    {/* Date */}
                    <td className="p-3 border border-gray-700">
                      {new Date(transaction.createdAt).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
