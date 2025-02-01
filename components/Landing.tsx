import React from "react";
import Herosection from "./Herosection";
import PaytmMoneySection from "./PaytmMoneySection";
import Paytmupi from "./Paytmupi";
import PaytmBussiness from "./PaytmBussiness";
import Creditcard from "./Creditcard";
import Footer from "./Footer";

function Landing() {
  return (
    <div>
      <Herosection />
      <div className="m-10 px-4 md:px-6 lg:px-8 shadow-md rounded-lg">
        <Paytmupi />
      </div>
      <div className="m-10 px-4 md:px-6 lg:px-8 shadow-md rounded-lg">
        <PaytmMoneySection />
      </div>
      <div className="m-10 px-4 md:px-6 lg:px-8 shadow-md rounded-lg">
        <PaytmBussiness />
      </div>
      <div className="m-10 px-4 md:px-6 lg:px-8 shadow-md rounded-lg">
        <Creditcard />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
