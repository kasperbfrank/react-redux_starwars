import React from 'react';

import CharacterList from '../CharacterList/CharacterList';
import CharacterProfile from '../CharacterProfile/CharacterProfile';

const App = () => 
	<div className='container'>
		<CharacterList />
		<CharacterProfile />
	</div>;

export default App;