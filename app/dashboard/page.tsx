import Image from "next/image";
import PaytmDebitCard from "@/components/dashboard/PaytmDebitCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Wallet, ArrowDownLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import Signout from "@/components/Signout";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="container bg-slate-950 min-h-screen text-white p-6 md:p-10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome, {session?.user?.fullName || "John Doe"}
          </h1>
        </div>
        <Image
          src="/paytm-logo.svg"
          width={150}
          height={150}
          alt="Paytm Logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="flex flex-wrap gap-6 text-lg items-center mt-4">
        <p className="flex items-center gap-2">
          <BadgeCheck size={20} className="text-yellow-500" />
          <span className="text-gray-500">ID:</span> PAYTM
          {session?.user?.id || "89745"}
        </p>
        <p className="flex items-center gap-2">
          <Wallet size={20} className="text-blue-500" />
          <span className="text-gray-500">Total Balance:</span> ₹
          {session?.user?.wallet?.balance}
        </p>
        <p className="flex items-center gap-2">
          <ArrowDownLeft size={20} className="text-green-500" />
          <span className="text-gray-500">Money Received:</span> ₹
          {session?.user?.received || "28,500"}
        </p>
        <p className="flex items-center gap-2">
          <ArrowUpRight size={20} className="text-red-500" />
          <span className="text-gray-500">Money Sent:</span> ₹
          {session?.user?.sent || "12,800"}
        </p>
        <Signout />
      </div>
      <TransactionHistory />
    </div>
  );
}
