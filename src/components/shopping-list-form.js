import React from 'react';
import { connect } from 'react-redux';
import { addListItem } from '../actions';
import ShoppingListEntry from './shopping-list-entry';
import ShoppingListSubmit from './shopping-list-submit';
import ShoppingListLabel from './shopping-list-label';

export class ShoppingListForm extends React.Component {
  addListItem(name) {
    this.props.dispatch(addListItem(name));
  }
  
  render() {
    const name = 'ice';
    return (
      <form id="js-shopping-list-form">
        <ShoppingListLabel />
        <ShoppingListEntry />
        <ShoppingListSubmit addListItem={() => this.addListItem(name)}/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
})

export default connect(mapStateToProps)(ShoppingListForm)