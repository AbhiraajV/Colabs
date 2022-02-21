import React, { FC, useState } from "react";
import "./SearchBar.css";
import { ImSearch } from "react-icons/im";
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
        placeholder={searchInputClass ? "explore tools..." : ""}
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
        <ImSearch
          className={"searchIcon" + searchInputClass}
          onClick={() => {
            setSearchDescClass("");
            setSearhInputClass("-open");
          }}
        />
      )}
      <OptionDescription searchDescClass={searchDescClass} curDesc="Search" />
    </OptionContainer>
  );
};

export default SearchBar;
