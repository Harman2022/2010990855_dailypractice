import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./img1.png";
import axios from "axios";




const Register = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  let history = useNavigate();

  const postData = () => {
    console.log(fullname, email, username);
    axios
      .post("http://localhost:5000/data", {
        fullname,
        email,
        username,
      })
      .then(() => {
        alert("data saved successfully");
        history("/read");
      });
  };

  return (
    <>
      <div className="register-container">
        <div className="col-25 ">
          <img src={img1} alt="noimg" className="img-left" />
        </div>
        <div className="col-75 ">
          <div className="right-div">
            <div>
              <div className="label">Name</div>
              <div>
                <input
                  type="text"
                  placeholder="your name"
                  className="res-inp"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Email</div>
              <div>
                <input
                  type="email"
                  placeholder="your email"
                  className="res-inp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Username</div>
              <div>
                <input
                  type="text"
                  placeholder="your username"
                  className="res-inp"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Password</div>
              <div>
                <input
                  type="password"
                  placeholder="your password"
                  className="res-inp"
                />
              </div>
            </div>
            <div>
              <input
                type="button"
                value="Submit"
                className="res-btn"
                onClick={postData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <div className="content-wrapper ">
          <div className="logo-container">
            
          </div>
          <div className="footer-link">
            <Link path="/" className="link">
             
            </Link>
            <Link path="/about" className="link">
             
            </Link>
            <Link path="/contact" className="link">
              
            </Link>
          </div>
          <div className="icons">
            <div className="icon-wrapper">
              
            </div>
            <div className="icon-wrapper">
             
            </div>
            <div className="icon-wrapper">
              
            </div>
          </div>
        </div>
        <div className="trademark ">
         
        </div>
      </div>
    </>
  );
};

export default Register;