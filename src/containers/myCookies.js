/**
 * Created by TANDONG on 2017/1/16.
 */
export function getCookies(cname) {
    const name = cname + "="
    const ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == "") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}
export function setCookies(cname, cvalue, exdays) {
    const date = new Date()
    date.setTime(date.getTime() + (exdays * 1000 * 60 * 60 * 24))
    const expires = "expires" + date.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}