import React from 'react';
import { connect } from 'react-redux';

import { actions, getCharacterProfile } from '../../store/characters/character.actions';
import './CharacterList.scss';

const CharacterList = ({ characters, character, selectCharacter }) => 
  <div className='col col-md-6 character-list'>
    <h1>Characters</h1>
    <ul>
      { characters.collection.map((c, i) =>
        <li onClick={ selectCharacter(character.id === i + 1 ? null : i + 1) }
            key={ c.name }
            className={ `character-list__item${character.id === i + 1 ? ' selected' : ''}` }>
            { c.name }
        </li>) }
    </ul>
  </div>

const mapStateToProps = ({ characters, character }) => ({
  characters,
  character
});

const mapDispatchToProps = dispatch => ({
  selectCharacter(id) {
    return () => {
      dispatch(actions.setCharacter(id));
      !!id ? dispatch(getCharacterProfile(id)) : dispatch(actions.setCharacterProfile(null));
    };
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);