import React from "react";

import { FaChevronCircleRight } from "react-icons/fa";
type Props = {
  result: any;
  verificationCode: string;
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>;
  VerifyUserFunc: () => void;
};

function VerificationForm({
  result,
  verificationCode,
  setVerificationCode,
  VerifyUserFunc,
}: Props) {
  return (
    <>
      <span style={{ fontFamily: "var(--font-body)", color: "white" }}>
        Enter the secret 🤫 code sent to {result.email}.
      </span>
      <div className="verify__field">
        <input
          type="text"
          className="login__input"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button
          className="button verify__submit"
          onClick={(e) => {
            e.preventDefault();
            VerifyUserFunc();
          }}
        >
          {" "}
          <FaChevronCircleRight size={"20px"} />
        </button>
      </div>
    </>
  );
}

export default VerificationForm;
