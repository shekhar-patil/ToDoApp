import React from 'react';

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

    var items = this.state.items.map((item) => {
      return(
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }
}

export default ItemsList;