import {useState} from 'react'
// import Student from './Student'
// import List from './List'
// import Input from './Input'
// import Cars from './Cars'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App(){
  const [studentName,setStudentName]=useState('Prabhas')
  const [age,setAge]=useState(23)
  return(
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>






      {/* <Cars/> */}
       {/* <Input/>
      <List/> */}
      
      {/* <p>Hello all</p>
      <p>Name is :{studentName} and his age is:{age}</p>
      <Student name="sai" rollno="1234"/>
      <Student name="Akhila" rollno="5678"/> */}
      
    </div>
  )
}
export default App