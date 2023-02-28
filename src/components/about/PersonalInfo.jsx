import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Sinon", hasColor: "" },
  { meta: "last name", metaInfo: "Li", hasColor: "" },
  { meta: "Age", metaInfo: "25 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "China", hasColor: "" },
  // { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Shanghai", hasColor: "" },
  { meta: "phone", metaInfo: "+1 347 559 0493", hasColor: "" },
  { meta: "Email", metaInfo: "ceshizh01@gmail.com", hasColor: "" },
  // { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
  { meta: "langages", metaInfo: "Chinese, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
