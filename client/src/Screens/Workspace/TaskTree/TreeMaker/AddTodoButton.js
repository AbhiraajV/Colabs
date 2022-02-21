import React from "react";
import { BiAddToQueue } from "react-icons/bi";
function AddTodoButton() {
  return (
    <>
      <div className="createButtonStyle">
        <BiAddToQueue size={"1.5rem"} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.2rem",
          left: "15.6rem",
          color: "white",
          background: "var(--pink-dark)",
          width: "20px",
          height: "20px",
          fontSize: "13px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        0
      </div>
    </>
  );
}

export default AddTodoButton;
