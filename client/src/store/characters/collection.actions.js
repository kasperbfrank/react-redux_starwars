import { API_URL } from '../../app.constants';

export const actionTypes = {
  SET_CHARACTERS: '[CHARACTERS] Set'
}

export const actions = {
  setCharacters: characters => ({
    type: actionTypes.SET_CHARACTERS,
    characters
  })
};

export function getCharacters() {
  return dispatch =>
    fetch(`${API_URL}/people`)
      .then(res => res.json())
      .then(res => res.results)
      .then(characters => dispatch(actions.setCharacters(characters)));
}