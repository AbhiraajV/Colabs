import React, { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SetDeadlineButton from "./SetDeadlineButton";
import moment from "moment";
import { useTransition, animated } from "react-spring";
import { AiFillCloseCircle } from "react-icons/ai";
function DeadlineTodo() {
  const [deadline, setDeadline] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const transition = useTransition(showCalendar, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },

    leave: {
      opacity: 0,
    },
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          width: "fit-content",
        }}
      >
        <SetDeadlineButton
          setShowCalendar={setShowCalendar}
          showCalendar={showCalendar}
        />
        <div>
          Deadline:
          {" " + moment(deadline).format("do MMMM YYYY, dddd") + " " + deadline}
          <AiFillCloseCircle
            size={"1.4rem"}
            color="red"
            onClick={() => {
              console.log("Removing Deadline");
            }}
          />
        </div>
      </div>

      {transition((style, item) =>
        item ? (
          <animated.div
            style={{
              ...style,
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
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export { DeadlineTodo };
