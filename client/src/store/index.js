import { combineReducers } from 'redux';

import characters from './characters/collection.reducer';
import character from './characters/character.reducer';

export default combineReducers({
  characters,
  character
});