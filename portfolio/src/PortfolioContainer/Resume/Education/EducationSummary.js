import React, { useState } from "react";
import Education from "./Education";

export default function EducationSummary() {
  const [education, setEducation] = useState([
    {
      EducationLevel: "Kibabii University",
      course: "BACHELOR OF SCIENCE INFORMATION TECHNOLOGY",
      year: "2019 - 2023",
    },
    {
      EducationLevel: " HIGH SCHOOL",
      course: "AIC LESSOS HIGH SCHOOL",
      year: "2014 - 2018",
    },

    {
      EducationLevel: " PRIMARY SCHOOL",
      course: "MITONI MITATU PRIMARY SCHOOL",
      year: "2004 - 2013",
    },
  ]);
  return (
    <div>
      <Education 
      educations={education}
      />
    </div>
  );
}
