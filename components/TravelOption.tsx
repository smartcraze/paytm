import Image from "next/image";
import Link from "next/link";
import React from "react";

function Traveloption() {
  const details = [
    { href: "#", src: "/flight.svg", label: "Flights" },
    { href: "#", src: "/bus.svg", label: "Bus" },
    { href: "#", src: "/train.svg", label: "Trains" },
    { href: "#-flights", src: "/flight-int.svg", label: "Intl. Flights" },
  ];

  return (
    <div className="container py-8 w-full">
      <div className="flex flex-wrap justify-between items-center mx-4 md:mx-10 space-x-6 md:space-x-10">
        <div className="flex flex-nowrap justify-between items-center w-full md:w-auto space-x-6">
          {details.map((item, index) => (
            <Link href={item.href} key={index} className="w-auto">
              <div className="group flex items-center justify-center md:justify-start px-4 py-2 relative w-full">
                <Image
                  src={item.src}
                  width={24}
                  height={24}
                  alt={`${item.label} logo`}
                  className="w-6 h-6 md:w-5 md:h-5"
                />
                <span className="ml-2 text-sm md:text-base">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="mt-6 md:mt-0 hidden md:block">
          <Image
            src="/Paytm_Travel_Logo.svg"
            width={120}
            height={120}
            alt="Paytm Logo"
            className="w-32 md:w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default Traveloption;
