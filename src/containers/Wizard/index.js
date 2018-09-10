import React from "react";
import WizardContextProvider, { WizardContext } from "./ContextProvider";
import { NavBar } from "../../components";
import PageTemplate from "./PageTemplate";
import steps from "../../mockData";
import { db } from "../../db/db";
import axios from "axios";

const constructInitialValues = data => {
  const root = {};
  //console.log("data", data);
  data.sections.forEach(s => {
    root[s.name] = {};

    s.fields.forEach(f => {
      root[s.name][f.name] = f.initialValue;
    });
  });
  //console.log("root", root);
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
    {({ currentStepIndex, steps, goToStep, data }) => {
      //
      //
      // console.log("data", data);
      // axios
      //   .get("http://127.0.0.1:3002/api/dictionary/")
      //   .then(function(response) {
      //     console.log("Axios results: ", response.data.results[0].props);
      //     const aaa = response.data.results[0].props; //response
      //     //  alert("InAxios", response)
      //     //////////////////////////////////////
      //   })
      //   .catch(function(error) {
      //     //alert("Axios ")
      //     console.log("Error occured retrieving data! " + error);
      //   });

      //console.log("Current Step Index", currentStepIndex);
      //console.log("goToStep", goToStep);
      //const steps1 = getStepsDB();

      const initialValues = {};

      steps = data;
  
      if (steps === "") {
        return <div />;
      }

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
    } // This is the matching
    }
  </WizardContext.Consumer>
);

export default () => (
  <WizardContextProvider steps={steps}>
    <NewWizard />
  </WizardContextProvider>
);
