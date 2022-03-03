import React, { useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { CgUserList } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import WorkspaceHeadOption from "./HeadOption";

function WorkspaceHeadOptions() {
  const [options, setOptions] = useState({
    showAddUserPage: "",
    showCurTaskPage: " added_outline",
    showUserListPage: "",
  });
  return (
    <div className="workspace-header-holder">
      <nav className="page__menu page__custom-settings menu">
        <ul className="menu__list r-list">
          {/* <WorkspaceHeadOption
            onClick={() => {
              setOptions((prev) => {
                return {
                  showAddUserPage: " added_outline",
                  showCurTaskPage: "",
                  showUserListPage: "",
                };
              });
            }}
            isActive={options.showAddUserPage}
          >
            <RiUserAddFill className="workspace-header-buttons" />
          </WorkspaceHeadOption> */}
          <WorkspaceHeadOption
            link=""
            onClick={() => {
              setOptions((prev) => {
                return {
                  showAddUserPage: "",
                  showCurTaskPage: " added_outline",
                  showUserListPage: "",
                };
              });
            }}
            isActive={options.showCurTaskPage}
          >
            <FaTasks className="workspace-header-buttons" />
          </WorkspaceHeadOption>{" "}
          <WorkspaceHeadOption
            link="users"
            onClick={() => {
              setOptions((prev) => {
                return {
                  showAddUserPage: "",
                  showCurTaskPage: "",
                  showUserListPage: " added_outline",
                };
              });
            }}
            isActive={options.showUserListPage}
          >
            <CgUserList className="workspace-header-buttons" />
          </WorkspaceHeadOption>
        </ul>
      </nav>
    </div>
  );
}

export default WorkspaceHeadOptions;
