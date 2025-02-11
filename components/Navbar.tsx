"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CircleUserRound, Download } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import SignInModal from "./SignInDialog";
const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-white  shadow-md shadow-blue-100 ">
      <div className=" mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center pl-4 ">
          <Image
            src="/paytm-logo.svg"
            
            width={150}
            height={150}
            alt="Paytm Logo"
            className="h-8"
          />
        </div>

        <nav className="hidden md:flex gap-6 pl-0 font-sans font-medium text-black">
          <Link href="/ticket-booking">
            <p className=" ">Ticket Booking</p>
          </Link>
          <Link href="/recharge-bills">
            <p className="">Recharge & Bills</p>
          </Link>
          <Link href="/payments-services">
            <p className="">Payments & Services</p>
          </Link>
          <Link href="/paytm-business">
            <p className="">Paytm for Business</p>
          </Link>
          <Link href="/paytm-business">
            <p className="">Paytm for Business</p>
          </Link>
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center space-x-4 font-sans font-medium ">
          <Button variant="ghost" className=" font-sans text-blue-700 ">
            <Download />
            Download App
          </Button>

          {session ? (
            <Link href="/dashboard">
              <Button
                variant="default"
                className="font-sans font-medium rounded-full bg-blue-700 text-white"
              >
                <CircleUserRound />
                Profile
              </Button>
            </Link>
          ) : (
            <SignInModal />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
