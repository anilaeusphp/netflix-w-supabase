import Image from "next/image";
import { ReactNode } from "react";
import backgroundImage from "@/public/login_background.jpg";
import logo from "@/public/netflix_logo.svg";
function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-screen flex flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
        priority
      />
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 objec-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}

export default AuthLayout;
