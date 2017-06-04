import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from 'app/reducers';

export default function configureStore (initialState) {
	return createStore(rootReducer, fromJS(initialState));
};
