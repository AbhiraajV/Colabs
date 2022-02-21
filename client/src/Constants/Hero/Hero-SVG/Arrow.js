import React, { useEffect } from "react";
import ArrowSVG from "./point.png";
function Arrow() {
  useEffect(() => {
    console.log(document.body.classList);
  }, [document.body.classList]);
  return (
    <img
      src={ArrowSVG}
      alt={"CTA"}
      style={{
        // position: "absolute",
        display: "block",
        maxWidth: "150px",
        maxHeight: "100px",
        // width: "auto",
        // height: "auto",
        transform: "rotate(210deg)",
        // transition: "left 500ms ease-in-out",
        // left: "60%",
        // color: "black",
      }}
    />
  );
}

export default Arrow;
