import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
class NavBar extends React.Component {
  render() { 
    return ( 
      <ul>
        <NavLink to="/items" >Items</NavLink>
      </ul>
     );
  }
}
 
export default NavBar;
