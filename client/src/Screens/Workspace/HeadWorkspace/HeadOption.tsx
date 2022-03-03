import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement;
  onClick: () => void;
  isActive: string;
  link: string;
}
function WorkspaceHeadOption({
  children,
  isActive,
  onClick,
  link,
}: Props): ReactElement {
  return (
    <li className="menu__group" onClick={() => onClick()}>
      <Link
        to={link}
        className={"menu__link r-link text-underlined" + isActive}
      >
        {children}
      </Link>
    </li>
  );
}

export default WorkspaceHeadOption;
