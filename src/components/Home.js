import React, { useState } from 'react'

export default function Home() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  function submit() {
    console.log(username, password)
    setPassword('')
    setusername('')
  }
  return (
    <div>
      <p>
        <input value={username} placeholder='Enter name' onChange={(e) => { setusername(e.target.value) }} />
      </p>
      <p>
        <input
          value={password}
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)} />
      </p>
      <button onClick={submit}>Submit</button>
    </div>
  )
}
