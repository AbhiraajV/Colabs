import React, { useEffect, useState } from "react";
import "./Workspace.css";
import User from "../User";
import WorkspaceHead from "./HeadWorkspace/HeadWorkspace";
import WorkspaceMainTask from "./MainTasksWorkspace/MainTaskWorkspace";
import { Route, Routes } from "react-router-dom";
import { useGetCurUser } from "../../Hooks/GraphQL/Query/User.Query";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../Hooks/GraphQL/Mutations/User.Mutations";
import CreateProjectInput from "./CreateProject/CreateProjectInput";
function WorkspaceMain() {
  const curUser = useGetCurUser();
  console.log(curUser);
  return (
    <div className="workspace">
      <WorkspaceHead />
      <Routes>
        <Route
          path=""
          element={
            <>
              {curUser && curUser.projects && curUser.projects.length > 0 ? (
                <WorkspaceMainTask treeData={curUser.projects} />
              ) : (
                <CreateProjectInput />
              )}
            </>
          }
        ></Route>
        <Route path="users" element={<User curUser={curUser} />} />
      </Routes>
    </div>
  );
}

export default WorkspaceMain;
