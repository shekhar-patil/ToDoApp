import React from 'react';

const NewItem = (props) => {
  let formFields = {}
 
  return(
    <div>
    <form className="form-inline" 
      onSubmit={ (e) => { 
        props.handleFormSubmit(formFields.name.value) ; 
        e.target.reset();
      }}>
      <div className="form-group ml-2">
        <input className="form-control m-2"  ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      </div> 
      &nbsp;&nbsp;&nbsp;
      <button className='btn btn-primary mb-2'>Add Item</button>
    </form>
    <br></br>
    <br></br>
    </div>
  )
}

export default NewItem;