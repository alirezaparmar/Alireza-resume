import React, { Component } from "react";
import "./Sections.css";
import { Icon } from "@iconify/react";
import magicIcon from "@iconify/icons-ls/magic";
import { Link } from "react-scroll";

class Header extends Component {
  state = {
    wandcolor: "white",
    colorChanged: false,
    homecolor: "black",
    aboutcolor: "black",
    skillcolor: "black",
  };

  ChangeColor = () => {
    this.setState({
      wandcolor: this.state.wandcolor === "white" ? "yellow" : "white",
    });
  };

  ChangeBgColor = () => {
    if (this.state.colorChanged == false) {
      document.getElementById("FirstSection").style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      document.getElementById("SecondSection").style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      document.getElementById("ThirdSection").style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        "," +
        Math.floor(Math.random() * 256) +
        ")";
      this.setState({
        colorChanged: true,
      });
    } else {
      document.getElementById("FirstSection").style.backgroundColor =
        "rgb(131, 197, 197)";
      document.getElementById("SecondSection").style.backgroundColor =
        "lightgrey";
      document.getElementById("ThirdSection").style.backgroundColor =
        "burlywood";
      this.setState({
        colorChanged: false,
      });
    }
  };

  render() {
    return (
      <div className="header">
        <ul className="UlLeft">
          <div
            style={{
              color: this.state.wandcolor,
            }}
            onMouseOver={() => {
              this.ChangeColor();
            }}
            onMouseOut={() => {
              this.ChangeColor();
            }}
            onClick={() => {
              this.ChangeBgColor();
              this.ChangeColor();
            }}
          >
            <Icon icon={magicIcon} className="MagicWand" />
          </div>
        </ul>
        <ul>
          <li
            style={{
              color: this.state.homecolor,
            }}
            onMouseOver={() => {
              this.setState({
                homecolor: this.state.homecolor === "black" ? "white" : "black",
              });
            }}
            onMouseOut={() => {
              this.setState({
                homecolor: this.state.homecolor === "black" ? "white" : "black",
              });
            }} 
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Home
            </Link>
          </li>
          <li
            style={{
              color: this.state.aboutcolor,
            }}
            onMouseOver={() => {
              this.setState({
                aboutcolor:
                  this.state.aboutcolor === "black" ? "white" : "black",
              });
            }}
            onMouseOut={() => {
              this.setState({
                aboutcolor:
                  this.state.aboutcolor === "black" ? "white" : "black",
              });
            }}
          >
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About Me
            </Link>
          </li>
          <li
            style={{
              color: this.state.skillcolor,
            }}
            onMouseOver={() => {
              this.setState({
                skillcolor:
                  this.state.skillcolor === "black" ? "white" : "black",
              });
            }}
            onMouseOut={() => {
              this.setState({
                skillcolor:
                  this.state.skillcolor === "black" ? "white" : "black",
              });
            }}
          >
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              My Skills
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
