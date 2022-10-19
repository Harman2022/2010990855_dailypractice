import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Read.css";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    // console.log(data);
    let { fullname, email, username, id } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("name", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
  };

  const getData = () => {
    axios.get(`http://localhost:5000/data`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const deleteAPIData = (id) => {
    axios.delete(`http://localhost:5000/data/${id}`).then(() => {
      getData();
    });
  };

  const [q, setQ] = useState("");
  const [searchParam] = useState(["email", "username"]);

  function search() {
    return APIData.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <>
      <div className="read-container animate__animated animate__fadeIn animate__slow">
        <center>
          <input
            type="search"
            placeholder="Search"
            className="search-bar"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <table className="table-data ">
            <thead>
              <tr className="thead">
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {search(APIData).map((data) => {
                return (
                  data.id > 0 && (
                    <tr>
                      <td>{data.fullname}</td>
                      <td>{data.email}</td>
                      <td>{data.username}</td>
                      <td>
                        <Link to="/update">
                          <input
                            type="button"
                            value="Update"
                            onClick={() => setData(data)}
                            className="btn update-btn"
                          />
                        </Link>
                      </td>
                      <td>
                        <input
                          type="button"
                          value="Delete"
                          onClick={() => deleteAPIData(data.id)}
                          className="btn delete-btn"
                        />
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default Read;
