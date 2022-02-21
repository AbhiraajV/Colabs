import React from "react";
import frontend from "./frontend2.svg";
import backend from "./backend.svg";
type Props = {};

function SkillsCards({}: Props) {
  return (
    <div
      className="SkillsCardAboutMe"
      style={{
        justifyContent: "flex-start",
      }}
    >
      <img src={frontend} alt="Front End" className="SkillsCardLeft" />
      {/* <img src={backend} alt="Back End" className="SkillsCardBottom" /> */}
      <div className="SkillsCardHead">Frontend Skills</div>
    </div>
  );
}

export default SkillsCards;
