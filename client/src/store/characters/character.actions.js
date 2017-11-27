import { API_URL } from '../../app.constants';

export const actionTypes = {
  SET_CHARACTER: '[CHARACTER] Set',
  SET_CHARACTER_PROFILE: '[CHARACTER] Set profile',
  SET_LOADING: '[CHARACTER] Set loading'
}

export const actions = {
  setCharacter: id => ({
    type: actionTypes.SET_CHARACTER,
    id
  }),
  setCharacterProfile: profile => ({
    type: actionTypes.SET_CHARACTER_PROFILE,
    profile
  }),
  setLoading: loading => ({
    type: actionTypes.SET_LOADING,
    loading
  })
};

export function getCharacterProfile(id) {
  return dispatch => {
    dispatch(actions.setLoading(true));

    fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile => dispatch(actions.setCharacterProfile(profile)));
  }
}