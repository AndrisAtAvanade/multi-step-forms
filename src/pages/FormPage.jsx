import React from 'react';
import {Link, Outlet} from "react-router-dom";

const FormPage = () => (
  <>
    <div>This is Form page!</div>
    <p>Go to Home Page: <Link to="/">Home</Link></p>
    <p>Start form journey: <Link to="/form/step1">Step 1</Link></p>

    <Outlet />
  </>
)

export default FormPage;
