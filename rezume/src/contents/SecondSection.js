import React, { Component } from "react";
import data from "../data.json";
import FullpageDiv from "../components/FullpageDiv";
import "./Sections.css";
import avatar from "";
import { Element } from 'react-scroll';

class SecondSection extends Component {
  render() {
    return (
      <Element name="about" className="element">
      <FullpageDiv className="2" id="SecondSection">
        <img src={avatar} alt="Logo" className="Avatar" />
        <h2 className="SectionsTitle">{data.sections[0].title}</h2>
        <p className="AboutMeSubTitile">
          My name is : {data.sections[0].items[0].OwnerName} | I am :{" "}
          {data.sections[0].items[0].Education} | My degree level is :{" "}
          {data.sections[0].items[0].Degree} | I studied in :{" "}
          {data.sections[0].items[0].University}
        </p>
        <p className="AboutMe">
        Experienced developer with a demonstrated history of working in the web and web app development industry. UX and UI Expert, graduated from Islamic Azad University. 
        </p>
      </FullpageDiv>
      </Element>
    );
  }
}

export default SecondSection;
