import { actionTypes } from './collection.actions';

const initialState = {
  loading: false,
  loaded: false,
  collection: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS:
      return Object.assign({}, state, { collection: action.characters });

    default:
      return state;
  }
};