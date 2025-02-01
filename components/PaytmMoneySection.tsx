import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function PaytmMoneySection() {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-24 bg-[url('/pm-bg.avif')] bg-cover bg-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left lg:pr-12">
          <div className="flex  lg:justify-start mb-6">
            <Image
              src="/paytm-money.webp"
              alt="Paytm Money Logo"
              width={150}
              height={150}
              layout="intrinsic"
            />
          </div>

          <div className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6">
            Build Long-term <br />
            Wealth & Achieve your <br />
            Goals.
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8">
            Investing on Paytm Money is transparent, low-cost and
            commission-free. Buy stocks & mutual funds that can help you create
            wealth & realise your dreams.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg text-base md:text-lg transition duration-300">
            Learn More →
          </Button>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src="/mobile.avif"
            alt="Paytm Money App"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default PaytmMoneySection;
