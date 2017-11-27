import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/';

import './index.html';
import App from './components/App/App';
import { getCharacters } from './store/characters/collection.actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

const container = document.getElementById('app-container');

store.dispatch(getCharacters());

// Render app
ReactDOM.render(
	<AppContainer>
		<Provider store={ store }>
			<App />
		</Provider>
	</AppContainer>
	, container
);

// Hot module reloading
if (module.hot) {
	module.hot.accept('./components/App/App', () => {
		ReactDOM.render(
			<AppContainer>
				<Provider store={ store }>
					<App />
				</Provider>
			</AppContainer>
			, container
		);
	});
}