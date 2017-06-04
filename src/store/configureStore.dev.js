import { createStore, compose } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from 'app/reducers';
import DevTools from 'app/components/DevTools';

const enhancer = compose(
	DevTools.instrument(),
);

export default function configureStore (initialState) {
	const store = createStore(rootReducer, fromJS(initialState), enhancer);

	if (module.hot) {
		module.hot.accept('app/reducer', () => {
			return store.replaceReducer(rootReducer);
		});
	}

	return store;
};
