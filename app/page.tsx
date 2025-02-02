import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import SignInModal from "@/components/SignInDialog";
import { Appbar } from "@/components/Appbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Appbar />
    </div>
  );
}
