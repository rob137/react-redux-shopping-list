import React from 'react';

export default function ListItem(props) {
  return (
    <li>
      <span className="shopping-item">{props.name}</span>
      <div className="shopping-item-controls">
        <button className="shopping-item-toggle">
          <span className="button-label">check</span>
        </button>
        <button onClick={() => props.addListItem()} className="shopping-item-delete">
          <span className="button-label">delete</span>
        </button>
      </div>
    </li>
  )
}