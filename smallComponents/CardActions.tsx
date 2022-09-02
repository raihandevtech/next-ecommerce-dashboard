import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

function CardActions() {
  const [open, setOpen] = useState<boolean>(false);

  const openActionsHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="_card_actions">
      <div className={`_card_actions_btn ${open && "_open"}`} onClick={openActionsHandler}>
        <BiDotsVerticalRounded className="_dote_icon" />
      </div>
      <div className={`_card_actions_options ${open && "_open"}`}>
        <ul className="_options_list">
          <li className="_options_list_item">
            <a
              className="_options_list_item_link"
              href="#0"
              onClick={() => setOpen(!open)}
            >
              Setting
            </a>
          </li>
          <li className="_options_list_item">
            <a
              className="_options_list_item_link"
              href="#0"
              onClick={() => setOpen(!open)}
            >
              Move
            </a>
          </li>
        </ul>
        <a href="#0" className="_remove_action" onClick={() => setOpen(!open)}>
          Remove
        </a>
      </div>
    </div>
  );
}

export default CardActions;
