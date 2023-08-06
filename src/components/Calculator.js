import React, { Component } from "react";
import * as math from "mathjs";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "Del") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: math.evaluate(this.state.result) + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Basic Calculator</h1>
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

class KeyPad extends Component {
  render() {
    return (
      <div className="button">
        <button name="7" onClick={(e) => this.props.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => this.props.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => this.props.onClick(e.target.name)}>
          9
        </button>
        <button name="/" onClick={(e) => this.props.onClick(e.target.name)}>
          /
        </button>
        <br />

        <button name="4" onClick={(e) => this.props.onClick(e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => this.props.onClick(e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => this.props.onClick(e.target.name)}>
          6
        </button>
        <button name="*" onClick={(e) => this.props.onClick(e.target.name)}>
          *
        </button>
        <br />

        <button name="1" onClick={(e) => this.props.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => this.props.onClick(e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => this.props.onClick(e.target.name)}>
          3
        </button>
        <button name="-" onClick={(e) => this.props.onClick(e.target.name)}>
          -
        </button>
        <br />

        <button name="." onClick={(e) => this.props.onClick(e.target.name)}>
          .
        </button>
        <button name="0" onClick={(e) => this.props.onClick(e.target.name)}>
          0
        </button>
        <button name="=" onClick={(e) => this.props.onClick(e.target.name)}>
          =
        </button>
        <button name="+" onClick={(e) => this.props.onClick(e.target.name)}>
          +
        </button>
        <br />

        <button name="C" onClick={(e) => this.props.onClick(e.target.name)}>
          C
        </button>
        <button name="Del" onClick={(e) => this.props.onClick(e.target.name)}>
          Del
        </button>
        <br />
      </div>
    );
  }
}

class Result extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default Calculator;
