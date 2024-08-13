import React, { Component } from "react";
import data from "../data.json";
import FullpageDiv from "../components/FullpageDiv";
import SkillBox from "../components/SkillBox";
import { Element } from 'react-scroll';

import "./Sections.css";
class ThirdSection extends Component {
  render() {
    return (
    <Element name="skill" className="element">
      <FullpageDiv className="3" id="ThirdSection">       
        <h2 className="SectionsTitle">{data.sections[1].title}</h2>
        <div className="SkilksContainer">
            {data.sections[1].items.map((task) => {
              return [
                <SkillBox skill={task}/>
              ];
            })}
        </div>
      </FullpageDiv>
    </Element>
    );
  }
}

export default ThirdSection;
