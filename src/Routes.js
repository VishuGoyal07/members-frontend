import React from "react";
import {HashRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { SignInPage,PrivateRoute } from "./auth";
import { GroupListPage,CreateGroupPage,GroupPage } from "./groups";
import { NavBar } from "./navigation";


const routes =[
    {
        path:'/',
        Component:GroupListPage,
        private:true,
        exact:true,
    },
    {
        path:'/groups/:id',
        Component:GroupPage,
        private:true,
        exact:true,
    },
    {
        path:'/sign-in',
        Component:SignInPage,
        exact:true,
        private:false,
    },
    {
        path:'/create-group',
        Component:CreateGroupPage,
        private:true,
        exact:true,
    }
];

export const PageRoutes=({isLoading,user})=>(
    <Router>
        <NavBar user={user}/>
        <Routes>
            {
               routes.map((route,index)=>{
                    //const RouteType=route.private?PrivateRoute:Route;
                    return(
                        <Route key={index} 
                                path={route.path} 
                                isLoading={isLoading}
                                isAuthed={!!user}
                                element={((!route.private) || (!!user))?<route.Component/>:<Navigate to='/sign-in'/>}
                                />) 
                
                    })
            
            }
        </Routes>
    </Router>
);