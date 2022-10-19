import img3 from "./img3.jpg";
import main1 from "./main1.jpeg";
import main2 from "./main2.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-img-container">
        <div>
          <img
            className="main-img animate__animated animate__fadeInLeft animate__slow"
            src={main1}
            alt="noimg"
          />
        </div>
        
        <h1 className="welcome"> GRAND RESTO WELCOMES YOU~</h1>
        <div className="info-div">
       
          <img
            src={main2}
            alt="noimg"
            className="animate__animated animate__fadeInRight animate__slow"
          />
        </div>
      </div>
      <div className="home-container">
        <center>
          <p className="home-container-heading">
          <h2>Arrive as guests, leave as friends!</h2>
          </p>
          <p className="home-container-data">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit.
            <br />
           Ullamco laboris nisi ut aliqu consequat. 
          </p>
          <button className="home-container-btn">Learn More</button>
        </center>
      </div>
     
      <div className="flex-box-container">
        <div className="flex-item">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
            Lorem Ipsum
             
             
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
            Repellat Nihil
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
            Ad ad velit qui
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
