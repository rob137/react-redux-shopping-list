import React from 'react';
import {connect} from 'react-redux';
import ListItem from './list-item';
import {deleteListItem, crossListItem} from '../actions'
export class ShoppingList extends React.Component {
  deleteListItem(name) {
    this.props.dispatch(deleteListItem(name));
  }

  crossListItem(name) {
    this.props.dispatch(crossListItem(name));
  }

  render() {
    const listItems = this.props.shoppingList.map((item, index) => {
      return (
        <ListItem 
          name={item.name} 
          crossed={item.crossed}
          key={index}
          deleteListItem={name => this.deleteListItem(name)}
          crossListItem={name => this.crossListItem(name)}
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
