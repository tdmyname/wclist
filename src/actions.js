export const USER_LOGIN = "USER_LOGIN"
export const USER_OUTLOGIN = "USER_OUTLOGIN"
export const USER_LIST = "USER_LIST"
export function userLogin(user) {
    return {
        type: USER_LOGIN,
        user
    }
}
export function subscribe(users) {
    return {
        type: USER_LIST,
        users
    }
}