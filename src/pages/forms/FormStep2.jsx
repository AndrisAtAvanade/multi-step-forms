import React from 'react';
import {useNavigate} from "react-router-dom";
import useFormData from "../../store/storeForms";

const FormStep2 = () => {
  const navigate = useNavigate();
  const formRef = React.createRef();
  const setFormData = useFormData(state => state.setFormData);

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const formData = Object.fromEntries(data);
    setFormData(formData);
    navigate('/form/step3');
  }

  return(
    <>
      <h1>This is Form Step 2 page!</h1>
      <h3>Add your favourite car and colour</h3>

      <form ref={formRef}>
        <label htmlFor="car">
          <p>Favourite car</p>
          <input id="car" type="text" name="car"/>
        </label>
        <label htmlFor="color">
          <p>Favourite Color</p>
          <input id="color" type="text" name="color"/>
        </label>
        <br/>
        <label htmlFor="list">
          <select defaultValue="Three" name="selectBox">
            <option value="One">1</option>
            <option value="Two">2</option>
            <option value="Three">3</option>
            <option value="Four">4</option>
          </select>
        </label>
        <br/>
        <button type="submit" onClick={onClickHandler}>Next: Step 3</button>
      </form>
    </>
  )
};

export default FormStep2;
