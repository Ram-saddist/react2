import React,{useState} from 'react'
import Displaycar from './Displaycar'
export default function Cars() {
    const [cars,setcars]=useState([
        {name:'benz',price:'30,0000,00',description:"nice car",picture:"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"},
        {name:'ferrarri',price:'30,0000,00',description:"racing car",picture:"https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"}
    ])
  return (
    <div>
        <Displaycar carDetails={cars}/>
    </div>
  )
}
