import React, { useState, useEffect } from "react";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
function SetDeadlineButton({ setShowCalendar, showCalendar, isCal }) {
  const [className, setClassName] = useState("showCalendar");
  return (
    <div
      className={className}
      onClick={() => {
        setClassName((prev) => {
          setShowCalendar((prev) => !prev);
          if (prev === "showCalendar") {
            setClassName("closeCalendar");
            console.log(document.getElementsByClassName("calendar"));
          } else {
            setClassName("showCalendar");
          }
        });
      }}
    >
      {!showCalendar ? (
        <>
          {isCal ? (
            <BsFillCalendar2WeekFill size={"1.5rem"} />
          ) : (
            <FaUsers size={"1.5rem"} />
          )}
        </>
      ) : (
        <AiFillCloseCircle size={"1.5rem"} />
      )}
    </div>
  );
}

export default SetDeadlineButton;
