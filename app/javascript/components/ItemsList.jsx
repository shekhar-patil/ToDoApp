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
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.getIndex = this.getIndex.bind(this)
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

  handleUpdate(item){
    fetch(`http://localhost:3000/api/v1/items/${item.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({item: item}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateItem(item)
      })
  }

  getIndex(value, items ) {
    for(let i = 0; i < items.length; i++) {
        if(items[i]['id'] === value) {
            return i;
        }
    }
    return -1;
  }

  updateItem(item){

    const Items = [...this.state.items]
    const Index = this.getIndex(item.id , this.state.items)
    Items[Index] = {...item}
    this.setState({
      items: Items
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
              handleUpdate = {this.handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default ItemsList;
