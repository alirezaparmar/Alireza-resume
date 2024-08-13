import React, { Component } from "react";
import "./SkillBox.css";

class SkillBox extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="Skill">
      <h3>{skill.Content.title}</h3>
      <h5>{skill.Content.lenght} experience</h5>
      <i class={skill.Content.logo}></i>
      </div>
    );
  }
}

export default SkillBox;
