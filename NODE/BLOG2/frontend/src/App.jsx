import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleSubmit = async () => {
    console.log(userdata)
    let res = await axios.post('http://localhost:3000/users', {
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
    })
    if (res.data.Success === true) {
      setUserdata({ name: '', email: '', password: '' })
    }

    console.log(res.data)
  }

  return (
    <>
      <div className="">
        <h1 className="">signup Fom</h1>
        <div className="">
          <input
            type="text"
            placeholder="name"
            value={userdata.name}
            onChange={(e) => {
              setUserdata({ ...userdata, name: e.target.value })
            }}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="email"
            value={userdata.email}
            onChange={(e) => {
              setUserdata({ ...userdata, email: e.target.value })
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            value={userdata.password}
            onChange={(e) => {
              setUserdata({ ...userdata, password: e.target.value })
            }}
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
