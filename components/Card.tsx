import React from "react";
import { useState } from "react";

interface CardProps {
  header: string;
  content: React.ReactNode;
  hasButton: boolean;
  button?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, content, hasButton, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="justify-center text-center p-6 font-inter text-xs bg-grey-light sm:text-lg md:text-xl hover:bg-grey-dark rounded-xl w-56 h-[100%]">
      {/* Header */}
      <div
        className="pb-1"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {header}
      </div>
      {/* OnClick - Rest pops up */}
      {isOpen && (
        <div>
          <hr className="pb-4" />
          <div>{content}</div>
        </div>
      )}
      {/* Button - If there is */}
      {hasButton && <div>{button}</div>}
    </div>
  );
};

export default Card;
