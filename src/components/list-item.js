import React from 'react';
import ShoppingItemControls from './shopping-item-controls';
    
export default function ListItem(props) {
  let classes = "shopping-item";
  if (props.crossed === true) {
    classes += ' shopping-item__checked';
  }
  
  return (
    <li>
      <span className={classes}>{props.name}</span>
      <ShoppingItemControls name={props.name} />
    </li>
  )
}