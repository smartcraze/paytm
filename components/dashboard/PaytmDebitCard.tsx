import React from "react";
import Image from "next/image";
import { CreditCard, Wifi } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const PaytmDebitCard = async () => {
  const session = await getServerSession(authOptions);
  const formattedID = `000${session?.user.id}`.slice(-4);
  return (
    <div className="relative w-[350px] h-[200px] bg-gradient-to-br from-white to-gray-300 text-black font-bold rounded-2xl p-5 shadow-lg flex flex-col justify-between overflow-hidden">
      <div className="absolute -top-10 -right-6  ">
        <Image
          src="/debit-flower.png"
          alt="Decorative Flower"
          objectFit="contain"
          width={200}
          height={200}
        />
      </div>

      <div className="flex justify-between items-center relative z-10">
        <Image src="/paytm-main.svg" alt="Paytm Logo" width={60} height={40} />
        <Wifi size={24} className="text-yellow-800" />
      </div>

      <div className="relative z-10 text-black">
        <div className="w-12 h-8 bg-yellow-400 rounded-md mb-4 shadow-md flex items-center justify-center">
          <CreditCard size={20} />
        </div>
        <p className="text-lg tracking-widest font-mono">
          **** **** **** {formattedID}
        </p>
      </div>

      <div className="flex justify-between text-sm relative z-10 text-black">
        <div>
          <p className="uppercase  text-xs">Cardholder</p>
          <p className="font-bold text-base ">{session?.user.fullName}</p>
        </div>
        <div>
          <p className="uppercase  text-xs">Valid Thru</p>
          <p className="font-bold ">12/35</p>
        </div>
      </div>
    </div>
  );
};

export default PaytmDebitCard;
