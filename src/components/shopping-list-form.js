import React from 'react';
import { connect } from 'react-redux';
import { addListItem, addInputChange } from '../actions';
import ShoppingListEntry from './shopping-list-entry';
import ShoppingListSubmit from './shopping-list-submit';
import ShoppingListLabel from './shopping-list-label';

export class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  onAddInputChange(text) {
    const input = text.trim(); 
    this.props.dispatch(addInputChange(input));
  }

  addListItem(name) {
    this.props.dispatch(addListItem(name));
  }
  

  render() {
    return (
      <form id="js-shopping-list-form">
        <ShoppingListLabel />
        <ShoppingListEntry setInput={(text) => this.onAddInputChange(text)} />
        <ShoppingListSubmit addListItem={() => {
          this.addListItem(this.props.input)}
        }/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
  input: state.input
})

export default connect(mapStateToProps)(ShoppingListForm)