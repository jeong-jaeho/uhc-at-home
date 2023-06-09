"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isLoggedIn, setLoggedIn ] = useState(true);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  
  const signOut = () => {
    setLoggedIn(false);
    auth.signOut;
  }

  return (
    <nav className="w-full flex-between mg-16 pt-3">
      <div/>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/LOGONOBG.png"
          alt="UHC@HOME logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </Link>

      <Link
        href="/about"
        className="dropdown_link"
        onClick={() => setToggleDropdown(false)}
      >
        About
      </Link>

      <Link
        href="/contact"
        className="dropdown_link"
        onClick={() => setToggleDropdown(false)}
      >
        Contact Us
      </Link>

      <Link
        href="faq"
        className="dropdown_link"
        onClick={() => setToggleDropdown(false)}
      >
        FAQ
      </Link>
      <div/>

      {/* For Desktop navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/queue" className="black_btn">
              Queue Now
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/LOGONOBG.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
              <Link href="/sign-in">
                <button
                  type="button"
                  className="black_btn"
                >
                  Sign In
                </button>
              </Link>
              <Link href = "/sign-up">
                <button
                  type = "button"
                  className="outline_btn">
                    Sign Up
                </button>
              </Link>
          </div>
        )}
      </div>

      {/* For Mobile navigation */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/LOGONOBG.png"
              width={37}
              height={37}
              className="rounded-full"
              alt="Dropdown Menu"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/queue"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Join Queue
                </Link>

                <button
                  type="button"
                  onClick={signOut}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
                <Link href="/sign-in">
                <button
                  type="button"
                  className="black_btn"
                >
                  Sign In
                </button>
              </Link>
              <Link href = "/sign-up">
                <button
                  type = "button"
                  className="outline_btn">
                    Sign Up
                </button>
              </Link>
          </div>
        )}
      </div>
      <div />
    </nav>
  );
};

export default Nav;
