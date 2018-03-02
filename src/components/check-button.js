import React from 'react';

export default function CheckButton(props) {
  return ( 
    <button className="shopping-item-toggle"
      onClick={() => props.crossListItem(props.name)}
    >
      <span className="button-label">check</span>
    </button>
  );
} 