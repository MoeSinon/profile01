import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "BACHELOR DEGREE ",
    institute: "Anhui University of Technology",
    details: `Majoring in engineering mechanics, 
    I carried out online promotional marketing on campus to promote the products I purchased,
    the result: a group chat of 200 people was built to basically meet daily expenses,
    and it was my regret that I did not learn programming in depth`
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
