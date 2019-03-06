import React from 'react';
import ItemsList from './item/ItemsList';
import Signup from './authentication/signup';

const Main = (props) => {
  return(
    <center>
      <h1>Item list!</h1>
      <Signup />
    </center>
  )
}

export default Main;
