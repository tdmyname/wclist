import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {subscribe} from"./actions"
import webSocket from "./containers/myWebSocket"
import App from "./containers/app"
import reducers from "./reducers"
const elem = document.createElement("div")
document.body.appendChild(elem)
let store = createStore(reducers)
webSocket.onmessage = function (event) {
    store.dispatch(subscribe(transReturnList(event.data)))
}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    elem
)
//处理string数据中的“，”返回数组
function transReturnList(returnList) {
        return returnList.split(",").filter(name=>name != "")
}
