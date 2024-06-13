import React, { useState } from 'react'
import './List.css'
export default function List() {
    const [employees, setEmployees] = useState([
        {
            name: "Vishali",
            age: 20,
            id: 11,
            gender: "female",
        },
        {
            name: "poojitha",
            age: 20,
            id: 22,
            gender: "female"
        },
        {
            name: "Susmitha",
            age: 20,
            id: 76,
            gender: "female"
        },
        {
            name: "Iron man",
            age: 34,
            id: 45,
            gender: "male"
        }])
    return (
        <div className='employee-container'>
         {
            employees.map((emp)=>(
                <div className='employee' key={emp.id}>
                    <p>Name: {emp.name}</p>
                    <p>Age: {emp.age}</p>
                    <p>Gender {emp.gender}</p>
                    <p>ID: {emp.id}</p>
                </div>
            ))
         }
        </div>
    )
}
