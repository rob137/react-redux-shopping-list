import React from 'react';

export default function ShoppingListForm() {
  return (
    <form id="js-shopping-list-form">
      <label htmlFor="shopping-list-entry">Add an item</label>
      <input type="text" name="shopping-list-entry" className="js-shopping-list-entry" placeholder="e.g., broccoli" />
      <button type="submit">Add item</button>
    </form>
  );
}