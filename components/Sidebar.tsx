import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import logo from "../assets/images/logo.png";
import { GoDashboard } from "react-icons/go";
import { BiServer, BiShoppingBag } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineForwardToInbox, MdArrowForwardIos } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
import { TbServer2 } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

function Sidebar() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropDownToggler = () => setDropdown(!dropdown);
  const nav_menu = useRef<null | HTMLElement>(null);

  const eventHandler =(event: any ) => {       
    event.preventDefault();
    if (event.target !== null) {
      const hasAttr = event.target as Element;
      if (hasAttr.hasAttribute("data-toggle")) {
        let menuItemHasChildren = hasAttr.parentElement;
        menuItemHasChildren?.classList.toggle("_active");
      }
    }
  }

  useEffect(() => {
    let navMenu = nav_menu.current;
    if (navMenu !== null) {
      navMenu.addEventListener("click", eventHandler);
    }
  });

  return (
    <div className="_admin_sidebar_section">
      <div className="_admin_sidebar_wrap">
        <div className="_admin_sidebar_main">
          <Link href="/">
            <div className="_admin_sidebar_header">
              <div className="_admin_sidebar_header_logo">
                <Image src={logo} layout="responsive" />
              </div>
              <div className="_admin_sidebar_header_btn">
                <span className="_admin_sidebar_header_btn_txt">ADMIN</span>
              </div>
            </div>
          </Link>
          <div className="_admin_sidebar_body">
            <div className="_admin_sidebar_menu">
              <nav ref={nav_menu}>
                <ul className="_admin_sidebar_menu_list">
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <GoDashboard className="_system_icon" />
                          <span className="_txt">Dashboard</span>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                      <a
                        className="_admin_sidebar_menu_item_link"
                        data-toggle="sub-menu"
                      >
                        <p className="_content">
                          <BiServer className="_system_icon" />
                          <span className="_txt">Catalog</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    <ul
                      className="_admin_sidebar_dropdown_menu"
                    >
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Product List
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Product
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Categories List
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Category
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a
                        className="_admin_sidebar_menu_item_link"
                        data-toggle="sub-menu"
                      >
                        <p className="_content">
                          <AiOutlineUser className="_system_icon" />
                          <span className="_txt">Customers</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    </Link>
                    <ul
                      className={`_admin_sidebar_dropdown_menu ${
                        dropdown && "_active"
                      }`}
                    >
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Product List
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Product
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Categories List
                          </a>
                        </Link>
                      </li>
                      <li className="_admin_sidebar_dropdown_menu_item">
                        <Link href="/">
                          <a className="_admin_sidebar_dropdown_menu_item_link">
                            Category
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <BiShoppingBag className="_system_icon" />
                          <span className="_txt">Orders</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <GiSelfLove className="_system_icon" />
                          <span className="_txt">Marketing</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <MdOutlineForwardToInbox className="_system_icon" />
                          <span className="_txt">Inbox</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <BsChatQuote className="_system_icon" />
                          <span className="_txt">Chat</span>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <TbServer2 className="_system_icon" />
                          <span className="_txt">File Manager</span>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <AiTwotoneCalendar className="_system_icon" />
                          <span className="_txt">Calender</span>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <SiSimpleanalytics className="_system_icon" />
                          <span className="_txt">Analytics</span>
                        </p>
                      </a>
                    </Link>
                  </li>

                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <CgNotes className="_system_icon" />
                          <span className="_txt">Notes</span>
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li className="_admin_sidebar_menu_item">
                    <Link href="/">
                      <a className="_admin_sidebar_menu_item_link">
                        <p className="_content">
                          <FiSettings className="_system_icon" />
                          <span className="_txt">Settings</span>
                        </p>
                        <MdArrowForwardIos className="_arrow_icon" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
