import React from "react";
import SkillsCards from "./SkillsCards";
import "./SkillsAboutMe.css";
import skills from "./skills.svg";
type Props = {};

function SkillsAboutMe({}: Props) {
  return (
    <div className="AboutMeSkills">
      {/* <img src={skills} width={"30%"} className="AboutMeSkillsHeader" /> */}
      <div className="AboutMeCardsHolder">
        <SkillsCards />
        <SkillsCards />
        <SkillsCards />
      </div>
    </div>
  );
}

export default SkillsAboutMe;
