import React, { ReactElement, useState } from "react";
import Arrow from "../../Hero-SVG/Arrow";
import HeroCTACard from "./HeroCTACard";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./CtaToggle.css";
interface Props {}

function CTAToggle({}: Props): ReactElement {
  const [heroCTAClass, setHeroCTAClass] = useState<
    "slide-in-right" | "slide-in-right-off"
  >("slide-in-right-off");
  return (
    <div>
      <HeroCTACard heroCTAClass={heroCTAClass} />
    </div>
  );
}

export default CTAToggle;
