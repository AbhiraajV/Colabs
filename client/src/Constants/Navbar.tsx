import React, { ReactElement } from "react";
import "./Navbar.css";
import About from "./NavbarUtils/About";
import TaskManager from "./NavbarUtils/TaskManager";
import Tools from "./NavbarUtils/Tools";
import Private from "./NavbarUtils/Private";
import Logo from "./NavbarUtils/Logo/logo";
import { Link, useLocation } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import useWindowDimension from "../Utils/GetWidth";
import { HeroStateType } from "../Common/Types";
interface Props {
  setHeroState: React.Dispatch<React.SetStateAction<HeroStateType>>;
}

function Navbar({ setHeroState }: Props): ReactElement {
  const isLogged = localStorage.getItem("user");
  const width = useWindowDimension().width;
  const location = useLocation();
  return (
    <div
      className="navbar"
      style={
        location.pathname == "/"
          ? {
              backgroundColor: "var(--gray5)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="navbar-logo">
        <Logo />
      </div>

      <div className="navbar-options-container">
        <div className="navbar-options">
          <Link
            to="/tasks"
            onClick={() => {
              setHeroState((prev) => {
                return {
                  ...prev,
                  tasks: "SHOW",

                  about: "HIDE",
                  join: "HIDE",
                };
              });
            }}
          >
            <TaskManager />
          </Link>
        </div>
        <div
          className="navbar-options"
          onClick={() => {
            setHeroState((prev) => {
              return {
                ...prev,
                about: "SHOW",

                tasks: "HIDE",
                join: "HIDE",
              };
            });
          }}
        >
          <About />
        </div>
        {!isLogged && (
          <div className="navbar-options">
            <Link
              to="/join"
              onClick={() => {
                setHeroState((prev) => {
                  return {
                    ...prev,

                    tasks: "HIDE",
                    about: "HIDE",
                    join: "SHOW",
                  };
                });
              }}
            >
              <Private />
            </Link>
          </div>
        )}
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={() => {
            document.body.classList.toggle("light");
            document
              .getElementsByClassName("Hero")[0]
              .classList.toggle("light");
          }}
        />
        <label htmlFor="checkbox" className="label">
          <FaSun color="#f39c12" />
          <BsFillMoonStarsFill color="#f1c40f" />
          <div className="checkboxBall"></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
