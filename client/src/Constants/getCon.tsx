import React from "react";

type Props = {
  stuff: any;
};

function GetCon({ stuff }: Props) {
  return (
    <>
      {stuff.map((s: any, k: any) => (
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "3rem",
            background: "rgba(0, 0, 0, 0.486)",
            padding: "1rem",
            borderRadius: "25px",
            position: "relative",
            width: "fit-content",
            minWidth: "300px",
          }}
          key={k}
        >
          {s}
        </div>
      ))}
    </>
  );
}

export default GetCon;
