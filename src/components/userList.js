/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
const UserList = ({userList})=> {
    if (userList.length < 1) {
        return <div>没有人</div>
    } else {
        return (
            <div>
                <span>当前{userList[0]}正在使用</span>
                <ul>
                    {userList.map((user, index)=> {
                        if (index > 0) {
                            return <li style={{textIndent: "20px"}} key={user}>{user}</li>
                        }
                    })}
                </ul>
            </div>)
    }
}
export default UserList