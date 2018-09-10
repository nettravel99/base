import React from "react";
import { dispatch } from 'redux-form'
import WizardContextProvider, { WizardContext } from "./ContextProvider";
import { NavBar } from "../../components";
import PageTemplate from "./PageTemplate";
import steps from "../../mockData";
import { db } from "../../db/db";
import axios from "axios";

const constructInitialValues = data => {
  const root = {};
  console.log("data", data);
  data.sections.forEach(s => {
    root[s.name] = {};

    s.fields.forEach(f => {
      root[s.name][f.name] = f.initialValue;
    });
  });
  console.log("root", root);
  return root;
};

const getStepsDB = () => {
  console.log("Db Called");
  db(dbCallBack);
  return null;
};

const dbCallBack = data => {
  const ddd = data;
  console.log("Call Back Data:", data);
};

const NewWizard = props => (
  /////////////////////////////////////////////////////////////////

  <WizardContext.Consumer>

    {({ currentStepIndex, steps, goToStep }) => {
    //////////////////////////////
      var step1={};
      axios
        .get("http://127.0.0.1:3050/api/dictionary/")
        .then(function(response) {
          console.log("Axios results: xx", response.data.results[0].props);
          step1 = response.data.results[0].props; //response
          console.log("Props:", props);
          //dispatch("fieldName","George","");
          //this.props.fields.firstName.onChange("This is the ne")
          //this.props.changeFieldValue('firstName', 'New first name')
          ////////////////////////////
          })
          .catch(function(error) {
            //alert("Axios ")
            console.log("Error occured retrieving data! " + error);
          });

          ///////////////////////////

          //  alert("InAxios", response)
    //////////////////////////////////////
  console.log("Props in Wizard", props)
      //console.log("Current Step Index", currentStepIndex);
      //console.log("goToStep", goToStep);
      //const steps1 = getStepsDB();
      //steps = steps1;
      const initialValues = {};
      //console.log("steps", steps);
      console.log("Steps1:",step1);
      console.log("Steps after Axios:", steps)
      steps.forEach(s => {
        initialValues[s.name] = constructInitialValues(s);
      });
      return (
        <div>
          <NavBar
            stepIndex={currentStepIndex}
            steps={steps}
            goToStep={goToStep}
          />
          {steps.map((step, index) => (
            <PageTemplate
              key={`wizardStep_${index + 1}`}
              initialValues={initialValues}
              stepName={step.name}
              documentsTypes={step.documentsTypes}
              isShown={currentStepIndex === index}
              onSubmit={goToStep(index + 1)}
            />
          ))}
        </div>
      );
  ////////////////////////axios end went here




  }
  }
  </WizardContext.Consumer>
);

export default () => (
  <WizardContextProvider steps={steps}>
    <NewWizard />
  </WizardContextProvider>
);
