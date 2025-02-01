"use client";
import { LoginDialog } from "@/components/Login";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Appbar />
      <Details />
    </div>
  );
}

export const Appbar = () => {
  return (
    <div>
      <LoginDialog />
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export function Details() {
  const session = useSession();

  console.log(session.data);
  return <div>{JSON.stringify(session.data?.user)}</div>;
}
