import React from 'react';

const NewItem = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { 
      props.handleFormSubmit(formFields.name.value) ; 
      e.target.reset();
      }}>
      
      <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      <button>Submit</button>
    </form>
  )
}

export default NewItem;