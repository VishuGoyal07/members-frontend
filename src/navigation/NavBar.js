import React, { useReducer } from "react";
import {Link,useNavigate} from 'react-router-dom';
import { signOut,getAuth } from "firebase/auth";


export const NavBar=({user})=>{
    const auth=getAuth();
    const onClickSignOut=async()=>{
        signOut(auth);
    };
    return(
    <nav>
        <Link to="/">
            <h1 className="app-heading">Members-Only App</h1>
        </Link>
        {user
           ?(
            <>
                <button
                    className="sign-out-button"
                    onClick={onClickSignOut}>Sign Out</button>
                <p 
                    className="logged-in-as space-before">
                    Logged in as {user.email}</p>
            </>
           ):null}
    </nav>
    );
};