import {useState,useEffect} from 'react';
import { onAuthStateChanged ,getAuth} from 'firebase/auth';

export const useUser=()=>{
    const auth=getAuth();
    const [userInfo,setUserInfo]=useState(()=>{
        const user=auth.currentUser;
        const isLoading=!user;
        return {isLoading,user};
    });
    useEffect(()=>{
        return onAuthStateChanged(auth,user=>{
            setUserInfo({isLoading:false,user});
        });
    },[]);
    return userInfo;
};