import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import CreateTodoSubmissionFuntion from "./CreateTodoSubmissionFuntion";
import "./CreateTodoButtonStyle.css";
function CreateTodoButton() {
  return (
    <>
      <div
        className="createButtonStyle"
        onClick={CreateTodoSubmissionFuntion()}
      >
        <FaCodeBranch />
      </div>
      <div className="createTodoCount">12</div>
    </>
  );
}

export default CreateTodoButton;
