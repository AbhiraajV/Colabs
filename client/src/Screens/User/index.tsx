import React from "react";
import UserMain from "./UserMain";
import "./index.css";
type Props = {
  curUser: any;
};

function User({ curUser }: Props) {
  if (curUser == undefined) return <h1>Loading...</h1>;
  return (
    <div className="UserPort">
      <UserMain User={curUser} />
    </div>
  );
}

export default User;
