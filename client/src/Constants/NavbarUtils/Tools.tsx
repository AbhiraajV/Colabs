import React, { ReactElement, useState } from "react";
import OptionContainer from "./OptionContainer/OptionContainer";
import OptionDescription from "./OptionDescription/OptionDescription";
import { FaTools } from "react-icons/fa";
interface Props {}

function Tools({}: Props): ReactElement {
  const [searchDescClass, setSearchDescClass] = useState<string>("");
  return (
    <OptionContainer setSearchDescClass={setSearchDescClass}>
      <div style={{ position: "relative" }}>
        <FaTools
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            padding: "0.25rem",
            color: searchDescClass ? "var(--pink)" : "",
          }}
        />
      </div>
      <OptionDescription
        backgroundColor={"var(--pink)"}
        curDesc="Tools"
        searchDescClass={searchDescClass}
      />
    </OptionContainer>
  );
}

export default Tools;
