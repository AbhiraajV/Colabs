import React, { useState, useEffect } from "react";
import "./Logo.css";
import LogoBlack from "./Logo2.svg";
function NavLogo() {
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
      {/* <img src={LogoBlack} alt="Co-Lab" width={"100px"} /> */}
      <div className="Logo-Text">Colabs</div>
    </div>
  );
}

export default NavLogo;
