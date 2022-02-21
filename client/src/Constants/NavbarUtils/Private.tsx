import { AiFillLock } from "react-icons/ai";
import React, { ReactElement, useState } from "react";
import OptionContainer from "./OptionContainer/OptionContainer";
import OptionDescription from "./OptionDescription/OptionDescription";
interface Props {}

function Tools({}: Props): ReactElement {
  const [searchDescClass, setSearchDescClass] = useState<string>("");
  return (
    <OptionContainer setSearchDescClass={setSearchDescClass}>
      <div style={{ position: "relative" }}>
        <AiFillLock
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            padding: "0.25rem",
            color: searchDescClass ? "var(--orange-light)" : "",
          }}
        />
      </div>
      <OptionDescription
        backgroundColor={"var(--orange-light)"}
        curDesc="Join"
        searchDescClass={searchDescClass}
      />
    </OptionContainer>
  );
}

export default Tools;
