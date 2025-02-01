import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function Paytmupi() {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-24 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left lg:pr-12">
          <div className="flex  lg:justify-start mb-6">
            <Image
              src="/paytm-logo.svg"
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
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg text-base md:text-lg transition duration-300">
            Download
          </Button>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src="/upi.avif"
            alt="Paytm Money App"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Paytmupi;
