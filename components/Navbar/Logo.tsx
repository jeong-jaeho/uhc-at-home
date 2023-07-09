"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Link href={"/"}>
        <Image
          alt="Logo"
          className="hidden md:block cursor-pointer"
          height="100"
          width="100"
          src="/assets/LOGONOBG.png"
        />
      </Link>

      <Link href={"/"} className="md:hidden cursor-pointer absolute">
        <AiOutlineHome />
      </Link>
    </>
  );
};

export default Logo;
