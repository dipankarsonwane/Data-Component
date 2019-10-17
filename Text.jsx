import React, { Component } from "react";
import "./text.scss";

class TextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.textData);
  }
  render() {
    return (
      <div className="text-container">
        <div className="total">
          {this.props.textData.Total}
          <p>{this.props.textData.Title}</p>
        </div>
        <div className="division">
          <div className="profit">{this.props.textData.Green}</div>
          <div className="loss">{this.props.textData.Red}</div>
        </div>
        <div className="division-icon">
          <div className="profit-icon">
            <img
              className="icon"
              alt="upArrow"
              src={require("../../assets/icons/up.png")}
            />
          </div>
          <div className="loss-icon">
            <img
              alt="downArrow"
              className="icon"
              src={require("../../assets/icons/down.png")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TextComponent;
