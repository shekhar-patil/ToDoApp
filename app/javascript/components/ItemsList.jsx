import React from 'react';
import Item from './Item';

class ItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
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
        {items.map((item) => {
          return (
            <Item item={item} key={item.id} />
          )
        })}
      </div>
    )
  }
}

export default ItemsList;
