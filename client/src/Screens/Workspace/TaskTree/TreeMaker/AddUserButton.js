import React, { useRef, useState } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./StyleAddUserButton.js";
import StyleAddUserButton from "./StyleAddUserButton.js";
function AddUserButton() {
  const [searchInput, setSearchInput] = useState("search__user__input");
  const [searchIcon, setSearchIcon] = useState("search__user__icon");
  const [searchClose, setSearchClose] = useState("search__close");
  const searchInputRef = useRef();
  return (
    <>
      <div style={StyleAddUserButton.search__user}>
        <RiUserAddFill
          style={StyleAddUserButton[searchIcon]}
          onClick={() => {
            setSearchInput("search__user__input_open");
            setSearchClose("search__close_open");
            setSearchIcon("search__user__icon_open");
            searchInputRef.current.focus();
          }}
        />
        <input
          type="text"
          style={StyleAddUserButton[searchInput]}
          autoFocus
          placeholder=" "
          ref={searchInputRef}
        />
        <IoClose
          style={StyleAddUserButton[searchClose]}
          onClick={() => {
            setSearchInput("search__user__input");
            setSearchClose("search__close");
            setSearchIcon("search__user__icon");
            searchInputRef.current.value = "";
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.2rem",
          left: "18.1rem",
          color: "white",
          background: "var(--pink-dark)",
          width: "20px",
          height: "20px",
          fontSize: "13px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        0
      </div>
    </>
  );
}

export default AddUserButton;
