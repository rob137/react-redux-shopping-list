import React from 'react';
import ShoppingListEntry from './shopping-list-entry';
import ShoppingListSubmit from './shopping-list-submit';
import ShoppingListLabel from './shopping-list-label';

export default function ShoppingListForm() {
  return (
    <form id="js-shopping-list-form">
      <ShoppingListLabel />
      <ShoppingListEntry />
      <ShoppingListSubmit />
    </form>
  );
}