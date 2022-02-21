import React, { ReactChild, ReactElement, ReactNode } from "react";

interface Props {
  searchInputClass?: string;
  setSearchDescClass: React.Dispatch<React.SetStateAction<string>>;
  children: JSX.Element | ReactChild[] | ReactChild;
}

function OptionContainer({
  searchInputClass,
  setSearchDescClass,
  children,
}: Props): ReactElement {
  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onMouseEnter={() => {
        if (!searchInputClass) {
          setSearchDescClass("-show");
        }
      }}
      onMouseLeave={() => {
        setSearchDescClass("");
      }}
    >
      {children}
    </div>
  );
}

export default OptionContainer;
