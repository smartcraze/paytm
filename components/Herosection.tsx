import React from "react";
import Traveloption from "./TravelOption";
import OnewayTrip from "./OnewayTrip";
import SendMoneyButton from "./SendmoneyDialog";

function Herosection() {
  return (
    <div className="h-auto md:h-[74vh] bg-blue-100 ">
      <Traveloption />
      <div className="hidden md:block">
        <OnewayTrip />
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
        <h1 className="text-black text-3xl font-sans font-bold mb-4 md:mb-0 md:mr-4">
          Send money to your ❤️ ones
        </h1>
        <SendMoneyButton />
      </div>
    </div>
  );
}

export default Herosection;
