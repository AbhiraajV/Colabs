import React, { ReactElement } from "react";
import Input from "../../../../Constants/Inputs/Input";
import { IoSendSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
interface Props {
  curSelection: {
    newsletter: boolean;
    contribute: boolean;
  };
  setMyIdea: React.Dispatch<React.SetStateAction<string>>;
  setMyEmail: React.Dispatch<React.SetStateAction<string>>;
}

function HeroCtaInput({
  curSelection,
  setMyIdea,
  setMyEmail,
}: Props): ReactElement {
  return (
    <Input
      type={curSelection.contribute ? "text" : "email"}
      placeholder={curSelection.contribute ? "Your Idea" : "Your Email"}
      onChange={(e) => {
        curSelection.contribute
          ? setMyIdea(e.target.value)
          : setMyEmail(e.target.value);
      }}
      onClick={() => {
        curSelection ? console.log("myIdea") : console.log("myEmail");
      }}
      btnStyle={
        curSelection.newsletter ? { padding: 0 } : { paddingLeft: "0.3rem" }
      }
      children={
        curSelection.contribute ? (
          <IoSendSharp size={"30px"} />
        ) : (
          <MdEmail size={"30px"} />
        )
      }
    />
  );
}

export default HeroCtaInput;
