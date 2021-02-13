import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export const Login = ({ isLogin, login }) => {
    const initialState = {
        username: "",
        password: "",
    }
    const [state, setState] = useState(initialState)
    if (isLogin){
        return (<Redirect to="/" />)
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="">
                <form onSubmit={() => login()}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text" name="username" className="form-control" value={state.username}
                            onChange={e => setState({
                                ...state,
                                username: e.target.value
                            })}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" value={state.password}
                            onChange={e => setState({
                                ...state,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login"></input>
                </form>
            </div>
        </div>
    )
}
