import SignInForm from "@/components/SignInform";
import Image from "next/image";
import Link from "next/link";

function Signin() {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Section - Info & Logo */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
          <div className="flex justify-center lg:justify-start mb-6">
            <Image
              src="/paytm-main.svg"
              alt="Paytm Money Logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Pay anyone directly <br />
            from your bank <br />
            account.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-4">
            Pay anyone, everywhere. Make contactless & secure payments in-stores
            or online using Paytm UPI or Directly from your Bank Account. Plus,
            send & receive money from anyone.
          </p>
          <div className="mt-6">
            <Image
              src="/paytm-logo.svg"
              alt="Paytm Money Logo"
              width={250}
              height={250}
              className="object-cover mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right Section - Sign In Form */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <SignInForm />

          <Link href="/signup" className="mt-4">
            <p className="text-red-500 hover:text-green-500 text-center">
              Don't have an account? Sign up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
