import React from "react";
import UserMain from "./UserMain";
import "./index.css";
type Props = {
  curUser: any;
  setMadeChange: any;
};

function User({ curUser, setMadeChange }: Props) {
  if (curUser == undefined) return <h1>Loading...</h1>;
  return (
    <div className="UserPort">
      <UserMain User={curUser} setMadeChange={setMadeChange} />
    </div>
  );
}

export default User;
