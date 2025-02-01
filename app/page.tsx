"use client";
import Traveloption from "@/components/TravelOption";
import Navbar from "@/components/Navbar";
import SendMoneyForm from "@/components/Transaction";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Herosection from "@/components/Herosection";
import PaytmMoneySection from "@/components/PaytmMoneySection";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <div className="m-10 px-4 md:px-6 lg:px-8 shadow-md rounded-lg">
        <PaytmMoneySection />
      </div>
      <Appbar />
      <Details />
      <SendMoneyForm />
    </div>
  );
}

export const Appbar = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export function Details() {
  const session = useSession();

  console.log(session.data);
  return <div>{JSON.stringify(session.data?.user)}</div>;
}
