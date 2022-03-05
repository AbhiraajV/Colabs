import { CgLogOut } from "react-icons/cg";
import React, { ReactElement, useState } from "react";
import OptionContainer from "./OptionContainer/OptionContainer";
import OptionDescription from "./OptionDescription/OptionDescription";
interface Props {}

function Logout({}: Props): ReactElement {
  const [searchDescClass, setSearchDescClass] = useState<string>("");
  return (
    <OptionContainer setSearchDescClass={setSearchDescClass}>
      <div style={{ position: "relative" }}>
        <CgLogOut
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            padding: "0.25rem",
            color: searchDescClass ? "var(--red-light)" : "",
          }}
        />
      </div>
      <OptionDescription
        backgroundColor={"var(--red-light)"}
        curDesc="Logout"
        searchDescClass={searchDescClass}
      />
    </OptionContainer>
  );
}

export default Logout;
