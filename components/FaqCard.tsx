"use client";
import React from "react";
import { useState } from "react";

interface FaqCardProps {
  header: string;
  content: React.ReactNode[];
}

const FaqCard: React.FC<FaqCardProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="justify-center text-center p-6 font-inter text-xs bg-grey-light sm:text-lg md:text-xl hover:bg-grey-dark rounded-xl w-full h-[100%] my-2"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {/* Header */}
      <div className="pb-1">{header}</div>
      {/* OnClick - Rest pops up */}
      {isOpen && (
        <div>
          <hr className="pb-4" />
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
