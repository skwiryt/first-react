import shortid from 'shortid';

// selectors


// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const createActionAddList = payload => {
  const description = prompt('Please, give the description of the list');
  const image = prompt('Please, give url of the image');
  return { payload: { ...payload, id: shortid.generate(), description, image }, type: ADD_LIST };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}