import React from "react";
import TaskTree from "../TaskTree/TaskTree";
import "./WorkspaceMainTask.css";
function WorkspaceMainTask(treeData: any) {
  console.log(treeData);
  return (
    <div className="workspace-main-holder">
      <TaskTree treeData={treeData.treeData} />
    </div>
  );
}

export default WorkspaceMainTask;
