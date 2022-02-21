import React from "react";
import { IoMdCreate, IoIosArrowBack } from "react-icons/io";
import "./WorkspaceHead.css";
import WorkspaceHeadOptions from "./OptionHolderHeadWorkspace";
function WorkspaceHead() {
  return (
    <div className="workspace-head-container">
      <div className="workspace-title">
        <input
          value={"Workspace Title "}
          className="WorkspaceTitleInput"
          style={{
            borderBottom: "5px dashed var(--pink-dark)",
          }}
        />
      </div>
      <WorkspaceHeadOptions />
    </div>
  );
}

export default WorkspaceHead;
