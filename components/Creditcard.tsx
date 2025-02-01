import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Creditcard() {
  return (
    <div
      className="bg-cover bg-center bg-white py-12 md:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/credit-bg.avif')",
        backgroundSize: "cover",
        borderRadius: "10px",
      }}
    >
      <div className="md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 flex flex-col justify-center items-center lg:items-start">
          <Image
            src="/credit-logo.png"
            alt="Credit Card"
            width={200}
            height={200}
            className="lg:block mx-auto"
          />

          <div className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            One destination for Credit Cards
          </div>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            Paytm HDFC, SBI & Axis Bank Credit Card with assured Cashback and
            incredible offers.
          </p>

          <div className="flex gap-5 justify-center items-center lg:items-start space-y-4">
            <Button className="bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold rounded-lg text-base md:text-lg transition duration-300">
              Apply Now →
            </Button>

            <Image
              src="/bank-logo.avif"
              alt="SBI Logo"
              width={200}
              height={200}
            />
          </div>

          <Image
            src="/credit-stack.avif"
            alt="Card Stack"
            width={500}
            height={500}
            className="lg:block mx-auto"
          />
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center"></div>
      </div>
    </div>
  );
}

export default Creditcard;
