import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (extraArgument, initialState = {}) => {
    const enhancer = compose(
        applyMiddleware(thunk.withExtraArgument(extraArgument)),
        window.devToolsExtension ? window.devToolsExtension({ name: 'levels-beyond/frontend-assessment' }) : f => f
        ),
        store = createStore(rootReducer, initialState, enhancer);

    return store;
};

export default configureStore;