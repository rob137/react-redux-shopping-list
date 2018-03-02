import React from 'react';
import CheckButton from './check-button';
import DeleteButton from './delete-button';

export default function ShoppingItemControls(props) {
  return (
    <div className="shopping-item-controls">
      <CheckButton name={props.name}
        crossListItem={props.crossListItem}
      />

      <DeleteButton name={props.name} 
        deleteListItem={props.deleteListItem}
      />
    </div>
  )
}