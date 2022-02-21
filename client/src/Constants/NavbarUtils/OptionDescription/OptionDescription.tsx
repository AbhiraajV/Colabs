import React, { ReactElement } from "react";
import "./OptionDescription.css";
interface Props {
  searchDescClass: string;
  curDesc: string;
  backgroundColor?: string;
}

function OptionDescription({
  searchDescClass,
  curDesc,
  backgroundColor,
}: Props): ReactElement {
  return (
    <p
      style={{ background: backgroundColor }}
      className={"option-desc" + searchDescClass}
    >
      {curDesc}
    </p>
  );
}

export default OptionDescription;
