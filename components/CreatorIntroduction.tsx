import React from "react";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

interface CreatorIntroductionProps {
  name: string;
  occupation: string;
  interest: string;
  github: string;
  img: React.ReactNode;
}

const CreatorIntroduction: React.FC<CreatorIntroductionProps> = ({
  img,
  occupation,
  interest,
  github,
  name,
}) => {
  return (
    <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
      <div className="md:mt-2 md:w-1/2">{img}</div>
      <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
          Hi, I&#39;m {name}!
        </h1>
        <p className="text-lg mt-4 mb-6 md:text-2xl">
          I&#39;m a{" "}
          <span className="font-semibold text-teal-600">{occupation} </span>
          at National University of Singapore.
        </p>
        <br />I am interested in {interest}!
        <br />
        <a href={github} className="inline-block">
          <img
            src="/assets/github.png"
            width="70"
            height="70"
            className="hover:-translate-y-1 transition-transform cursor-pointer"
            alt={"Image of " + { name }}
          />
        </a>
      </div>
    </div>
  );
};

export default CreatorIntroduction;
