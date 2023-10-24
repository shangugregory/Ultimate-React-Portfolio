import React from "react";
import gregg from "../../assets/Home/original.jpg";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="div">
      <div className="container">
        <h1 className="about-me">About Me</h1>
        <p className="why-choose-me">why choose me?</p>
        <div className="detail-container">
          <div className="about-photo">
            <img src={gregg} alt="Unable to Load the photo" />
          </div>
          <div className="my-description">
            <p>
              Am dedicated and results-driven IT specialist with 2 years of
              experience in network administration, and software development.
              Seeking to leverage my technical skills and expertise to contr
              +abute to the success of my country. Adept at configuring and
              maintaining server environments, implementing advanced security
              measures, or leading cross-functional IT teams to drive efficiency
              and productivity. Committed to staying updated with emerging
              technologies and delivering top-notch IT solutions.
            </p>

            <div className="highlights">
              <h2>Here Are Few Highlights</h2>
              <ul>
                <li>Full Stack web and Mobile Development</li>
                <li>Interactive front end as per the design</li>
                <li>React and React Native</li>
                <li>Redux for state management</li>
                <li>Building Rest API</li>
                <li>Managing Database</li>
              </ul>
            </div>
            <div className="buttons">
              <button className="btn primary-btn">Hire me</button>
              <a href="CV.pdf" download="Gregory CV.pdf">
                <button className="btn highlighted-btn">Get My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
