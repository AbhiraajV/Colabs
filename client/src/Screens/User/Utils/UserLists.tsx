import React from "react";

type Props = {
  listItems: any[];
  icon?:
    | JSX.Element
    | React.ReactChild[]
    | React.ReactChild
    | React.ReactElement;
  heading: string;
};

function UserLists({ listItems, icon, heading }: Props) {
  return (
    <div className="UserDet">
      <h2 className="UserName">
        {heading} {icon}
      </h2>
      <div className="Circle">
        <ul>
          {listItems.map((item, id) => (
            <li key={item._id}>
              <h3>{item.username}</h3>
              <h4>{item.email}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserLists;
