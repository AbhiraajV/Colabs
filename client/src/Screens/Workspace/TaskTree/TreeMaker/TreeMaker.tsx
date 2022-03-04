import React, { useEffect, useState } from "react";
import GetCon from "../../../../Constants/getCon";
import { treeDataInterface } from "../treeData";
import { DeadlineTodo } from "./DeadlineTodo";
import Members from "./Members";
import Tree from "./Tree";
import TreeNode from "./TreeNode";
interface Props {
  treeData: treeDataInterface;
}
const TreeMaker = ({ treeData }: Props) => {
  return (
    <>
      <Tree name={<TreeNode treeData={treeData} />}>
        <GetCon
          stuff={[<DeadlineTodo />, <Members listItems={treeData.Members} />]}
        />

        {treeData.Tasks
          ? treeData.Tasks &&
            treeData.Tasks?.map((child, index) => (
              <TreeMaker treeData={child} key={index} />
            ))
          : treeData.ChildTask &&
            treeData.ChildTask?.map((child, index) => (
              <TreeMaker treeData={child} key={index} />
            ))}
      </Tree>
    </>
  );
};

export default TreeMaker;
