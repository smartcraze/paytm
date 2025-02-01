import React from "react";
import Traveloption from "./TravelOption";
import OnewayTrip from "./OnewayTrip";

function Herosection() {
  return (
    <div className="h-auto md:h-[74vh] bg-blue-100 ">
      <Traveloption />
      <div className="hidden md:block">
        <OnewayTrip />
      </div>
      
    </div>
  );
}

export default Herosection;
