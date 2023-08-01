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
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 pb-16 md:flex-row md:space-x-4">
      <div className="mb-7">{img}</div>
      <div className="md:mt-2 md:w-3/5">
        <h1 className="text-2xl font-bold">
          Hi, I&#39;m {name}!
        </h1>
        <p className="mt-4 mb-6">
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
