import React from "react";
import "./Education.css";
export default function Education(props) {
  return (
    <>
      {props.educations.map((education, index) => (
        <div className="education-container">
          <div className="edu-div1">
            <div className="edu-div2">
              <h1 className="education-level">{education.EducationLevel} </h1>
            </div>
            <div className="btn-div">
              <button className="btn highlighted-btn">{education.year}</button>
            </div>
          </div>
          <div className="edu-div3">
            <p className="div-desc">{education.course}</p>
          </div>
        </div>
      ))}
    </>
  );
}
