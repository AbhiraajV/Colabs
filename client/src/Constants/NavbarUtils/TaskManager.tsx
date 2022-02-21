import React, { ReactElement, useState } from "react";
import OptionContainer from "./OptionContainer/OptionContainer";
import OptionDescription from "./OptionDescription/OptionDescription";
import { IoCodeWorkingSharp } from "react-icons/io5";
interface Props {}

function Tools({}: Props): ReactElement {
  const [searchDescClass, setSearchDescClass] = useState<string>("");
  return (
    <OptionContainer setSearchDescClass={setSearchDescClass}>
      <div style={{ position: "relative" }}>
        <IoCodeWorkingSharp
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            padding: "0.25rem",
            color: searchDescClass ? "var(--blue-dark)" : "",
          }}
        />
      </div>
      <OptionDescription
        backgroundColor={"var(--blue-dark)"}
        curDesc="Tasks"
        searchDescClass={searchDescClass}
      />
    </OptionContainer>
  );
}

export default Tools;
