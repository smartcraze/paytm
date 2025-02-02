import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/Signup";
import Link from "next/link";

function Signup() {
  return (
    <div className="bg-blue-100 h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center h-full">
        {/* Left Section - Logo & Text */}
        <div className="lg:w-1/2 text-left lg:pr-12 flex flex-col justify-center mb-6 lg:mb-0">
          <div className="flex justify-center lg:justify-start mb-6">
            <Image
              src="/paytm-main.svg"
              alt="Paytm Money Logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>

          <div className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6">
            Pay anyone directly <br />
            from your bank <br />
            account.
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
            Pay anyone, everywhere. Make contactless & secure payments in-stores
            or online using Paytm UPI or Directly from your Bank Account. Plus,
            send & receive money from anyone.
          </p>
          <Image
            src="/paytm-logo.svg"
            alt="Paytm Money Logo"
            width={250}
            height={250}
            className="object-cover mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <SignupForm />

          <Link href="/" className="p-2">
            <p className="text-red-500 hover:text-green-500 text-center">
              Alredy Have an account? Sign In
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
