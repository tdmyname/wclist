import {combineReducers} from "redux"
import {USER_LIST, USER_LOGIN, USER_OUTLOGIN} from "../actions"
function login(state = "", action) {
    switch (action.type) {
        case USER_LOGIN:
            return action.user
        default:
            return state
    }
}
function userList(state = [], action) {
    switch (action.type) {
        case USER_LIST:
           return [...action.users]
        default:
            return state
    }
}
const merchandiseApp = combineReducers({
    login, userList
})
export default merchandiseApp