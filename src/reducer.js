import * as actions from './actions';
console.log(actions);

const initialState = {
  shoppingList: [{
    name: "apples",
    crossed: false
  }, {
    name: "oranges",
    crossed: true
  }, {
    name: "milk",
    crossed: false
  }, {
    name: "bread",
    crossed: false
  }]
}

export const reducer = (state=initialState, action) => {
  if(action.type === actions.ADD_LIST_ITEM) {
    return Object.assign({}, state, {
      shoppingList: [...state.shoppingList, {
        name: action.name,
        crossed: false
      }]
    })
  }
  else if (action.type === actions.DELETE_LIST_ITEM) {
    const listMinusTarget = state.shoppingList.filter(item => {
      return item.name !== action.name
    })
    return Object.assign({}, state, {
      shoppinglist: listMinusTarget
    })
  }
  else if (action.type === actions.CROSS_LIST_ITEM) {
    const updatedItem = state.shoppingList.find(item => {
      return item.name === action.name;
    });
    updatedItem.crossed = !updatedItem.crossed;
    const updatedList = state.shoppingList.map(item => {
      if (item.name === action.name) {
        return updatedItem;
      } else {
        return item;
      }
    });
    return Object.assign({}, state, {updatedList});
  }
  return state;
}

/* 
'#js-shopping-list-form'
event.preventDefault();
const name = $('.js-shopping-list-entry').val();
addListItem(name)


$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
$(this).closest('li').remove();
deleteListItem();

$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
 */