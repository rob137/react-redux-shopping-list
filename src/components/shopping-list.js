import React from 'react';
import ListItem from './list-item';

export default function ShoppingList() {
  const names = ["apples", "oranges", "milk", "bread"];
  const listItems = names.map(name => <ListItem name={name} />);
  return (
    <ul className="shopping-list">
      {listItems}
    </ul>
  );
}
