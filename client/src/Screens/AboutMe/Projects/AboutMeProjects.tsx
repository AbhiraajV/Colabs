import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { IoArrowUndoSharp, IoShareSocialSharp } from "react-icons/io5";
import VanillaTilt from "vanilla-tilt";
import "./AboutMeProjects.css";
interface Props {
  setShowProj: React.Dispatch<
    React.SetStateAction<"NO" | "KW_EXP" | "CO_LABS">
  >;
  projTitle: string;
  projDesc: string;
  projStack: string;
  curProj: string;
}

function AboutMeProjects({
  setShowProj,
  projTitle,
  projDesc,
  projStack,
  curProj,
}: Props): ReactElement {
  const tilt = useRef(null);
  useEffect(() => {
    if (tilt) {
      console.log(tilt.current);
      VanillaTilt.init(tilt.current!);
    }
  }, [tilt]);
  return (
    <div className="AboutGlassContainer">
      <div className="AboutGlassCard" ref={tilt}>
        <div className="AboutGlassContentBox">
          <h1>{curProj}</h1>
          <h3 style={{ textAlign: "center" }}>{projTitle}</h3>
          <p>
            <b style={{ fontSize: "15px", textAlign: "center" }}>{projDesc}</b>
          </p>
          <h5 style={{ textAlign: "center" }}>{projStack}</h5>
          <div
            className="ProjReadMore"
            onClick={() => {
              setShowProj(() => {
                if (projTitle === "Co-Labs") {
                  return "CO_LABS";
                }
                return "KW_EXP";
              });
            }}
          >
            Read More
          </div>
          <ul className="ProjIcons">
            <li className="pjI-1">
              <a>
                <IoArrowUndoSharp />
              </a>
            </li>
            <li className="pjI-2">
              <a href="">
                <IoShareSocialSharp />
              </a>
            </li>
            <li className="pjI-3">
              <a href="">
                <AiOutlineLink />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMeProjects;
