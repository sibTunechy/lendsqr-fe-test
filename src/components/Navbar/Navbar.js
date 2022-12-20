import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Link} from "react-router-dom";
import union from "../../images/Union.png";
import lender from "../../images/lendsqr.png";
import avatar from "../../images/faceart.jpg";

import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={union} alt="unionlogo"  style={{width: '20px', height: '21px', left: '30px', top: '36px'}} />
      <img src={lender} alt="lenderlogo" style={{width: '115px', height: '30px', left: '20px', top: '50px'}} />   
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder="Search for anything"/>
          <SearchIcon style={{backgroundColor: '#39CDCC'}}/>
        </div>
          <div className="docs">
              <Link to="">Docs</Link>
          </div>
          <div className="">
          <NotificationsIcon className="notifyicon"/>
          </div>
          <div className="avatarlogo">
              <img src={avatar} alt="avatar" className="avatarimg"/>
          </div>           
      </div>
    </div>
  )
}

export default Navbar;

