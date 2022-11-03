import React from 'react';
import {Link} from "react-router-dom";
import useFormData from "../../store/storeForms";

const FormStep3 = () => {
  const getFormData = useFormData(state => state.formData);
  const keys = Object.keys(getFormData);
  debugger
  const list = keys.map((key, index) => {
    return <li key={index}><span>{key}:</span> <span>{getFormData[key]}</span></li>
  });

  return (
    <>
      <h1>This is Form Step 3 page!</h1>
      <p>Link to Form Step 2: <Link to="/form/step2">Form Step 2</Link></p>
      <ul>{list}</ul>
    </>
  );
}

export default FormStep3;
