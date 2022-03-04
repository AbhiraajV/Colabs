import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import CreateTodoSubmissionFuntion from "./CreateTodoSubmissionFuntion";
import "./CreateTodoButtonStyle.css";
function CreateTodoButton({ count }) {
  return (
    <>
      <div
        className="createButtonStyle"
        onClick={() => CreateTodoSubmissionFuntion()}
      >
        <FaCodeBranch />
        <div className="createTodoCount">{count}</div>
      </div>
    </>
  );
}

export default CreateTodoButton;
