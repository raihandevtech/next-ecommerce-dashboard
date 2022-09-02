import React from 'react';
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function ExportDate() {
    const [dateItem, setDateItem] = useState<string>("12 October 2021");
  const [openDate, setOpenDate] = useState<boolean>(false);

  // const eventHandler = (event : any ): void => {
  //   console.log(event.target);
  //     if(event.target.classList !== "_date_select_wrap" ){
  //       setOpenDate(false);
  //     }
  //   }

  // useEffect(() => {
  //   document.body.addEventListener("click", eventHandler);
  // }, [openDate])

  const selectDate = (date: string): void => {
    setDateItem(date);
    setOpenDate(false);
  };

  const openDateHandler = () => {
    setOpenDate(!openDate);
  };
  return (
    <div className="_date">
            <p className="_date_current" onClick={openDateHandler}>
              {dateItem}
              <MdOutlineKeyboardArrowDown className="_arrow" />
            </p>
            <div className={`_date_select_wrap ${openDate && "_open"}`}>
              <div className="_date_select_options">
                <p
                  className="_date_select_item"
                  onClick={() => selectDate("6 October 2021")}
                >
                  6 October 2021
                </p>
                <p
                  className="_date_select_item"
                  onClick={() => selectDate("1 October 2021")}
                >
                  1 October 2021
                </p>
                <p
                  className="_date_select_item"
                  onClick={() => selectDate("2 October 2021")}
                >
                  2 October 2021
                </p>
                <p
                  className="_date_select_item"
                  onClick={() => selectDate("3 October 2021")}
                >
                  3 October 2021
                </p>
                <p
                  className="_date_select_item"
                  onClick={() => selectDate("4 October 2021")}
                >
                  4 October 2021
                </p>
              </div>
            </div>
          </div>
  )
}

export default ExportDate