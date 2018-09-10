import React from "react";
import { FormSection, reduxForm, change, dispatch } from "redux-form";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import FormGenerator from "./FormGenerator";

const PageTemplate = props => {
  const { handleSubmit, isShown, stepName } = props;
  console.log("PropsS:", props);

  axios
    .get("http://127.0.0.1:3050/api/dictionary/")
    .then(function(response) {
      console.log("Axios results: xx", response.data.results[0].props);
      // step1 = response.data.results[0].props; //response
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

  if (!isShown) {
    return <div />;
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 15 }}>
      <FormSection name={stepName} component="div">
        <Row>
          <Col md={7}>
            <FormGenerator />
            <button type="submit" style={{ float: "right" }}>
              Next
            </button>
          </Col>
        </Row>
      </FormSection>
    </form>
  );
};

PageTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  stepName: PropTypes.string.isRequired,
  documentsTypes: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

const PageTemplateForm = reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
  // },
  // function(dispatch) {
  //     return {
  //         // This will be passed as a property to the presentational component
  //         changeFieldValue: function(field, value) {
  //             dispatch(change('wizard', field, value))
  //         }
  //     }
})(PageTemplate);

export default PageTemplateForm;
