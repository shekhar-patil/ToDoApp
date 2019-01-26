import React from 'react';

const Item = (props) => {

  return(
    <div className='w-100'>
      <span className='badge m-2'>{props.item.name}</span>
      <button className='btn btn-primary' onClick={() => props.handleDelete(props.item.id)}>Delete</button>
    </div>
  )
};

export default Item;
  