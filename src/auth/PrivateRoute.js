import React from "react";
import {Navigate,Route} from 'react-router-dom';


export const PrivateRoute=({isAuthed,isLoading,...props})=>{
    if(isLoading){
        return <div>Loading...</div>;
    }

    if(!isAuthed){
        return <Navigate to='/sign-in'/>

    }

    return (
        <Route {...props}/>
    )
}