import React from 'react';
import "./Login.css"
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";


function Login() {

    const [state,dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result);
        }).catch(error=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/300px-Facebook_Logo_%282019%29.png" alt=""/>
            </div>
            <div className="login__bottom">
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            <p>Made  with  ❤️  by  Sagnik  Mitra</p>
            </div>
        </div>
    )
}

export default Login;
