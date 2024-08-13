import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import FullpageDiv from "../components/FullpageDiv";
import "./Sections.css";
import { Element } from "react-scroll";

class FirstSection extends Component {

  render() {
    return (
      <Element name="home" className="element">
        <FullpageDiv id="FirstSection">
          <div className="Section1Splitter">
            <div className="TitleSubtitle">
              <h1 className="Title">{data.title}</h1>
              <h2 className="Subtitle">{data.subtitle}</h2>
            </div>
            <div className="SocialIconDiv">
              {Object.keys(data.links).map((key) => {
                return [
                  <div>
                    <SocialIcon
                      className="SocialIcons"
                      url={data.links[key]}
                      style={{ height: 60, width: 60 }}
                    />
                  </div>,
                ];
              })}
            </div>
          </div>
        </FullpageDiv>
      </Element>
    );
  }
}

export default FirstSection;
