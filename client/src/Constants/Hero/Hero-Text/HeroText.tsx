import React, { ReactElement, useState } from "react";
import "./HeroText.css";
import useWindowDimension from "../../../Utils/GetWidth";
import CTAToggle from "./CTA/CTAToggle";
import Arrow from "../Hero-SVG/Arrow";
import HeroSVG from "../Hero-SVG/HeroImage";
interface Props {}

function HeroText({}: Props): ReactElement {
  const curWidth = useWindowDimension();
  return (
    <div className={curWidth.width > 500 ? "Hero-Text HeroGlass" : "Hero-Text"}>
      <div
        className="Hero-Text-Main"
        style={{
          fontWeight: "800",
          color: "white",
        }}
      >
        Collaborate And Build Your
        <b style={{ marginLeft: "5px" }}>Dream Projects</b>
      </div>
      <div className="Hero-Text-CTA">
        <p
          className="hover-underline-animation"
          style={{
            fontSize: curWidth.width > 500 ? "1.2rem" : "0.8rem",
            fontWeight: "700",
            color: "white",
          }}
        >
          Organising and managing your work force has never been easier!!
          <br />{" "}
          <p
            style={{
              display: "flex",
              color: "white",
            }}
          >
            Want to get in touch?
            <Arrow />
          </p>
        </p>
        <br />
        <CTAToggle />
      </div>
      <HeroSVG />
    </div>
  );
}

export default HeroText;
