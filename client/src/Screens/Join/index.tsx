import React from "react";
import FormDesign from "./FormDesign";
import "./Join.css";
import JoinForm from "./JoinForm";
type Props = {};

function Join({}: Props) {
  return (
    <div className="container">
      <JoinForm />
    </div>
  );
}

export default Join;
