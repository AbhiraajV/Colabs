import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Input from "../../../Constants/Inputs/Input";
import { CREATE_PROJECT } from "../../../Hooks/GraphQL/Mutations/User.Mutations";
import UseReload from "../../../Hooks/UseReload";
import empty from "./empty.png";

type Props = {
  isFirst?: boolean;
};

function CreateProjectInput({ isFirst }: Props) {
  const [createProjectResolver] = useMutation(CREATE_PROJECT);
  const [title, setTitle] = useState("");
  const [error, seterror] = useState([]);
  const createProject = (title: string) => {
    const variables = {
      Title: title,
    };
    console.log(variables);
    createProjectResolver({
      variables: { input: variables },
    })
      .then((data: any) => {
        console.log(data);
        UseReload();
      })
      .catch((err: { graphQLErrors: any }) => seterror(err?.graphQLErrors));
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => seterror([]), 10000);
    }
  }, [error]);
  return (
    <div
      style={
        isFirst
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              cursor: "pointer",
            }
          : {}
      }
    >
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
      {isFirst && (
        <>
          <img
            src={empty}
            alt="Let's get started"
            style={{ width: "200px", height: "200px" }}
          />
          <h2
            style={{
              opacity: "0.8",
            }}
          >
            Let's Start?
          </h2>
        </>
      )}
      <Input
        type="text"
        placeholder="Enter the Name for a Project"
        onChange={(e) => setTitle(e.target.value)}
        onClick={() => createProject(title)}
      />
    </div>
  );
}

export default CreateProjectInput;
