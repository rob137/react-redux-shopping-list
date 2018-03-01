export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const addListItem = name => ({
  type: ADD_LIST_ITEM,
  name
});

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const deleteListItem = (name) => ({
  type: DELETE_LIST_ITEM,
  name
})

export const CROSS_LIST_ITEM = 'CROSS_LIST_ITEM';
export const crossListItem = (name) => ({
  type: CROSS_LIST_ITEM,
  name
})