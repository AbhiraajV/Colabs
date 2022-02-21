import React, { ReactElement, useEffect, useState } from "react";
import "./BorderAnimatedButton.css";
interface Props {
  ContentText: string;
  selected?: boolean;
  onClick?: () => void;
}

function BorderAnimatedButton({
  ContentText,
  onClick,
  selected,
}: Props): ReactElement {
  const [curSelected, setSelected] = useState("none");
  useEffect(() => {
    selected ? setSelected("2px solid var(--pink-dark)") : setSelected("none");
  }, [selected]);
  return (
    <button
      onClick={() => onClick && onClick()}
      className="btn-1 anim-btn"
      style={
        selected !== undefined
          ? {
              borderBottom: curSelected,
            }
          : {}
      }
    >
      <span
        className="anim-btn-content"
        style={{
          paddingBottom: "0",
        }}
      >
        {ContentText}
      </span>
    </button>
  );
}

export default BorderAnimatedButton;
