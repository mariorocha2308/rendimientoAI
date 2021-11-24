import {GET_EMPLOYEES, SEARCH_EMPLOYEE} from '../actions/actions.js'

const initialState = {
    employees: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_EMPLOYEES:
        return{
            ...state,
            employees: action.payload
        }
        case SEARCH_EMPLOYEE:
            return{
                ...state,
                employees: action.payload
            }
        default:
            return state;
    }
}