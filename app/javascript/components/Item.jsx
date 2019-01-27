import React from 'react';

class Item extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
  }
  
  render() { 
    return(
      <div className='w-100'>
        <span className='badge m-2'>{this.props.item.name}</span>
        <button className='btn btn-primary'>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button className='btn btn-danger' onClick={() => this.props.handleDelete(this.props.item.id)}>Delete</button>
      </div>
    )
  }
}
 
export default Item;
