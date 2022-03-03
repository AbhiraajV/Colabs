import React, { useState } from "react";
import fillForm from "./FormDetailsFill";
import { FormInput, FormInputType } from "../../../Common/Types";
import getFormFunctions from "./Functions";
import { useMutation } from "@apollo/client";
import {
  CREATE_USER_MUTATION,
  VERIFY_USER,
  LOGIN_USER,
} from "../../../Hooks/GraphQL/Mutations/User.Mutations";
import VerificationForm from "./VerificationForm";
import { FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
type Props = {};
function FormDetails({}: Props) {
  const [formType, setFormType] = useState<"REG" | "LOG">("REG");
  const [verificationCode, setVerificationCode] = useState("");
  const [formInput, setFormInput] = useState<FormInputType>(FormInput());
  const [result, setResult] = useState<any>();
  const [error, seterror] = useState<any>();

  const [VerifyUser] = useMutation(VERIFY_USER);
  const [CreateUser] = useMutation(CREATE_USER_MUTATION);
  const [LoginUser] = useMutation(LOGIN_USER);

  const navigate = useNavigate();
  const pushToTask = () => navigate("/tasks");

  const GQL_Functions = getFormFunctions.gqlFunctions({
    VerifyUser,
    CreateUser,
    verificationCode,
    formInput,
    setResult,
    seterror,
    pushToTask,
    result,
    LoginUser,
  });
  return formType === "REG" && result ? (
    <VerificationForm
      result={result}
      verificationCode={verificationCode}
      setVerificationCode={setVerificationCode}
      VerifyUserFunc={GQL_Functions.verification}
    />
  ) : (
    <>
      {Object.keys(fillForm[formType]).map((key, index) => (
        <div className="login__field">
          {fillForm[formType][key].svg}
          <input
            type={fillForm[formType][key].type}
            className="login__input"
            placeholder={key}
            onChange={(e) =>
              getFormFunctions.formFiller(
                e,
                key.toLowerCase() as keyof FormInputType,
                setFormInput,
                formInput
              )
            }
          />
        </div>
      ))}
      <button
        className="button login__submit"
        onClick={(e) => {
          e.preventDefault();
          formType == "REG" ? GQL_Functions.register() : GQL_Functions.login();
        }}
      >
        <span className="button__text">
          {formType == "REG" ? "Register" : "Login"}
        </span>
        <FaChevronCircleRight size={"20px"} />
      </button>{" "}
      {error &&
        error.map((err: any, index: any) => (
          <span
            key={index}
            style={{
              color: "var(--red-dark)",
              width: "100%",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          >
            {err.message.replace("Error: Error:", "")}
            <br />
          </span>
        ))}
      <span
        style={{ fontSize: "1rem", color: "white" }}
        onClick={() => setFormType(formType == "REG" ? "LOG" : "REG")}
      >
        {formType == "REG" ? "Been here before? Login " : "New here? Register"}
      </span>
    </>
  );
}

export default FormDetails;
