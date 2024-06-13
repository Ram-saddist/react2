import React from 'react'

export default function Displaycar(props) {
  return (
    <div>
      {
        props.carDetails.map((car)=>(
            <div>
                <p>{car.name}</p>
                <p>{car.price}</p>
                <p>{car.description}</p>
                <img src={car.picture} alt={car.name}/>
            </div>
        ))
      }
    </div>
  )
}
