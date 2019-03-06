import React, { PureComponent } from 'react';

class Signup extends React.Component {
  

  handleFormSubmit = (form) => {
    let newUser = JSON.stringify({user : {name : form.name.value, email : form.email.value, password : form.password.value}});
    fetch('http://0.0.0.0:3000/users' , {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : newUser
    })
      .then((response) => {console.log("success")})
  }

  render() { 
    let formFields = {}
    return ( 
      <div>
        <form className="form-inline" 
          onSubmit={ (e) => { 
            e.preventDefault();
            this.handleFormSubmit(formFields) ; 
            e.target.reset();
          }}>
          <div className="form-group ml-2">
            <input className="form-control m-20"  ref={input => formFields.name = input} placeholder='Enter the name'/><br></br>
            <input className="form-control m-2"  ref={input => formFields.email = input} placeholder='Enter the email'/><br></br>
            <input className="form-control m-2"  ref={input => formFields.password = input} placeholder='Enter the password'/><br></br>
          </div><br></br>
          <button className='btn btn-primary ml-14'>Sign Up</button>
        </form>
      </div> 
    );
  }
}
 
export default Signup;
