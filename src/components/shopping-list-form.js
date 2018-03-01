import React from 'react';
import ShoppingListEntry from './shopping-list-entry';
import ShoppingListSubmit from './shopping-list-submit';

export default function ShoppingListForm() {
  return (
    <form id="js-shopping-list-form">
      <label htmlFor="shopping-list-entry">Add an item</label>
      <ShoppingListEntry />
      <ShoppingListSubmit />
    </form>
  );
}