import React from 'react';
import {Link} from "react-router-dom";

const Home = () => (
  <>
    <div>This is Home page</div>
    <p>Go to form page: <Link to="/form">Form</Link></p>
  </>
);

export default Home;
