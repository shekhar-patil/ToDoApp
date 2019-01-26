import React from 'react';
import Item from './Item';
import NewItem from './NewItem';

class ItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFormSubmit(name){
    let newItem = JSON.stringify({item : {name : name , mark : false}});
    fetch('http://localhost:3000/api/v1/items' , {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : newItem
    }).then((response) => {return response.json()})
    .then((item)=>{
      this.addNewItem(item)
    })
    console.log("sjdfb")
  }

  handleDelete(id){
    
    fetch(`http://localhost:3000/api/v1/items/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      this.deleteItem(id)
      })
  }
  
  deleteItem(id){
    const newItems = this.state.items.filter( (item) => item.id !== id);
    this.setState({
      items: newItems
    })
  }
  
  addNewItem(item){
    this.setState({
      items: this.state.items.concat(item)
    })
  }
  componentDidMount(){
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }

  render(){
    const { items } = this.state;

    return(
      <div>
        <NewItem
          handleFormSubmit={this.handleFormSubmit}
        />
        {items.map((item) => {
          return (
            <Item 
              item={item} 
              key={item.id}
              handleDelete={this.handleDelete} 
            />
          )
        })}
      </div>
    )
  }
}

export default ItemsList;
