import React, { ReactElement, useState } from "react";
import "./AboutMe.css";
import AboutMeDesc from "./Description/AboutMeDesc";
import Portfolio from "./Protfolio_Project/Portfolio";
import PortfolioTouchSlider from "./Protfolio_Project/TouchSlider/PortfolioTouchSlider";
import SkillsAboutMe from "./Skills/SkillsAboutMe";
interface Props {}
function About({}: Props): ReactElement {
  const [showProj, setShowProj] = useState<"NO" | "KW_EXP" | "CO_LABS">("NO");
  return (
    <div className="AboutMe">
      <Portfolio showProj={showProj} setShowProj={setShowProj} />
      <div className="MainAboutContainer">
        <AboutMeDesc />
        <PortfolioTouchSlider setShowProj={setShowProj} />
      </div>

      {/* <SkillsAboutMe /> */}
    </div>
  );
}

export default About;
