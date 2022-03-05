import React, { useEffect, useState } from "react";
import { CHANGE_PROJECT_TITLE } from "../../../../Hooks/GraphQL/Mutations/Projects.Mutations";
import AddTodoButton from "./AddTodoButton";
import AddUserButton from "./AddUserButton";
import CreateTodoButton from "./CreateTodoButton";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./TreeNode.css";
import { useMutation } from "@apollo/client";
function TreeNode({ treeData }) {
  const [changeProjectTitleResolver] = useMutation(CHANGE_PROJECT_TITLE);
  const [error, seterror] = useState([]);
  const [title, setTitle] = useState(
    treeData.Title ? treeData.Title : treeData.TaskTitle
  );
  const createProject = () => {
    if (
      title.trim() === "" || title.trim() === treeData.Title
        ? treeData.Title
        : treeData.TaskTitle
    ) {
      seterror([{ message: "Invalid Input" }]);
      return;
    }
    const variables = {
      title: title,
      projectId: treeData._id,
    };
    changeProjectTitleResolver({
      variables: { input: variables },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => seterror(err?.graphQLErrors));
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => seterror([]), 10000);
    }
  }, [error]);
  return (
    <>
      {error &&
        error.map((err, index) => (
          <span
            key={index}
            style={{
              color: "var(--red-dark)",
              width: "100%",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          >
            {err.message.replace("Error: Error:", "")}
            <br />
          </span>
        ))}
      <div className="TreeNodeCon">
        <div style={{ display: "flex" }}>
          <input
            value={title}
            className="TreeNodeTitle"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <IoCheckmarkDoneCircle
            size={"40px"}
            onClick={() => createProject()}
            className="tick"
          />
        </div>
        <CreateTodoButton count={treeData.Tasks ? treeData.Tasks.length : 0} />
        <AddUserButton
          count={treeData.Members.length}
          project_id={treeData._id}
          seterror={seterror}
        />
      </div>
    </>
  );
}

export default TreeNode;
