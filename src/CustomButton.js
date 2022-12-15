import React, { Component } from "react";

class CustomButton extends Component {
  state = {
    isWarn: false
  };
  clickEvent = () => {
    this.setState({ isWarn: !this.state.isWarn });
  };
  render() {
    return (
      <>
        <button
          className={`custom-btn ${this.props.warnMessage ? "warn" : ""} ${
            this.props.hint ? "hint" : ""
          }`}
          onClick={this.clickEvent}
        >
          {this.props.text}
        </button>
        <p className="custom-btn__hint">Hint: {this.props.hint}</p>
        <p className="custom-btn__warn">
          Warn: {this.state.isWarn && this.props.warnMessage}
        </p>
      </>
    );
  }
}

export default CustomButton;
