import React from "react";
import "./Workspace.css";
import User from "../User";
import WorkspaceHead from "./HeadWorkspace/HeadWorkspace";
import WorkspaceMainTask from "./MainTasksWorkspace/MainTaskWorkspace";
import { Route, Routes } from "react-router-dom";
import { useGetCurUser } from "../../Hooks/GraphQL/Query/User.Query";
function WorkspaceMain() {
  const curUser = useGetCurUser();
  console.log(curUser);
  return (
    <div className="workspace">
      <WorkspaceHead />
      <Routes>
        <Route path="" element={<WorkspaceMainTask />}></Route>
        <Route path="users" element={<User curUser={curUser} />} />
      </Routes>
    </div>
  );
}

export default WorkspaceMain;
