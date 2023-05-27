"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mg-16 pt-3">
<<<<<<< HEAD
        <Link href="/" className="flex gap-2 flex-center">
            <Image
            src = "/assets/LOGONOBG.png"
            alt = "UHC@HOME logo"
            width={100}
            height={50}
            className="object-contain" />
        </Link>
        <Link
          href="/contact"
          className=""
          onClick = {() => setToggleDropdown(false)}
        >
          Contact Us
        </Link>

        <Link
          href="faq"
          className=""
          onClick = {() => setToggleDropdown(false)}
        >
          FAQ
        </Link>
=======
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
>>>>>>> bf40902e0222e99b27533163a894502cdd558ed5

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
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
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
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
