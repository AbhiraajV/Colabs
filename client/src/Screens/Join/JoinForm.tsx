import React, { useState } from "react";
import FormDesign from "./FormDesign";
import FormDetails from "./FormDetails/FormDetails";
type Props = {};

function JoinForm({}: Props) {
  return (
    <div className="screen">
      <form className="login">
        <FormDetails />
      </form>
      <FormDesign />
    </div>
  );
}

export default JoinForm;
