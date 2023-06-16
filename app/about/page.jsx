import React from "react";
import DisplayItem from "../../components/DisplayItem";
import "./About.css";

function About() {
  return (
    <section className="font-inter">
      <br />
      <h1 className="flex-center">Creators of UHC@HOME</h1>
          <DisplayItem
            key="m1"
            id="m1"
            image="/assets/jaeho.jpg"
            title="Jaeho Jeong" 
          />
          <DisplayItem
            key="m2"
            id="m2"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            title="Nathanael M. Tan"
          />
    </section>
  );
}

export default About;
