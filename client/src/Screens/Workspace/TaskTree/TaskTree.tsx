import React from "react";
import TreeMaker from "./TreeMaker/TreeMaker";
import { treeDataInterface } from "./treeData";
import CreateProjectInput from "../CreateProject/CreateProjectInput";
const TaskTree = (treeData: any) => {
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
