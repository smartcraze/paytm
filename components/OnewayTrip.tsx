"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

function OnewayTrip() {
  const [fromCity, setFromCity] = useState("Delhi (DEL)");
  const [toCity, setToCity] = useState("Mumbai (BOM)");
  const [passengers, setPassengers] = useState("1 Traveller, Economy");

  const cities = [
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Bangalore (BLR)",
    "Chennai (MAA)",
    "Kolkata (CCU)",
  ];
  const passengerOptions = [
    "1 Traveller, Economy",
    "2 Travellers, Business",
    "1 Traveller, Premium Economy",
  ];
  const [selectedFare, setSelectedFare] = useState(null);

  const fares = [
    { name: "Armed Forces", discount: "Up to ₹600 off" },
    { name: "Student", benefit: "Extra Baggage" },
    { name: "Senior Citizen", discount: "Up to ₹600 off" },
  ];

  return (
    <div className="h-auto w-[93%] flex m-auto bg-white p-4 rounded-lg border-[1px] border-gray-400 flex-col relative  ">
      <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1 md:mb-0"
            htmlFor="from"
          >
            From:
          </label>
          <select
            id="from"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full md:w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1 md:mb-0"
            htmlFor="to"
          >
            To:
          </label>
          <select
            id="to"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-full md:w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1 md:mb-0"
            htmlFor="depart"
          >
            Depart:
          </label>
          <input
            type="date"
            id="depart"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Wed, 05 Feb 25"
          />
        </div>

        <div className="relative w-full md:w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1 md:mb-0"
            htmlFor="return"
          >
            Return:
          </label>
          <input
            type="date"
            id="return"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add Return"
          />
        </div>

        <div className="relative w-full md:w-1/4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1 md:mb-0"
            htmlFor="passengers"
          >
            Passenger & Class:
          </label>
          <select
            id="passengers"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            {passengerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 absolute right-4 bottom-4 md:relative md:bottom-auto md:right-auto md:mt-4">
          Search
        </Button>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Special Fares (optional):
        </label>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {fares.map((fare, index) => (
            <button
              key={index}
              className={`border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 flex items-center ${
                selectedFare === fare.name ? "bg-blue-100 border-blue-500" : ""
              }`}
              onClick={() => setSelectedFare(fare.name)}
            >
              <span className="mr-2">{fare.name}</span>
              {fare.discount && <span>{fare.discount}</span>}
              {fare.benefit && <span>{fare.benefit}</span>}
            </button>
          ))}

          <div className="mt-2 md:mt-0 flex items-center">
            <span className="text-green-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                />
              </svg>
              Extra Savings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnewayTrip;
