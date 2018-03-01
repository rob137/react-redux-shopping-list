import React from 'react';
import Header from './header';
import ShoppingListForm from './shopping-list-form';
import ShoppingList from './shopping-list';

export default function ShoppingListApp() {
  return (
    <div className="container">
      <Header />
      <ShoppingListForm />
      <ShoppingList />    
    </div>
  )
}