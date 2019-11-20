import * as types from '../constants/ActionTypes';
export const editContent = (item) => {
    return {
        type: types.EDIT_CONTENT,
        item
    }
}