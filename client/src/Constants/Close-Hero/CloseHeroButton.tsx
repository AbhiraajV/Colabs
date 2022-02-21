import React, { ReactElement } from "react";
import "./CloseHeroButton.css";
import { BsFillArrowUpCircleFill, BsChatRightTextFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
interface Props {
  setHeroState: React.Dispatch<React.SetStateAction<"SHOW" | "HIDE">>;
  heroState: "SHOW" | "HIDE";
}

function CloseHeroButton({ setHeroState, heroState }: Props): ReactElement {
  return (
    <div className="CloseHeroButton">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={() => {
          document.body.classList.toggle("light");
          document.getElementsByClassName("Hero")[0].classList.toggle("light");
        }}
      />
      <label htmlFor="checkbox" className="label">
        <FaSun color="#f39c12" />
        <BsFillMoonStarsFill color="#f1c40f" />
        <div className="checkboxBall"></div>
      </label>
      <div
        style={{
          color: "var(--gray2)",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        className={heroState === "SHOW" ? "HeroArrow" : "HeroArrowDown"}
      >
        <Link
          to="/tasks"
          onClick={() => {
            setHeroState((prev) => {
              return prev === "SHOW" ? "HIDE" : "SHOW";
            });
          }}
        >
          <BsFillArrowUpCircleFill />
        </Link>
      </div>
      <div
        style={{
          color: "var(--gray2)",
          fontSize: "1.5rem",
        }}
      >
        <IoShareSocialSharp />
      </div>
      <div
        style={{
          color: "var(--gray2)",
          fontSize: "1.5rem",
        }}
      >
        <IoMdCall />
      </div>
      <div
        style={{
          color: "var(--gray2)",
          fontSize: "1.5rem",
        }}
      >
        <BsChatRightTextFill />
      </div>
    </div>
  );
}

export default CloseHeroButton;
