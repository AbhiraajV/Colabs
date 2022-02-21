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
