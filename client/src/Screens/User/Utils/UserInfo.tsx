import React from "react";
import { MdVerifiedUser } from "react-icons/md";

type Props = {
  name: string;
  verified: boolean;
  email: string;
};

function UserInfo({ name, verified, email }: Props) {
  console.log(name + " " + email + " " + verified);
  return (
    <div className="UserDet">
      <div className="UserNameHolder">
        <h2 className="UserName">{name}</h2>
        {verified && <MdVerifiedUser size={"25px"} />}
      </div>
      <h4 className="UserEmail">{email}</h4>
    </div>
  );
}

export default UserInfo;
