import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = ({isAuthenticated, userName, logoutUser}) => (
  <div>
    <NavLink to="/" activeClassName="selected"><h1>Would You Rather</h1></NavLink>
    <NavLink to="/add" activeClassName="selected">Add</NavLink> 
    <NavLink to="/leaderboard" activeClassName="selected">Leaderboard</NavLink>
    {isAuthenticated && <p>Welcome, {userName}</p>} 
    {isAuthenticated && <button onClick={logoutUser}>Logout</button>}
  </div>
);

export default NavigationBar;
