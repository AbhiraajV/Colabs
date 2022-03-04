import React, { useState } from "react";
import TreeMaker from "./TreeMaker/TreeMaker";
import treeDatas, { treeDataInterface } from "./treeData";
import CreateProjectModal from "../CreateProject/CreateProjectModal";
import AddTodoButton from "./TreeMaker/AddTodoButton";
import CreateProjectInput from "../CreateProject/CreateProjectInput";
const TaskTree = (treeData: any) => {
  const [showCreateProj, setShowCreateProj] = useState(true);
  return (
    <>
      <CreateProjectInput isFirst={false} />
      {treeData.treeData.map((treeDat: treeDataInterface, index: any) => (
        <TreeMaker treeData={treeDat} />
      ))}
    </>
  );
};
export default TaskTree;
