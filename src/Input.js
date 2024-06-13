import React, { useState } from 'react'

export default function Input() {
    const [username,setusername]=useState('')
    const [password,setPassword]=useState('')
    function handleUsername(e){
        setusername(e.target.value)
    }
    function submit(){
        console.log(username,password)
    }
    return (
        <div>
            <p>
                <input placeholder='Enter name' onChange={(e)=>{setusername(e.target.value)}}/>
                <input 
                    placeholder='Enter password' 
                    onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={submit}>Submit</button>
            </p>
        </div>
    )
}