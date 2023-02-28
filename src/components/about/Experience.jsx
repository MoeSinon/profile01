import React from "react";

const experienceContent = [
  {
    year: "2022",
    position: "Freelance",
    compnayName: "Yurun Group Co.",
    details: `The previous bad experience made me feel very disappointed,
    I have attempted to take the entrance exam for Computer Science and Technology Master degree (major in software engineering 408),
    during this period I learn programming in depth,
    I can make foreign trade independent website,
    I learn to make unity game,WeChat mini game, 
    I made fitness app,
    I think I can start again.`
  },
  {
    year: "2021",
    position: "Sourcing Engineer",
    compnayName: "Yurun Group Co.",
    details: `I received an offer from Yurun Group.
    But unfortunately it went into bankruptcy and reorganization`,
  },
  {
    year: "2020",
    position: "Curtain wall structure verification",
    compnayName: "China Construction Third Bureau Decoration Co.",
    details: `I entered the China Construction System, 
    I did my professional counterpart, structural design, 
    but I did not feel satisfied, 
    I hope to do some achievement work can make me go farther.
    However,
    I was involved in two assignments,
    the structural verification of Nanjing Yangtze River International Convention and Exhibition Center and Hefei CITIC Bank.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
