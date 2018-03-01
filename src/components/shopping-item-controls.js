import React from 'react';
import CheckButton from './check-button';
import DeleteButton from './delete-button';

export default function ShoppingItemControls() {
  return (
    <div className="shopping-item-controls">
      <CheckButton />
      <DeleteButton />
    </div>
  )
}