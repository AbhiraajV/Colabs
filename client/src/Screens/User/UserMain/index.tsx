import React from "react";
import "./index.css";
import UserInfo from "../Utils/UserInfo";
import UserLists from "../Utils/UserLists";
import SearchBar from "../../../Constants/NavbarUtils/SearchInput/SearchBar";
type Props = {
  User: any;
};

function UserMain({ User }: Props) {
  return (
    <div className="UserMain">
      <UserInfo
        name={User.username}
        email={User.email}
        verified={User.verified}
      />
      <UserLists
        listItems={User.circle ? User.circle : []}
        heading={"Your Circle"}
        icon={<SearchBar />}
      />
    </div>
  );
}

export default UserMain;
