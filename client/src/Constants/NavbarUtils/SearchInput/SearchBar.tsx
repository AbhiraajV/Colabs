import React, { FC, useState } from "react";
import "./SearchBar.css";
import { IoPersonAdd } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import OptionDescription from "../OptionDescription/OptionDescription";
import OptionContainer from "../OptionContainer/OptionContainer";
interface Props {}

const SearchBar: FC<Props> = ({}: Props) => {
  const [searchDescClass, setSearchDescClass] = useState<string>("");

  const [searchInputClass, setSearhInputClass] = useState<string>("");
  const [toSearch, setToSearch] = useState<string>("");
  return (
    <OptionContainer
      searchInputClass={searchInputClass}
      setSearchDescClass={setSearchDescClass}
    >
      <input
        type="text"
        className={"navbar-search" + searchInputClass}
        value={toSearch}
        placeholder={searchInputClass ? "Enter Email of User to Add" : ""}
        onChange={(e) => {
          setToSearch(e.target.value);
        }}
      />
      {searchInputClass ? (
        <AiFillCloseCircle
          className={"searchIcon" + searchInputClass}
          onClick={() => {
            setSearchDescClass("");
            setToSearch("");
            setSearhInputClass("");
          }}
        />
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
