import * as ActionTypes from './actionTypes';

export const addAction = (data: number) => {
    data++;
    return {
        type: ActionTypes.ADD,
        data: data
    }
}

export const subAction = (data: number) => {
    data--;
    return {
        type: ActionTypes.SUB,
        data: data
    }
}