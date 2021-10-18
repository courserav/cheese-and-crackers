//Index file for reducers
import boardCreator from './boardCreator'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    createBoard: boardCreator
})