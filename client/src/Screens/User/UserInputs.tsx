import React, { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import Input from "../../Constants/Inputs/Input";

type Props = {};

function UserInputs({}: Props) {
  const [newUser, setNewUser] = useState("");
  return (
    <div className="AddUserInput">
      <Input
        type="text"
        placeholder="Enter Email of User to Add"
        onChange={(e) => setNewUser(e.target.value)}
        onClick={() => console.log(newUser)}
        children={<IoPersonAdd size={"30px"} />}
      />
    </div>
  );
}

export default UserInputs;
