"use client";
import Traveloption from "@/components/TravelOption";
import Navbar from "@/components/Navbar";
import SendMoneyForm from "@/components/SendmoneyDialog";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Landing from "@/components/Landing";
import Creditcard from "@/components/Creditcard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
      {/* <Appbar />
      <Details /> */}
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
