import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";
import CV from "../../../assets/Home/LINDA_AWASIRI_RESUME.pdf.pdf"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          
            <div className="colz-icon">
              <a href="https://www.facebook.com/lindy.roy.9">
                <i className="fa fa-facebook-square" />
              </a>
              {/* <a href="">
                <i className="fa fa-google-plus-square" />
              </a> */}
              <a href="https://www.instagram.com/lindyroy/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/linda-awasiri-482536204/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://twitter.com/LindaRo99893626">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Linda</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1
               
              >
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev😎",
                    1000,
                    "Full Stack Developer!💻",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React js📱",
                    
                    1000,
                    "Very Passionate with my job 🙂",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            I like to craft solid and scalable front and backend products with great user experience
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href= {CV} download="Linda's.pdf">
              <button className="btn highlighted-btn"> Download CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
