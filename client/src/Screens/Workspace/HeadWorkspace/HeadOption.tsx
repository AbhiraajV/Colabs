import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
  onClick: () => void;
  isActive: string;
}
function WorkspaceHeadOption({
  children,
  isActive,
  onClick,
}: Props): ReactElement {
  return (
    <li className="menu__group" onClick={() => onClick()}>
      <a href="#0" className={"menu__link r-link text-underlined" + isActive}>
        {children}
      </a>
    </li>
  );
}

export default WorkspaceHeadOption;
