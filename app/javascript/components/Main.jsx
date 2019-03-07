import React from 'react';
import ItemsList from './item/ItemsList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './authentication/signup';
import NavBar from './NavBar';

const Main = (props) => {
  return(
    <div>
      <Router>
        <div>
          <NavBar />
          <Route path='/' component={Signup} />
          <Route path='/items' component={ItemsList} />
        </div>
      </Router>
    </div>

  )
}

export default Main;
