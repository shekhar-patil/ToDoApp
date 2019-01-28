import React from 'react';

class Item extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let id = this.props.item.id
      let item = {id: id, name: name , mark : false}
      this.props.handleUpdate(item)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render() { 
    let name = this.state.editable ? <input 
      type='text' 
      ref={input => this.name = input} 
      defaultValue={this.props.item.name}
    /> : <h3></h3>
    return(
      <div className='w-100'>
        {name}
        <span className='badge m-2'>{this.props.item.name}</span>
        <button 
          className='btn btn-primary' 
          onClick={() => this.handleEdit()}>
          {this.state.editable? 'Submit' : 'Edit'}
        </button>
        <button 
          className='btn btn-danger' 
          onClick={() => this.props.handleDelete(this.props.item.id)}
          >Delete
        </button>
        <br></br>
      </div>
    )
  }
}
 
export default Item;
