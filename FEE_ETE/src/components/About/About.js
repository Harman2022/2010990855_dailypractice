import "./About.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";


const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="cont-inner-div">
          <center className="animate__animated animate__fadeInUp animate__slow">
            About Us
          </center>
        </div>
      </div>
      <div className="about-second-container">
        <div className="about-innerdiv">
          <img
            src={img1}
            className="img1 animate__animated animate__fadeInLeft animate__slow"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slow">
            <h2 className="about-div-title">Duis aute</h2>
           <i>
           Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
           Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur
           </i>. 
            
              
          </p>
        </div>
        
        <div className="about-innerdiv">
          <p className="about-info-div1 animate__animated animate__fadeInRight animate__slower">
            <h2 className="about-div-title">Excepteur</h2>
            <i>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
            Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest
            Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.
            Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. </i>
            
          </p>
          <img
            src={img2}
            className="img2 animate__animated animate__fadeInRight animate__slower"
            alt="noimg"
          />
        </div>
        
        <div className="about-innerdiv">
          <img
            src={img3}
            className="img1 animate__animated animate__fadeInLeft animate__slower"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slower">
            <h2 className="about-div-title">Iugiat </h2>
            <i>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
