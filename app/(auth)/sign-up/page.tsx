import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "@/public/google.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function SignUp() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-10 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            className="w-full bg-[#e50914] text-white hover:text-black hover:font-bold"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm flex items-center gap-1 mt-10">
        Already have an account?{" "}
        <Link className="hover:underline text-white" href={"/login"}>
          Login in now!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant={"outline"} size={"icon"}>
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image
            src={GoogleIcon}
            alt="google-logo"
            className="h-6 w-6 inline-block"
          />
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
