import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}









// import { useSession } from "next-auth/react";
// import { signIn, signOut } from "next-auth/react";

// export const Appbar = () => {
//   return (
//     <div>
//       <button onClick={() => signIn()}>Sign in</button>
//       <button onClick={() => signOut()}>Sign out</button>
//     </div>
//   );
// };

// export function Details() {
//   const session = useSession();

//   console.log(session.data);
//   return <div>{JSON.stringify(session.data?.user)}</div>;
// }
