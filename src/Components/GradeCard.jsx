import React from "react";
import "../CSS/GradeCard.css"
import Logo from "../Image/logo.png"
import verificationImg from "../Image/verificationImg.png"

const CardDetails = ({ company, grade, designation, period }) => {

  return (
    <div className="maindivCurrentCompany">
      <div className="Card">
        <div className="StructureSet">
          <img src={Logo} />
          <h3 className="companyName">{company}</h3>
          <img src={verificationImg} />
        </div>
        <div className='vertical-border'></div>
        <div>
          <h1 className="CardA">{grade.label}</h1>
          <p className="CardGrade">Grade</p>
        </div>
        <div className='vertical-border'></div>
        <div className="DesignationDiv">
          <p className="Designation">Designation </p>
          <p className="Types">{designation} </p>
        </div>
        <div className='vertical-border'></div>
        <div className="WorkingPeriodDiv">
          <p className="WorkingPeriod">Working Period</p>
          <p className="period">{period}</p>
        </div>
        <div>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
};


const GradeCard = () => {
  const experienceData = [
    {
      company: "Tata Consultancy Services",
      grade: { label: "A", color: "red" },
      designation: "Computer Programmer",
      period: "June, 2023 - September, 2024",
    },
    {
      company: "The North Face",
      grade: { label: "B", color: "blue" },
      designation: "Computer System Analyst",
      period: "January, 2021 - April, 2023",
    },
    {
      company: "Hewlett Packard Enterprise",
      grade: { label: "C", color: "purple" },
      designation: "Cloud Network Engineer",
      period: "April, 2018 - December, 2020",
    },
    {
      company: "HCL Technologies",
      grade: { label: "C", color: "purple" },
      designation: "Cloud Administrator",
      period: "May, 2015 - April, 2018",
    },
  ];

  return (
    <div className="container">
      {experienceData.map((exp, index) => (
        <CardDetails
          key={index}
          company={exp.company}
          grade={exp.grade}
          designation={exp.designation}
          period={exp.period}
        />
      ))}
    </div>
  );
};

export default GradeCard;