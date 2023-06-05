import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './store/reducer';

const reducer = combineReducers({
    app: AppReducer
})

export const State = {
    app: {
        data: 0
    }
}

const storeEnhancers = compose(
    applyMiddleware(...[thunk])
)

export default createStore(reducer, State, storeEnhancers);