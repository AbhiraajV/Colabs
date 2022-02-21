import React from "react";
import "./Logo.css";
import Logo from "./Logo1.svg";
function NavLogo() {
  console.log(Logo);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-head)",
        color: "white",
        fontSize: "xx-large",
      }}
      className="Logo"
    >
      <img src={Logo} alt="Co-Lab" width={"100px"} />
      <div className="Logo-Text">Colabs</div>
    </div>
  );
}

export default NavLogo;
