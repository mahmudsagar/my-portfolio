import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Bsc in Computer Sceince & Engineering"
          where="National University of Bangladesh"
          from="February 2016"
          to="Present"
        />
        <Widecard
          title="Higher School Cirtificate"
          where="Stamford College, Dhaka"
          from="2013"
          to="2015"
        />
        <Widecard
          title="Secondary School Cirtificate"
          where="Beer Srestho Munshi Abdur Rauf Public College, Dahka"
          from="2007"
          to="2013"
        />
      </div>
    );
  }
}
export default Education;
