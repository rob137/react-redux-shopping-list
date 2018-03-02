import React from 'react';

export default function ShoppingListEntry(props) {
  return <input type="text" name="shopping-list-entry" 
    className="js-shopping-list-entry" 
    placeholder="e.g., broccoli" 
    onChange={(e) => props.setInput(e.target.value)}/>
}