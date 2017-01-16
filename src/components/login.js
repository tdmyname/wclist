/**
 * Created by TANDONG on 2017/1/13.
 */
import React from "react"
const userName=()=>{
  return prompt("请输入用户名").trim()
}
const Login = ({user, loginOnClick, outLoginOnClick})=> {
    let MyButton
    if (user !== "") {
        MyButton = <a href="#" onClick={e=> {
            e.preventDefault()
            outLoginOnClick("")
        }}>注销</a>
    } else {
        MyButton = <a href="#" onClick={e=> {
            e.preventDefault()
            loginOnClick(userName())
        }}>登陆</a>
    }
    return (
        <div style={{textAlign:"right"}}>
            <span>{user}</span>
            {MyButton}
        </div>
    )
}
export default Login