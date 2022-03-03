import React, { useEffect, useState } from "react";
import { treeDataInterface } from "../treeData";
import { DeadlineTodo } from "./DeadlineTodo";
import Tree from "./Tree";
import TreeNode from "./TreeNode";
interface Props {
  treeData: treeDataInterface;
}
const TreeMaker = ({ treeData }: Props) => {
  return (
    <>
      <Tree
        name={
          <TreeNode
            title={treeData.Title ? treeData.Title : treeData.TaskTitle}
          />
        }
      >
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "3rem",
            background: "rgba(0, 0, 0, 0.486)",
            padding: "1rem",
            borderRadius: "25px",
          }}
        >
          <DeadlineTodo />
        </div>
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
