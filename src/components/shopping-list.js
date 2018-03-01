import React from 'react';
import {connect} from 'react-redux';
import {addListItem} from '../actions';
import ListItem from './list-item';

export class ShoppingList extends React.Component {
  addListItem(name) {
    this.props.dispatch(addListItem(name));
  }
  
  render() {
    const listItems = this.props.shoppingList.map((item, index) => {
      return (
        <ListItem 
          name={item.name} 
          addListItem={() => this.props.addListItem()} 
          crossed={item.crossed}
          key={index}
        /> 
      )
    });
    return (
      <ul className="shopping-list">
        {listItems}
      </ul>
    );
  }
}

ShoppingList.defaultProps = {
  shoppingList: [{
    name: "Not",
    crossed: false
  }, {
      name: "working",
      crossed: true
  }]
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
});

export default connect(mapStateToProps)(ShoppingList);
