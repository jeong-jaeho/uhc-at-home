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
          Learn more about UHC@HOME
        </p>
        <div className="flex flex-row justify-center text-center gap-4 sm:gap-8 md:gap-14 lg:gap-20">
          <Card
            header="Our Motivations"
            content={<div className="text-sm">Queue too long :(</div>}
            hasButton={false}
          ></Card>
          <Card
            header="Our Project Log"
            content={
              <div className="text-sm">
                To learn more about our project, please click
                <Link
                  href="https://docs.google.com/document/d/1suMQAzlMDCM6jUfIWZu7__eeOEl6_sBdLZPNE8-vbx4/edit?usp=sharing"
                  className="text-blue-400"
                >
                  <b>
                    <em> here!</em>
                  </b>
                </Link>
              </div>
            }
            hasButton={false}
          ></Card>
          <Card
            header="Our GitHub Repo"
            content={
              <div className="text-sm">
                To see the code for yourself, please click
                <Link
                  href="https://github.com/itsNatTan/UHC-HOME"
                  className="text-blue-400"
                >
                  <b>
                    <em> here!</em>
                  </b>
                </Link>
              </div>
            }
            hasButton={false}
          ></Card>
        </div>
        <p className="text-center text-2xl font-bold mt-20">
          Creators of UHC@HOME
        </p>
        <div className="flex flex-row justify-items-center space-x-10">
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
      </div>
    </main>
  );
}
