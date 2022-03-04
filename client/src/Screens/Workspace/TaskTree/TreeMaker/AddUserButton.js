import React, { useRef, useState, useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";
import "./StyleAddUserButton.js";
import StyleAddUserButton from "./StyleAddUserButton.js";
import { useMutation } from "@apollo/client";
import { ADD_USER_TO_PROJECT } from "../../../../Hooks/GraphQL/Mutations/Projects.Mutations";
import UseReload from "../../../../Hooks/UseReload";
function AddUserButton({ count, project_id, seterror }) {
  const [searchInput, setSearchInput] = useState("search__user__input");
  const [searchIcon, setSearchIcon] = useState("search__user__icon");
  const [searchClose, setSearchClose] = useState("search__close");

  const searchInputRef = useRef();
  const [addUserToProjectResolver] = useMutation(ADD_USER_TO_PROJECT);
  const [email, setEmail] = useState("");
  const addUser = (title) => {
    const variables = {
      email: title,
      project_id,
    };
    console.log(variables);
    addUserToProjectResolver({
      variables: { input: variables },
    })
      .then((data) => {
        console.log(data);
        UseReload();
      })
      .catch((err) => seterror(err?.graphQLErrors));
  };
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <VscDebugStart
          style={StyleAddUserButton[searchClose]}
          onClick={() => {
            addUser(email);
          }}
        />
        <IoClose
          style={StyleAddUserButton[searchClose]}
          onClick={() => {
            setSearchInput("search__user__input");
            setSearchClose("search__close");
            setSearchIcon("search__user__icon");
            setEmail("");
            searchInputRef.current.value = "";
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-0.5rem",
            right: "1rem",
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
          {count}
        </div>
      </div>
    </>
  );
}

export default AddUserButton;
