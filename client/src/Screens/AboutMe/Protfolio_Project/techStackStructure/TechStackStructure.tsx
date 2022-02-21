import React, { ReactElement, useEffect, useState } from "react";
import "./techStackStructure.css";
interface Props {
  curTechStack: { img: string; desc: string }[];
}

function KwExp({ curTechStack }: Props): ReactElement {
  return (
    <div className="AboutProject">
      <b style={{ fontFamily: "var(--font-head)", fontSize: "2rem" }}>
        TECH STACK
      </b>
      {curTechStack.map((tech, index) => (
        <div className="PortfolioTechContainer">
          <div className="PortfolioTechName">
            <img src={tech.img} alt={"python"} width="80px" height="80px" />
          </div>
          <div className="PortfolioTechDesc">{tech.desc}</div>
        </div>
      ))}
      <b style={{ fontFamily: "var(--font-head)", fontSize: "2rem" }}>
        VISIT US
      </b>
      <div style={{ fontFamily: "var(--font-body)", fontSize: "1.5rem" }}>
        Under Construction👷🏻
        <br />
        {/* */}
      </div>
    </div>
  );
}

export default KwExp;
