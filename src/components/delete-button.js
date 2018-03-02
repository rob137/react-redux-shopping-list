import React from 'react';
import { deleteListItem } from '../actions';

export default function DeleteButton(props) {
  return (
    <button onClick={(e) => e.preventDefault()} className="shopping-item-delete">
      <span className="button-label">delete</span>
    </button>
  )
}