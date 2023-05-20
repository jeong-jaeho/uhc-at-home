"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders} from "next-auth/react";


const Nav = () => {
  return (
    <nav className="flex-between w-full mg-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image
            src = "/assets/LOGONOBG.png"
            alt = "UHC@HOME logo"
            width={250}
            height={50}
            className="object-contain" />
        </Link>

    </nav>
  )
}

export default Nav