import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavigationBar = ({ isAuthenticated, userName, logoutUser }) => (
  <Menu stackable defaultActiveIndex={0} secondary pointing>
    <Menu.Item header as={NavLink} to='/' exact name='Would You Rather?' />
    <Menu.Item as={NavLink} to='/add' exact name='Add' />
    <Menu.Item as={NavLink} to='/leaderboard' exact name='Leaderboard' />
    <Menu.Menu position='right'>
      {isAuthenticated && <Menu.Item content={`Welcome, ${userName}`} />}
      {isAuthenticated && <Menu.Item name='Logout' onClick={logoutUser} />}
    </Menu.Menu>
  </Menu>
);

export default NavigationBar;
