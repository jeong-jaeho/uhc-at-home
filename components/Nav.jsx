"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [isLoggedIn, setLoggedIn ] = useState(true);

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }, []);

  const signOutTest = () => {
    setLoggedIn(!isLoggedIn);
    alert(isLoggedIn);
  }

  return (
    <nav className="flex-between w-full mg-16 pt-3">
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

      {/* For Desktop navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/queue" className="black_btn">
              Queue Now
            </Link>

            <button type="button" onClick={signOutTest} className="outline_btn">
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
          
                <button
                  type="button"
                  onClick={signOutTest}
                  className="black_btn"
                >
                  Sign In
                </button>
                <button
                  type = "button"
                  onClick ={alert("You have tried to sign up")}
                  className="outline_btn">
                    Sign Up
                </button>
              
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
                  onClick={() => {
                    setToggleDropdown(false);
                    signOutTest();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
                <button
                  type="button"
                  onClick={signOutTest}
                  className="black_btn"
                >
                  Sign In
                </button>
                <button
                  type = "button"
                  onClick ={alert("You have tried to sign up")}
                  className="outline_btn">
                    Sign Up
                </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
