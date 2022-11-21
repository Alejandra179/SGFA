import { login, startLoading,setError } from "./authSlice"


export const signIn = ({userName,password})=>{
    
    return async(dispatch, getState)=>{
        dispatch(startLoading())
        const resp = await fetch('http://localhost:4000/auth/login', {
            method: "POST",
            headers: {
              
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, password }),
          })
        await resp.json().then((rf)=>{
            (rf.msg)?         
            dispatch(setError({error:rf.msg})):
            dispatch(login({user:rf.user,token:rf.token})) 

        })
    
        
    }
}