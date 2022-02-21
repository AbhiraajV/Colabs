import React, { ReactElement } from "react";
import "./Hero.css";
import HeroSVG from "./Hero-SVG/HeroImage";
import HeroText from "./Hero-Text/HeroText";
interface Props {}

function Hero({}: Props): ReactElement {
  return (
    <div className="Hero">
      <HeroText />
    </div>
  );
}

export default Hero;
