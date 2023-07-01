import React from "react";
import About from "../../components/About/About";

export default function page() {
  return (
    <main className="mx-auto max-w-full px-4 sm:px-6 ">
      <h1 className="head_text text-center pinkyellow_gradient font-inter ">
        UHC@HOME
        <br />
        <span className="greenblue_gradient">BRINGING UHC TO YOUR HOME</span>
      </h1>
      <p className="desc text-center">
        UHC@HOME is a tool that allows patients to be <br></br>
        on virtual consultations instead of <br></br>
        physically going to the University Health Center
      </p>

      {/* UHC pictures */}
      <div className="flex-between w-full mg-16 pt-3">
        <img src="/assets/uhc1.png" alt="UHC picture" class="w-1/2" />
        <img src="/assets/uhc2.png" alt="UHC logo" class="w-1/2" />
      </div>

      <br />
      <br />
      <br />
      
      <About />
    </main>
  );
}
