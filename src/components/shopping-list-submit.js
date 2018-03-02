import React from 'react';

export default function ShoppingListSubmit(props) {
  return (
    <button type="submit" 
      onClick={(e) => {
        e.preventDefault();
        props.addListItem();
      }}
      >Add item</button>
  )
}