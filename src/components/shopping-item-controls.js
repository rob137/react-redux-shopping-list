import React from 'react';
import CheckButton from './check-button';
import DeleteButton from './delete-button';

export default function ShoppingItemControls(props) {
  return (
    <div className="shopping-item-controls">
      <CheckButton />
      <DeleteButton name={props.name}/>
    </div>
  )
}