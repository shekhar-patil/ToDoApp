import React from 'react';

class Item extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleMark = this.handleMark.bind(this)
  }

  handleMark(markBooleanValue){
    const name = this.props.item.name
    const id = this.props.item.id
    const mark = markBooleanValue
    const item = {id: id, name: name , mark : mark}
    this.props.handleUpdate(item)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let id = this.props.item.id
      let item = {id: id, name: name , mark : this.props.item.mark}
      this.props.handleUpdate(item)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render() { 
    let name = this.state.editable ? <h3><input 
      
      type='text' 
      ref={input => this.name = input} 
      defaultValue={this.props.item.name}
    /></h3> : <h3>{this.props.item.name}</h3>
    return(
      <tr>
          <th style={{width: "20%"}}>
            <center>
              <input type="checkbox" checked={this.props.item.mark} onClick={() => this.handleMark(!this.props.item.mark)}></input>
            </center>
          </th>
          
          <th style={{width: "40%"}}>
          <center>{name}</center>
          </th>

          <th style={{width: "20%"}}>
          <center>
          <button 
            className='btn btn-primary' 
            onClick={() => this.handleEdit()}>
            {this.state.editable? 'Submit' : 'Edit'}
          </button>
          </center>
          </th>
          <th style={{width: "20%"}}>
          <center>
          <button 
            className='btn btn-danger' 
            onClick={() => this.props.handleDelete(this.props.item.id)}
            >Delete
          </button>
          </center>
          </th>

        </tr>
    )
  }
}
 
export default Item;
