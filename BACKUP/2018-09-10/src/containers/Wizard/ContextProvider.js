import React, { Component } from "react";
import PropTypes from "prop-types";
import { db } from "../../db/db";

export const WizardContext = React.createContext();

class WizardProvider extends Component {
  constructor(props) {
    super(props);

    this.state = { currentStepIndex: 0, data: "" };
  }

  componentWillMount = () => {
    db(this.callBack);
  };

  callBack = data => {
    console.log("CallBack Start");
    this.setState({ data: data });
    console.log("Call End");
  };

  // Curried function
  // Example   let add = x => (y => x + y)
  // add(2) returns (y => 2+y)
  // or it can be called let add(2)(3); // returns 5
  //
  goToStep = stepIndex => something => {
    const { steps } = this.props;

    if (stepIndex < steps.length) {
      this.setState({ currentStepIndex: stepIndex });
    } else {
      console.log(something);
    }
  };

  render() {
    const { goToStep } = this;
    const { currentStepIndex } = this.state;
    const { children, steps } = this.props;
    const { data } = this.state;

    return (
      <WizardContext.Provider
        value={{ currentStepIndex, steps, goToStep, data }}
      >
        {children}
      </WizardContext.Provider>
    );
  }
}

WizardProvider.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

WizardProvider.defaultProps = {
  steps: []
};

export default WizardProvider;
