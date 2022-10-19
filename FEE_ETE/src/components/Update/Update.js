import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../Register/img1.png";

const Update = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setUserName(localStorage.getItem("username"));
  }, []);

  let history = useNavigate();

  const updateAPIData = () => {
    axios
      .put(`http://localhost:5000/data/${id}`, {
        fullname,
        email,
        username,
      })
      .then(() => {
        alert("data updated successfully");
        history("/read");
      });
  };

  return (
    <>
      <div className="register-container">
        <div className="col-25 animate__animated animate__fadeInLeft">
          <img src={img1} alt="noimg" className="img-left" />
        </div>
        <div className="col-75 animate__animated animate__fadeInRight">
          <div className="right-div">
            <div>
              <div className="label">Name</div>
              <div>
                <input
                  type="text"
                  placeholder="your name"
                  className="res-inp"
                  value={fullname}
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
                  value={email}
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
                  value={username}
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
                onClick={updateAPIData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
