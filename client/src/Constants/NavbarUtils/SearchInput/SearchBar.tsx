import React, { FC, useState } from "react";
import "./SearchBar.css";
import { IoPersonAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscDebugStart } from "react-icons/vsc";
import OptionDescription from "../OptionDescription/OptionDescription";
import OptionContainer from "../OptionContainer/OptionContainer";
interface Props {
  setToSearch: any;
  onclick: () => void;
}

const SearchBar: FC<Props> = ({ setToSearch, onclick }: Props) => {
  const [searchDescClass, setSearchDescClass] = useState<string>("");

  const [searchInputClass, setSearhInputClass] = useState<string>("");
  return (
    <OptionContainer
      searchInputClass={searchInputClass}
      setSearchDescClass={setSearchDescClass}
    >
      <input
        type="text"
        className={"navbar-search" + searchInputClass}
        placeholder={searchInputClass ? "Enter Email of User to Add" : ""}
        onChange={(e) => {
          setToSearch(e.target.value);
        }}
      />
      {searchInputClass ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40px",
          }}
        >
          <AiFillCloseCircle
            className={"searchIcon" + searchInputClass}
            onClick={() => {
              setSearchDescClass("");
              setToSearch("");
              setSearhInputClass("");
            }}
          />
          <VscDebugStart
            className={"searchIcon2" + searchInputClass}
            onClick={() => onclick()}
          />
        </div>
      ) : (
        <IoPersonAdd
          className={"searchIcon" + searchInputClass}
          onClick={() => {
            setSearchDescClass("");
            setSearhInputClass("-open");
          }}
        />
      )}
      <OptionDescription searchDescClass={searchDescClass} curDesc="+User" />
    </OptionContainer>
  );
};

export default SearchBar;
