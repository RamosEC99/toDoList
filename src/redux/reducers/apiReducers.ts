import {Action} from '../actions/toDoActions'
export interface IToDoState {
    inputToDo: string,
    toDo: string[]
}

const initialState = {
    inputToDo: '',
    toDo: []
}


export const toDoReducer = (state: IToDoState = initialState, action: Action) => {
    switch (action.type) {
        case "SET_TO_DO": {
            return {
                ...state,
                inputToDo: action.payload
            };
        }
        case "ADD_TO_DO":
            return {
                ...state,
                toDo: [...state.toDo, action.payload]
            };
        default:
            return state;
    }

}

