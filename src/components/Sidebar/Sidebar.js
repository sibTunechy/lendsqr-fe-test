import React from "react";
import {GiSuitcase} from "react-icons/gi";
import {AiOutlineHome} from "react-icons/ai"
import {FaRegHandshake} from "react-icons/fa";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import {GiReceiveMoney} from "react-icons/gi";
import {BiUserCheck} from "react-icons/bi";
import {FiUserX} from "react-icons/fi";
import {BiCoin} from "react-icons/bi";
import {BiCoinStack} from "react-icons/bi";
import SavingsIcon from "@mui/icons-material/Savings";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TuneIcon from "@mui/icons-material/Tune";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import "./sidebar.scss";


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            {/* <img src={union} alt="unionlogo"  style={{width: '30px', height: '30px', left: '97px', top: '108px'}} />
            <img src={lender} alt="lenderlogo" style={{width: '138px', height: '36px', left: '132px', top: '109px'}} />       */}
            {/* <span className="logo">Lender</span>             */}
        </div>
        <br/>
        <div className="bottom">
            <ul className="icontop">
                {/* <p className='title'>MAIN</p> */}
                <li >
                    <GiSuitcase />
                    <span className="icontext">Switch Organizations</span>
                </li>
            </ul>
            <ul className="icontop">
                <p className="title">MAIN</p>
                <li >
                    <AiOutlineHome  />
                    <span className="icontext" >dashboard</span>
                </li>
            </ul>
            <br/>
            <p>CUSTOMERS</p>
            <ul className="icon">
                {/* <p className='title'>USERS</p> */}

                <Link to='/home/user'>
                <li  >
                    <GroupIcon />
                    <span>Users</span>
                </li>
                </Link>
            </ul>
            <ul>
                {/* <p className='title'>GUARANTORS</p> */}
                <li className="icon" >
                    <GroupsIcon />
                    <span>Guarantors</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>LOANS</p> */}
                <li className="icon" >
                    <PaidIcon />
                    <span>Loans</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>DECISION</p> */}
                <li className="icon" >
                    <FaRegHandshake />
                    <span>Decision Models</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>SAVINGS</p> */}
                <li className="icon" >
                    <SavingsIcon />
                    <span>Savings Icon</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>LOAN REQUEST</p> */}
                <li className="icon" > 
                    <GiReceiveMoney />
                    <span>Loan Request</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>WHITELIST</p> */}
                <li className="icon" >
                    <BiUserCheck />
                    <span>Whitelist</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>KARMA</p> */}
                <li  className="icon" >
                    <FiUserX />
                    <span>Karma</span>
                </li>
            </ul>
            <br/>
            <p>BUSINESSES</p>
            <ul>
                {/* <p className='title'>ORGANIZATION</p> */}
                <li className="icon" >
                    <BusinessCenterIcon />
                    <span>Organisation</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>LOAN PRODUCT</p> */}
                <li className="icon" >
                    <CreditScoreIcon />
                    <span>Loan Product</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>SAVINGS PRODUCT</p> */}
                <li  className="icon" >
                    <SaveAltIcon />
                    <span>Savings Product</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>FEES AND CHARGES</p> */}
                <li  className="icon">
                    <BiCoin />
                    <span>Fees and Charges</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>TRANSACTIONS</p> */}
                <li  className="icon">
                    <SwapHorizIcon />
                    <span>Transactions</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>SERVICES</p> */}
                <li  className="icon">
                    <SettingsSuggestIcon />
                    <span>Services</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>SERVICE ACCOUNT</p> */}
                <li  className="icon">
                    <ManageAccountsIcon/>
                    <span>Service Account</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>SETTLEMENTS</p> */}
                <li  className="icon">
                    <ReceiptIcon />
                    <span>Settlements</span>
                </li>
            </ul>
            <ul>
                {/* <p className='title'>REPORT</p> */}
                <li  className="icon">
                    <AssessmentIcon />
                    <span>Report</span>
                </li>
            </ul>
            <br/>
            <p>SETTINGS</p>
            <ul>
                {/* <p className='title'>PREFERENCES</p> */}
                <li  className="icon">
                    <TuneIcon />
                    <span>Preferences</span>
                </li>
            </ul>
            <ul className="icon">
                <li  >
                    <BiCoinStack />
                    <span>Fees and Pricing</span>
                </li>
            </ul>
            <ul className="icon">
                {/* <p className='title'>AUDIT LOGS</p> */}
                <li>
                    <WebStoriesIcon />
                    <span>Audit Logs</span>
                </li>
            </ul>
            <ul className="icon">
                {/* <p className='title'>SYSTEMS MESSAGES</p> */}
                <li>
                    <SettingsApplicationsIcon />
                    <span>Systems messages</span>
                </li>
            </ul>
            <br/>
            <hr/>
            <ul className="icon">
                <p className="title">LOGOUT</p>
                <li>
                    <LogoutIcon />
                    <span>Logout</span>
                </li>
            </ul>
            
        </div>
    </div>
  )
};

export default Sidebar;