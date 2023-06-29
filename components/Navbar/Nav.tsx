"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { SafeUser } from "../../app/types";
import Categories from "./Categories";
import { usePathname } from "next/navigation";

interface NavProps {
  currentUser?: SafeUser | null;
}

const Nav: React.FC<NavProps> = ({ currentUser }) => {
  return (
    <div
      className="
      fixed
      w-full
      bg-white 
      shadow-sm
    "
    >
      <div
        className="
        py-3
        border-b-[1px]
      "
      >
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <div className="flex flex-row gap-20 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/about" className="dropdown_link">
                About
              </Link>

              <Link href="/contact" className="dropdown_link">
                Contact Us
              </Link>

              <Link href="faq" className="dropdown_link">
                FAQ
              </Link>
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Nav;
