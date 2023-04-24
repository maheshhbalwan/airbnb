"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className="hidden cursor-pointer md:block"
      alt="Logo"
      height="100"
      width="100"
      src="/airbnb-logo.svg"
    />
  );
};

export default Logo;
