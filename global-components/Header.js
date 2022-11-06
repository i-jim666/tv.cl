import React from "react";
import Image from "next/image";
import Logo from "../public/tvcl.svg";
import SettingsIcon from "../images/icons/SettingsIcon";
import ResetSearch from "../images/icons/ResetSearch.svg";

import Link from "next/link";

const Header = (props) => {
  const { setSearch, search } = props;

  return (
    <div id="header" className="header">
      <div className="container">
        <div className="logo">
          <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
            <span>
              <Image src={Logo} alt="Logo" />
            </span>
          </Link>
        </div>
        <div className="search__box">
          
          {
            search?.length > 0 && 
            <div className="reset_search">
              <Image onClick={()=>{setSearch('')}} src={ResetSearch} />
            </div>
          }

          <div className="input_holder">
            { 
              (props.showSearch != 'false')? 
                <input type="text" id="search_input" className="search_input" placeholder="Buscar por canal, programa" 
                onChange={(e) => setSearch(e.target.value)} value={search} /> 
                : 
                '' 
            }
          </div>
        </div>
        <div className="settings__icon">
          <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME + "/configuracion"}>
            <span>
              <SettingsIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
