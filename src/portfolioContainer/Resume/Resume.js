import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "JavaScript",  },
    { skill: "React JS",  },
    { skill: "React Native",  },
    { skill: "Express JS",  },
    { skill: "Node JS",  },
    { skill: "Mongo Db",  },
    { skill: "Core Java", },
    { skill: "HTML", },
    { skill: "CSS",  }, 
    // ratingPercentage: 80
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Full-Stack Message Dash Board ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Delivered a RESTfull Web-based API using Node and implemented Json Web Token authentification",
      subHeading: "Technologies Used:  Reactjs, Mongo DB, Express Js, Node Js, Boostrap.",
    },
    {
      title: "African Restaurant Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online African restaurant  for showcasing African food.",
      subHeading:
        "HTML CSS and JavaScript.",
    },
    
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={" DIGITAL CAREER INSTITUTE "}
        subHeading={"WEB DEVELOPMENT STUDENT"}
        fromDate={"2021"}
         toDate={"2022"}
      />
      <ResumeHeading
        heading={"NATIONAL POLYTECHNIC BAMENDA"}
        subHeading={"HIGHER NATIONAL DIPLOMA IN ACCOUNTANCY"}
        fromDate={"2007"}
        toDate={"2009"}
      />
      <ResumeHeading
        heading={"University of Yaounde "}
        subHeading={"DEPARTMENT OF ECONOMICS AND SOCIAL SCIENCE"}
        fromDate={"2005"}
        toDate={"2006"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Work Life"}
          subHeading={"Accountant"}
          fromDate={"2010"}
          toDate={"Past"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as an Accountant in Bamenda Cooperative Credit ???????? 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            {/* - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc.
          . */}
          </span>
          <br />
          <span className="resume-description-text">
            {/* - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "} */}
          </span>
          <br />
          <span className="resume-description-text">
            {/* - I stretch my mental capacity to develope UI as per
            the given designs. */}
          </span>
          <br />
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Research"
        description="I like to challenge myself by working on projects and researching new tecknologies."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
    }
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
