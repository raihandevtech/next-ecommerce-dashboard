import React from "react";
import { WiDirectionDownRight, WiDirectionUpRight } from "react-icons/wi";
import CardActions from "../smallComponents/CardActions";

interface Props {
    title: string;
    total: string;
    delta: string;
    caption: string;
}

 
function EarningCard( props : Props ) {
    
    const { title, total, delta, caption } = props;
  return (
    <div className="_earning_card_section">
      <div className="_earning_card_wrap">
        <div className="_earning_card_top">
          <h3 className="_earning_card_title">{title}</h3>
          <CardActions />
        </div>
        <div className="_earning_card_content">
          <h2 className="_earning_card_total">{total}</h2>
          <div className="_earning_card_delta">
            <WiDirectionDownRight className="_delta_direction" />
            <span className="_delta_txt">{delta}%</span>
          </div>
          <p className="_earning_card_caption">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default EarningCard;
