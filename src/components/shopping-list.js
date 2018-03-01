import React from 'react';

export default function ShoppingList() {
  return (
    <ul className="shopping-list">
      <li>
        <span className="shopping-item">apples</span>
        <div className="shopping-item-controls">
          <button className="shopping-item-toggle">
            <span className="button-label">check</span>
          </button>
          <button className="shopping-item-delete">
            <span className="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>
        <span className="shopping-item">oranges</span>
        <div className="shopping-item-controls">
          <button className="shopping-item-toggle">
            <span className="button-label">check</span>
          </button>
          <button className="shopping-item-delete">
            <span className="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>
        <span className="shopping-item shopping-item__checked">milk</span>
        <div className="shopping-item-controls">
          <button className="shopping-item-toggle">
            <span className="button-label">check</span>
          </button>
          <button className="shopping-item-delete">
            <span className="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>
        <span className="shopping-item">bread</span>
        <div className="shopping-item-controls">
          <button className="shopping-item-toggle">
            <span className="button-label">check</span>
          </button>
          <button className="shopping-item-delete">
            <span className="button-label">delete</span>
          </button>
        </div>
      </li>
    </ul>
  );
}
