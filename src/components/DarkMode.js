import React, { Component } from "react";
import "../styles/DarkMode.css";

class DarkMode extends Component {
  constructor() {
    super();
    this.lightTheme = "light";
    this.darkTheme = "dark";
    this.theme = localStorage.getItem("theme") ?? "light";
    document.body.classList.add(this.theme);
    this.state = {
      text: this.theme === this.lightTheme ? "Sun" : "Moon",
    };
  }

  switchTheme = (e) => {
    let { lightTheme, darkTheme, theme } = this;
    if (theme === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      this.theme = lightTheme;
    } else {
      document.body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      this.theme = darkTheme;
    }
    this.setState({
      text: this.theme === this.lightTheme ? "Sun" : "Moon",
    });
  };

  render() {
    return (
      <button id="darkMode" onClick={(e) => this.switchTheme(e)}>
        {this.state.text}
      </button>
    );
  }
}

export default DarkMode;
