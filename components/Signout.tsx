"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
function Signout() {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <Button onClick={handleSignOut} className="">
      Signout
    </Button>
  );
}

export default Signout;
