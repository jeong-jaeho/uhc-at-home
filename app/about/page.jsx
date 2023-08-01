import React from "react";
import Card from "../../components/Card";
import CreatorIntroduction from "../../components/CreatorIntroduction";
import jaeho from "../../public/assets/jaeho.jpg";
import nat from "../../public/assets/nat.png";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const jaehoImage = (
    <Image
      src={jaeho}
      alt="picture of Jaeho"
      width={325}
      height={325}
      className="rounded-full shadow-2xl"
    />
  );
  const natImage = (
    <Image
      src={nat}
      alt="picture of Nat"
      width={325}
      height={325}
      className="rounded-full shadow-2xl"
    />
  );
  return (
    <main className="max-w-full px-6 sm:px-10">
      <div className="w-full">
        <p className="text-center text-2xl font-bold mb-10">
          About UHC@HOME
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-5">
          <div className="p-7 bg-green-300 rounded-lg">
            <p className="text-2xl font-semibold text-center pb-5">Our Mission</p>
            <p className="text-center">To empower individuals with accessible and personalized healthcare, promoting well-being and happiness.</p>
          </div>
          <div className="p-7 border border-4 border-teal-600 rounded-lg">
            <p className="text-2xl font-semibold text-center pb-5">Our Vision</p>
            <p className="text-center">Revolutionizing healthcare by delivering convenient virtual care solutions, eliminating the frustration of long queues, and making a positive impact on lives through innovation and empathy.</p>
          </div>
        </div>
        <div>
          <p className="text-center text-2xl font-bold mt-20 mb-16">
            Creators of UHC@HOME
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center space-x-10">
            <CreatorIntroduction
              name="Jaeho Jeong"
              occupation="Computer Science student"
              interest="front-end development, computer security, and database systems"
              github="https://github.com/jeong-jaeho"
              img={jaehoImage}
            />
            <CreatorIntroduction
              name="Nathanael M. Tan"
              occupation="Computer Science student"
              interest="algorithms and machine learning"
              github="https://github.com/itsNatTan"
              img={natImage}
            />
          </div>
          <div>
            <p className="text-center text-2xl font-bold mb-16">
              Learn More
            </p>
            <div className="flex justify-center">
              <div className="flex flex-cols">
                <p className="text-lg text-end p-7 font-semibold">
                  Our Project Log
                </p>
                <p className="p-7 flex">
                  To learn more about our project, please click
                  <Link
                    href="https://docs.google.com/document/d/1suMQAzlMDCM6jUfIWZu7__eeOEl6_sBdLZPNE8-vbx4/edit?usp=sharing"
                    className="text-blue-400"
                  >
                    <b>
                      <em> &nbsp;here!</em>
                    </b>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-cols">
                <p className="text-lg text-end p-7 font-semibold">
                  Our GitHub Repository
                </p>
                <p className="p-7 flex">
                  To see the code for yourself, please click
                    <a
                      href="https://github.com/itsNatTan/UHC-HOME"
                      className="text-blue-400 font-bold italic"
                    >
                      &nbsp;here!
                    </a>
                </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
