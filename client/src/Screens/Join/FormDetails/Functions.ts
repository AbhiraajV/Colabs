import { useNavigate } from "react-router-dom";
import { FormInputType } from "../../../Common/Types";
const formFiller = (
  e: React.ChangeEvent<HTMLInputElement>,
  curInputName: keyof FormInputType,
  setFormInput: React.Dispatch<React.SetStateAction<FormInputType>>,
  formInput: FormInputType
) => {
  setFormInput(() => {
    const temp = formInput;
    temp[curInputName] = e.target.value;
    return temp;
  });
};
type GQLFunctionType = {};
const gqlFunctions = ({
  formInput,
  result,
  setResult,
  seterror,
  verificationCode,
  VerifyUser,
  CreateUser,
  pushToTask,
}: any) => {
  const VerifyUserFunc = () => {
    const variables = {
      verificationCode: verificationCode,
      email: result.email,
    };
    VerifyUser({ variables: { input: variables } })
      .then((data: any) => {
        data.data.VerifyUser
          ? pushToTask()
          : seterror("invalid verification code");
      })
      .catch((e: string) => seterror("invalid verification code" + e));
  };
  const RegisterFunction = () => {
    const variables = {
      username: formInput.username,
      email: formInput.email,
      password: formInput.password,
      confirmPassword: formInput["confirm password"],
    };
    console.log(variables);
    CreateUser({
      variables: { input: variables },
    })
      .then((data: any) => {
        console.log(data + "sjkf");
        setResult(data.data.CreateUser);
        seterror("");
      })
      .catch((err: { graphQLErrors: any }) => seterror(err?.graphQLErrors));
  };
  const LoginFunction = () => {};
  return {
    verification: VerifyUserFunc,
    register: RegisterFunction,
    login: LoginFunction,
  };
};
export default {
  formFiller,
  gqlFunctions,
};
