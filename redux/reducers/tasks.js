import * as types from '../constants/ActionTypes';
const InitialState = {
    name: 'Paul',
    location: 'Milan',
    isEdit: false
}
const tasks = (state = InitialState, action) => {
    switch (action.type) {
        case types.EDIT_CONTENT:
            console.log(action.item)
            return state
        default:
            return state
    }
}
export default tasks;