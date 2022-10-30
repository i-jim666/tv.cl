import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/tvcl.svg";
import HamburgerIcon from "../images/icons/HamburgerIcon.svg";
import SearchIcon from "../images/icons/SearchIcon.svg";
import SettingsIcon from "../images/icons/SettingsIcon";
import TvIcon from "../images/icons/TvIcon.svg";

import Link from "next/link";

const Header_Mobile = (props) => {
  const [navStatus, setNavStatus] = useState("");
  const { setSearch } = props;
  const [isShowSearch, seIsShowSearch] = useState(false);

  let open_nav = () => {
    setNavStatus("active");
  };
  let close_nav = () => {
    setNavStatus("");
  };

  return (
    <>
      <div id="header_mob" className="header_mob">
        <div className="container">
          <div className="logo">
            <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
              <span>
                <Image src={Logo} alt="Logo" width={60} />
              </span>
            </Link>
          </div>
          <div className="right_col">
            {isShowSearch && (
              <input
                type="text"
                id="search_input"
                className="search_input"
                placeholder="Buscar por canal, programa"
                onChange={(e) => {
                  setSearch(e.target.value);
                  document.getElementById("search_input").focus = true;
                }}
              />
            )}
            <div className="search__icon">
              <Image
                src={SearchIcon}
                alt="Search icon"
                onClick={() => seIsShowSearch(!isShowSearch)}
              />
            </div>
            <div className="hamburger__icon" onClick={open_nav}>
              <Image src={HamburgerIcon} alt="Hamburger icon" />
            </div>
          </div>
        </div>
      </div>

      <div className={`nav_container ${navStatus}`}>
        <div className="navigation">
          <div className="nav__head">
            <Image src={Logo} alt="Logo" width={45} height={28} />

            <div id="close_nav" onClick={close_nav}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 6.25L6.25 18.75M6.25 6.25L18.75 18.75"
                  stroke="#707A87"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="nav_body">
            <Link href="#">
              <div className="item">
                <Image src={SearchIcon} alt="Search icon" />
                <span className="text">Canal de búsqueda</span>
              </div>
            </Link>

            <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME + "/settings"}>
              <div className="item">
                <SettingsIcon />
                <span className="text">Personalizar canal</span>
              </div>
            </Link>

            <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME + "/about-us"}>
              <div className="item">
                <Image src={TvIcon} alt="TV icon" />
                <span className="text">Acerca de tv.cl</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header_Mobile;
