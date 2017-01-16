/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
import Login from"../components/login"
import UserList from"../components/userList"
import MyButton from"../components/myButton"
import {userLogin} from "../actions"
import{connect} from "react-redux"
import websocket, {send} from "./myWebSocket"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.subscribe = this.subscribe.bind(this)
    }

    subscribe() {
        send(this.props.user)
    }

    render() {
        const {user, userList, dispatch}=this.props
        return (
            <div>
                <Login user={user} loginOnClick={user=>dispatch(userLogin(user))}
                       outLoginOnClick={user=>dispatch(userLogin(user))}/>
                <UserList userList={userList}/>
                <MyButton user={user} userList={userList} subscribe={this.subscribe}/>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        user: state.login,
        userList: state.userList
    }
}
const NewApp = connect(mapStateToProps)(App)
export default NewApp