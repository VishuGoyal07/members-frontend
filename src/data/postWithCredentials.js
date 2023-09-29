
import { getAuth } from 'firebase/auth';


export const  postWithCredentials=async(url,bodyData)=>{
        const auth=getAuth();
        const user=auth.currentUser;
        if(!user)
        {
            console.log("error");
            return;
        }
        const response=await fetch(url,{
        method:'post',
        body:JSON.stringify(bodyData),
        headers:{
            AuthToken:await user.getIdToken(),
            'Content-Type':'application/json',
        },
    });
   
    return response;
}