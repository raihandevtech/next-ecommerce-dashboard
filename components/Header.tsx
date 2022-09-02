import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import Image from "next/image";
import avater from "../assets/images/raihan-dev3.jpg";

function Header() {
  return (
    <div className="_header_section">
      <div className="_header_wrap">
        <div className="_header_main">
          <div className="_header_left">
            <div className="_header_left_bar">
              <VscThreeBars className="_bar_icon" />
            </div>
            <form className="_header_left_search">
              <input type="text" placeholder="Search..." className="_header_left_search_input" />
              <AiOutlineSearch className="_search_icon" />
            </form>
          </div>
          <div className="_header_right">
            <div className="_header_right_notifications">
              <div className="_header_right_notifications_bell">
                <BsBellFill className="_bell_icon" />
                <span className="_counter_number">4</span>
              </div>
            </div>
            <div className="_header_right_user">
              <div className="_header_right_user_avater">
                <Image
                  src={avater}
                  width="40"
                  height="40"
                  objectFit="contain"
                  layout="responsive"
                  className="_avater_image"
                />
              </div>
              <div className="_header_right_user_content">
                <h3 className="_header_right_user_name">Raihan Khan</h3>
                <p className="_header_right_user_email">
                  raihan.dev3@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
