import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";
import {pokemonReducer} from "./pokemonReducers"
const RootReducer = combineReducers({
    toDo: toDoReducer,
    pokemon:pokemonReducer
})

export default RootReducer