import React from "react";
import "./Workspace.css";
import WorkspaceHead from "./HeadWorkspace/HeadWorkspace";
import WorkspaceMainTask from "./MainTasksWorkspace/MainTaskWorkspace";
function WorkspaceMain() {
  return (
    <div className="workspace">
      <WorkspaceHead />
      <WorkspaceMainTask />
    </div>
  );
}

export default WorkspaceMain;
