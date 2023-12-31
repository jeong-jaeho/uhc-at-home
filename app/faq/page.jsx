import React from "react";
import FaqCard from "../../components/FaqCard";

const faq = () => {
  return (
    <div className="w-full flex flex-col px-20 gap-3">
      <p className="text-center text-2xl font-bold mb-10">
        FAQs
      </p>
      <FaqCard header="Pricing" />
      <FaqCard header="Services" />
      <div className="flex-center w-full mg-16 pt-3">
        {" "}
        For more information about UHC,
        <a
          href="https://nus.edu.sg/uhc/resources/faq/faq"
          className="text-blue-500"
        >
          <b>
            <em>&nbsp;click here!</em>
          </b>
        </a>
      </div>
    </div>
  );
};

export default faq;
