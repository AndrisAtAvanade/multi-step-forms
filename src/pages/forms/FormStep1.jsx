import React from 'react';
import {useNavigate} from "react-router-dom";
import useFormData from "../../store/storeForms";

const FormStep1 = () => {
  const navigate = useNavigate();
  const formRef = React.createRef();
  const setFormData = useFormData(state => state.setFormData);

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const formData = Object.fromEntries(data);
    const obj = {[formRef.current.name]: formData}
    setFormData(obj);
    navigate('/form/step2');
  }

  return(
    <>
      <h1>This is Form Step 1 page!</h1>
      <h3>Add your name</h3>

      <form name="formStep1" ref={formRef}>
        <label htmlFor="userName">
          <p>Your Name</p>
          <input id="userName" type="text" name="userName" />
        </label>
        <label htmlFor="userSurname">
          <p>Your Surname</p>
          <input id="userSurname" type="text" name="userSurname"/>
        </label>
        <br/>
        <button type="submit" onClick={onClickHandler}>Next: Step 2</button>
      </form>
    </>
  )
};

export default FormStep1;
