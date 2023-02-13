import React from 'react'

export default function Appointments(props) {
  return (
    <div>Appointments
    <p>these are the appointments</p>
    {props.appointments.map((item)=>{
        return (<div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
        );
    })}
    </div>
  )
}
