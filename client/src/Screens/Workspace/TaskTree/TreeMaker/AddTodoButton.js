import React from "react";
import { BiAddToQueue } from "react-icons/bi";
function AddTodoButton() {
  return (
    <>
      <div className="createButtonStyle">
        <BiAddToQueue size={"1.5rem"} />
      </div>
    </>
  );
}

export default AddTodoButton;
