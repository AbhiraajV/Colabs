import React, { ReactElement, useState } from "react";
import CtaSelectionButtons from "./CtaSelectionButtons";
import HeroCtaInput from "./HeroCtaInput";
interface Props {
  heroCTAClass: "slide-in-right" | "slide-in-right-off";
}

function HeroCTACard({ heroCTAClass }: Props): ReactElement {
  const [curSelection, setCurrentSelection] = useState<{
    newsletter: boolean;
    contribute: boolean;
  }>({
    newsletter: false,
    contribute: true,
  });
  const [myIdea, setMyIdea] = useState("");
  const [myEmail, setMyEmail] = useState("");
  return (
    // <div
    //   className={heroCTAClass}
    //   style={{
    //     opacity: heroCTAClass === "slide-in-right-off" ? "0" : "1",
    //     transition: "opacity 500ms ease-in-out",
    //   }}
    // >
    //   <div className="wrapper">
    <div className="card-content">
      <CtaSelectionButtons
        curSelection={curSelection}
        setCurrentSelection={setCurrentSelection}
      />

      <HeroCtaInput
        curSelection={curSelection}
        setMyIdea={setMyIdea}
        setMyEmail={setMyEmail}
      />
    </div>
    //   </div>
    // </div>
  );
}

export default HeroCTACard;
