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
      <div className="flex justify-center  items-center ">
        <h1 className="text-black text-3xl font-sans font-bold">
          Send money to your ❤️ ones
        </h1>
        <SendMoneyButton />
      </div>
    </div>
  );
}

export default Herosection;
