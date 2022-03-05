import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Loading from "../../../../Common/Loading";
import { useGetCurUserById } from "../../../../Hooks/GraphQL/Query/User.Query";
import SetDeadlineButton from "./SetDeadlineButton";

type Props = {
  listItems: any[];
};

function Members({ listItems }: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  let listOfUserIds: string[] = [];
  for (var i in listItems) {
    listOfUserIds.push(listItems[i]._id);
  }
  let Users = useGetCurUserById(listOfUserIds);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <SetDeadlineButton
          setShowCalendar={setShowCalendar}
          showCalendar={showCalendar}
          isCal={false}
        />
      </div>

      {showCalendar && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="Circle">
            <ul>
              {Users.length > 0 ? (
                Users.map((item: any, id: any) => (
                  <li
                    key={item._id + " " + id}
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
                      // onClick={() => RemoveUser(item.email)}
                    />
                  </li>
                ))
              ) : (
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  No Members Yet!
                </h3>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;
