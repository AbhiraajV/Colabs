import React, { useEffect, useState } from "react";
import "./Workspace.css";
import User from "../User";
import WorkspaceHead from "./HeadWorkspace/HeadWorkspace";
import WorkspaceMainTask from "./MainTasksWorkspace/MainTaskWorkspace";
import { Route, Routes } from "react-router-dom";
import { useGetCurUser } from "../../Hooks/GraphQL/Query/User.Query";
import empty from "./empty.png";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../Hooks/GraphQL/Mutations/User.Mutations";
import Input from "../../Constants/Inputs/Input";
function WorkspaceMain() {
  const [createProjectResolver] = useMutation(CREATE_PROJECT);
  const [title, setTitle] = useState("");
  const [error, seterror] = useState([]);
  const createProject = (title: string) => {
    const variables = {
      Title: title,
    };
    console.log(variables);
    createProjectResolver({
      variables: { input: variables },
    })
      .then((data: any) => {
        console.log(data);
        setMadeChange(true);
      })
      .catch((err: { graphQLErrors: any }) => seterror(err?.graphQLErrors));
  };
  const curUser = useGetCurUser();
  const [madeChange, setMadeChange] = useState(false);
  useEffect(() => {
    if (madeChange) {
      window.location.reload();
    }
  }, [madeChange]);

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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={empty}
                    alt="Let's get started"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h2
                    style={{
                      opacity: "0.8",
                    }}
                  >
                    Let's Start?
                  </h2>
                  <Input
                    type="text"
                    placeholder="Enter a Name for your Project"
                    onChange={(e) => setTitle(e.target.value)}
                    onClick={() => createProject(title)}
                  />
                </div>
              )}
            </>
          }
        ></Route>
        <Route
          path="users"
          element={<User curUser={curUser} setMadeChange={setMadeChange} />}
        />
      </Routes>
    </div>
  );
}

export default WorkspaceMain;
