import React from 'react';

const NewItem = (props) => {
  let formFields = {}
 
  return(
    <div>
    <form className="form-inline" 
      onSubmit={ (e) => { 
        e.preventDefault();
        props.handleFormSubmit(formFields.name.value) ; 
        e.target.reset();
      }}>
      <div className="form-group ml-2">
        <input className="form-control m-2"  ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      </div> 
      <button className='btn btn-primary ml-14'>Add Item</button>
    </form>
    </div>
  )
}

export default NewItem;
