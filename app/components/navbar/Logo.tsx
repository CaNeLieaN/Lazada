"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/1600px-Lazada_(2019).svg.png"
      height="200"
      width="200"
      alt="Logo"
    />
  );
};

export default Logo;
