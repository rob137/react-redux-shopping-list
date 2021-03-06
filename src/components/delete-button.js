import React from 'react';

export default function DeleteButton(props) {
  return (
    <button onClick={() => props.deleteListItem(props.name)} className="shopping-item-delete">
      <span className="button-label">delete</span>
    </button>
  )
}