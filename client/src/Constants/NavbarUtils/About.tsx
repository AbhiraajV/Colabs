import React, { ReactElement, useState } from "react";
import OptionContainer from "./OptionContainer/OptionContainer";
import OptionDescription from "./OptionDescription/OptionDescription";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-router-dom";
interface Props {}

function About({}: Props): ReactElement {
  const [searchDescClass, setSearchDescClass] = useState<string>("");
  return (
    <OptionContainer setSearchDescClass={setSearchDescClass}>
      <div style={{ position: "relative" }}>
        <Link to="/about">
          <SiAboutdotme
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              padding: "0",
              color: searchDescClass ? "var(--green)" : "",
            }}
          />
        </Link>
      </div>
      <OptionDescription
        backgroundColor={"var(--green)"}
        curDesc="About"
        searchDescClass={searchDescClass}
      />
    </OptionContainer>
  );
}

export default About;
