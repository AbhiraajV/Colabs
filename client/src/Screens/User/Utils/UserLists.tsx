import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { REMOVE_USER_FROM_CIRCLE } from "../../../Hooks/GraphQL/Mutations/User.Mutations";
import UseReload from "../../../Hooks/UseReload";
type Props = {
  listItems: any[];
  icon?:
    | JSX.Element
    | React.ReactChild[]
    | React.ReactChild
    | React.ReactElement;
  heading: string;
  seterror: any;
};

function UserLists({ listItems, icon, heading, seterror }: Props) {
  const [email, setEmail] = useState("");
  const [removeUserFromCircleInput] = useMutation(REMOVE_USER_FROM_CIRCLE);
  const RemoveUser = (email: string) => {
    const variables = {
      email,
    };
    console.log(variables);
    removeUserFromCircleInput({
      variables: { input: variables },
    })
      .then((data: any) => {
        console.log(data);
        UseReload();
      })
      .catch((err: { graphQLErrors: any }) => seterror(err?.graphQLErrors));
  };
  return (
    <div className="UserDet">
      <h2 className="UserName">
        {heading} {icon}
      </h2>
      <div className="Circle">
        <ul>
          {listItems.map((item, id) => (
            <li
              key={item._id}
              style={{ position: "relative", marginBottom: "1rem" }}
            >
              <h3>{item.username}</h3>
              <h4 style={{ opacity: 0.8 }}>{item.email}</h4>
              <AiFillCloseCircle
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5",
                  cursor: "pointer",
                }}
                size={"25px"}
                onClick={() => RemoveUser(item.email)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserLists;
