import "./App.css";
import "animate.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import Image from "./components/ImageUpload/Image";
// import AllPost from "./components/ImageUpload/AllPost";
import logo from "./logo.png";

function App() {
  return (
    <>
      <div className="container">
        <ul className="navbar">
        <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
         
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Book Room
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/image" className="nav-link">
              UploadImage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active">
              Contact Us
            </Link>
          </li>
          
         
          <Link to="/">
            <img src={logo} alt="noimg" className="logoimg" />
          </Link>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />
          <Route path="/image" element={<Image />} />
          <Route path="/read" element={<Read />} />
          {/* <Route path="/gallery" element={<AllPost />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
