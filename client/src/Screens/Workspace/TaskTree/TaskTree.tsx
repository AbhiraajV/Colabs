import React from "react";
import TreeMaker from "./TreeMaker/TreeMaker";
import treeDatas, { treeDataInterface } from "./treeData";
const TaskTree = (treeData: any) => (
  <>
    {treeData.treeData.map((treeDat: treeDataInterface, index: any) => (
      <TreeMaker treeData={treeDat} />
    ))}
  </>
);
export default TaskTree;
