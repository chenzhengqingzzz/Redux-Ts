import * as ActionTypes from './actionTypes';

interface Action {
    type: string,
    data: any
}
const reducer = (state = {}, action: Action) => {

    switch(action.type) {
        case ActionTypes.ADD: {
            return {...state, data: action.data}
        }
        case ActionTypes.SUB: {
            return {...state, data: action.data}
        }
        default: {return state}
    }
}
export default reducer;