import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1>404 Not Found</h1>
    <p>Please check the link again.</p>
    <Link to="/">Go to Home</Link>
  </>
);

export default NotFound;
