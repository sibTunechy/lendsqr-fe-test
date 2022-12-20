import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginState } from "../../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import {Button} from "@mui/material";
import logo from "../../images/pablosign.jpg";
import union from "../../images/Union.png";
import lender from "../../images/lendsqr.png";
import "./login.scss";
// import validation from "./Validation";

const Login = () => {
 
  const { isLoggedIn } = useSelector((store) => store.user);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home/user");
    }
  },[]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email,
       password: password};
    localStorage.setItem("email", JSON.stringify(data));
    localStorage.setItem("password", JSON.stringify(data))
    dispatch(setLoginState());
    if(data){
      navigate("/home/user");
    }
  };

  return (
    
    <div className="login">
    <div className="leftlogin">
      <div className="toplogo">
        <img src={union} alt="unionlogo"  style={{width: '30px', height: '30px', left: '97px', top: '108px'}} />
        <img src={lender} alt="lenderlogo" style={{width: '138px', height: '36px', left: '132px', top: '109px'}} />
      </div>
      <div className="loginlogo">
        <img src={logo} alt="logo"/>
      </div>
    </div>
    <div className="rightlogin">
        <h1>Welcome!</h1>
        <h2>Enter details to Login.</h2>
        <div className="emailinput">
          <input type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}/> 
        </div>
        <div className="passwordinput">
          <input type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"/>
        </div>
        <div className="forgotlink">
        <Button className="" variant="outlined" type='submit'  >FORGOT PASSWORD?</Button>
        </div>
        <br/>
        <div className="submitlink">
        <button type="submit" onClick={handleSubmit}>LOG IN</button>
        </div>
      </div>      
    </div>
  ); 
};

export default Login;