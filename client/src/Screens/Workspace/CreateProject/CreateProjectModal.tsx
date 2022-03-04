import React from "react";
import CreateProjectInput from "./CreateProjectInput";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  setShowCreateProj: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateProjectModal({ setShowCreateProj }: Props) {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        zIndex: "1001020130",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "20px 10px",
          background: "rgba(0,0,0,0.8)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20%",
          position: "relative",
          height: "70%",
        }}
      >
        <h2 style={{ opacity: "0.8" }}>Create Project</h2>
        <button
          className="closeCreateProj"
          onClick={() => setShowCreateProj(false)}
          style={{
            border: "none",
            outline: "none",
            background: "none",
            position: "absolute",
            left: "0",
            top: "10px",
          }}
        >
          <AiOutlineClose size={"30px"} fill={"white"} />
        </button>
        <CreateProjectInput />
      </div>
    </div>
  );
}

export default CreateProjectModal;
