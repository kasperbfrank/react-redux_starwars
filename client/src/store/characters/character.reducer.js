import { actionTypes } from './character.actions';

const initialState = {
  loading: false,
  loaded: false,
  id: null,
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTER:
      return Object.assign({}, state, { id: action.id });

    case actionTypes.SET_CHARACTER_PROFILE:
      return Object.assign({}, state, { profile: action.profile, loading: false });

    case actionTypes.SET_LOADING:
      return Object.assign({}, state, { loading: action.loading })

    default:
      return state;
  }
};