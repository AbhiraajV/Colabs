import React, { useEffect, useState } from "react";
import "./index.css";
import UserInfo from "../Utils/UserInfo";
import UserLists from "../Utils/UserLists";
import SearchBar from "../../../Constants/NavbarUtils/SearchInput/SearchBar";
import { ADD_USER_TO_CIRCLE } from "../../../Hooks/GraphQL/Mutations/User.Mutations";
import { useMutation } from "@apollo/client";
type Props = {
  setMadeChange: any;
  User: any;
};

function UserMain({ User, setMadeChange }: Props) {
  const [AddUserToCircle] = useMutation(ADD_USER_TO_CIRCLE);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState();
  const [error, seterror] = useState([]);
  const AddUser = () => {
    const variables = {
      email,
    };
    console.log(variables);
    AddUserToCircle({
      variables: { input: variables },
    })
      .then((data: any) => {
        console.log(data);
        setResult(data.data.AddUserToCircle);
        setMadeChange(true);
        seterror([]);
      })
      .catch((err: { graphQLErrors: any }) => seterror(err?.graphQLErrors));
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => seterror([]), 10000);
    }
  }, [error]);

  return (
    <div className="UserMain">
      {error &&
        error.map((err: any, index: any) => (
          <span
            key={index}
            style={{
              color: "var(--red-dark)",
              width: "100%",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
          >
            {err.message.replace("Error: Error:", "")}
            <br />
          </span>
        ))}
      <UserInfo
        name={User.username}
        email={User.email}
        verified={User.verified}
      />
      <UserLists
        listItems={User.circle ? User.circle : []}
        setMadeChange={setMadeChange}
        heading={"Your Circle"}
        seterror={seterror}
        icon={<SearchBar setToSearch={setEmail} onclick={() => AddUser()} />}
      />
    </div>
  );
}

export default UserMain;
