import Signout from "@/components/Signout";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="p-8 bg-gray-800 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        {session ? (
          <div className="text-lg text-gray-300 space-y-3">
            <p>
              <span className="font-semibold text-blue-400">Name:</span>{" "}
              {session.user.fullName || "Not provided"}
            </p>
            <p>
              <span className="font-semibold text-blue-400">id:</span>{" "}
              {session.user.id || "Not provided"}
            </p>
            <p>
              <span className="font-semibold text-blue-400">Email:</span>{" "}
              {session.user.email}
            </p>
            <p>
              <span className="font-semibold text-blue-400">
                Wallet Balance:
              </span>{" "}
              ${session.user.wallet?.balance ?? "0"}
            </p>
          </div>
        ) : (
          <p className="text-red-400">No session data found.</p>
        )}

        <div className="mt-6">
          <Link
            href={"/"}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all rounded-full text-white font-semibold"
          >
            Go to Profile
          </Link>
          <Signout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
