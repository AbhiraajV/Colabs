import React from "react";
import WorkspaceMain from "../Screens/Workspace/WorkspaceMain";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutMe from "../Screens/AboutMe/AboutMe";
import { HeroStateType } from "../Common/Types";
import Join from "../Screens/Join";
export type curState = "about" | "tools" | "join" | "tasks";
type Props = {
  cur: curState;
  heroState: HeroStateType;
};

function GetRouter({ cur, heroState }: Props) {
  enum HeroState {
    SHOW = "slide-top",
    HIDE = "slide-out-top",
  }
  const renderCur = () => {
    if (cur == "about") return <AboutMe />;
    if (cur == "tasks")
      return localStorage.getItem("user") ? (
        <Navigate replace to="/join" />
      ) : (
        <WorkspaceMain />
      );
    if (cur == "join") return <Join />;
    return <></>;
  };
  return (
    <Routes>
      <Route
        path={"/" + cur}
        element={<div className={HeroState[heroState[cur]]}>{renderCur()}</div>}
      />
    </Routes>
  );
}

export default GetRouter;
