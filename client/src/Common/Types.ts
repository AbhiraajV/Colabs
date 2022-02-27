export type hero = "HIDE" | "SHOW";
export type HeroStateType = {
  tasks: hero;
  tools: hero;
  about: hero;
  join: hero;
};
export const pageState = (): HeroStateType => {
  return {
    tasks: "HIDE",
    tools: "HIDE",
    about: "HIDE",
    join: "HIDE",
  };
};

export type isFilled = string;
export type FormInputType = {
  username: isFilled;
  email: isFilled;
  password: isFilled;
  "confirm password": isFilled;
};
export const FormInput = (): FormInputType => {
  return {
    username: "",
    email: "",
    password: "",
    "confirm password": "",
  };
};
