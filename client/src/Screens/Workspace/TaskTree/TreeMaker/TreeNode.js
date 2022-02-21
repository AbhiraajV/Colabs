import React, { useState } from "react";
import AddTodoButton from "./AddTodoButton";
import AddUserButton from "./AddUserButton";
import CreateTodoButton from "./CreateTodoButton";
import DeadlineTodo from "./DeadlineTodo";
import SetDeadlineButton from "./SetDeadlineButton";
import "./TreeNode.css";
function TreeNode(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <div className="TreeNodeCon">
      <input
        value={title}
        className="TreeNodeTitle"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <CreateTodoButton />
      <AddTodoButton />
      <AddUserButton />
    </div>
  );
}

export default TreeNode;
