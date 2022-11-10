import React from 'react';
import {Link} from "react-router-dom";
import useFormData from "../../store/storeForms";

const getFormName = (formName) => {
  const formObject = {
    formStep1: 'Title: Form Step 1',
    formStep2: 'Title: Form Step 2',
  };
  return formObject[formName];
}

const FormStep3 = () => {
  const formData = useFormData(state => state.formData);
  const formNames = Object.keys(formData);
  const listOfForms = formNames.map((name, index) => {
    return (
      <div key={name}>
        <h2>{getFormName(name)}</h2>
        <ul>
          {Object.keys(formData[name]).map((key, index) => {
            return <li key={index}>{key}: {formData[name][key]}</li>
          })}
        </ul>
      </div>
    )

    //return <li key={index}><span>{key}:</span> <span>{getFormData[key]}</span></li>
  });

  return (
    <>
      <h1>This is Form Step 3 page!</h1>
      <p>Link to Form Step 2: <Link to="/form/step2">Form Step 2</Link></p>
      {listOfForms}
    </>
  );
}

export default FormStep3;
