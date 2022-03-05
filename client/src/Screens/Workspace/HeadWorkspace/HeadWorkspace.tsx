import React from "react";
import { IoMdCreate, IoIosArrowBack } from "react-icons/io";
import "./WorkspaceHead.css";
import WorkspaceHeadOptions from "./OptionHolderHeadWorkspace";
type prop = {
  username: string;
};
function WorkspaceHead({ username }: prop) {
  return (
    <div className="workspace-head-container">
      <div className="workspace-title">
        <div
          className="WorkspaceTitleInput"
          style={{
            borderBottom: "5px dashed var(--pink-dark)",
          }}
        >
          🙏,welcome {username}!
        </div>
      </div>
      <WorkspaceHeadOptions />
    </div>
  );
}

export default WorkspaceHead;
