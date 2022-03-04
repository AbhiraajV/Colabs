import React, { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SetDeadlineButton from "./SetDeadlineButton";
import moment from "moment";
import { AiFillCloseCircle } from "react-icons/ai";
function DeadlineTodo() {
  const [deadline, setDeadline] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
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
          isCal={true}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AiFillCloseCircle
            size={"1.4rem"}
            color="red"
            onClick={() => {
              console.log("Removing Deadline");
            }}
          />
          <span>
            Deadline:
            {" " + moment(deadline).format("dddd, MMMM Do YYYY")}
          </span>
        </div>
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
          <Calendar
            className="calendar"
            onChange={(date) => {
              setDeadline(date);
            }}
            value={deadline}
          />
        </div>
      )}
    </div>
  );
}

export { DeadlineTodo };
