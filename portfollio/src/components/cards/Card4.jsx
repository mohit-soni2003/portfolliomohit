import React from 'react'
import "./Card4.css"
import Button from 'react-bootstrap/Button';


export default function Card4() {
  return (
    <>
    <div className="card-4">
        <div className="c4-sec1">
            <img src="https://i.ibb.co/WygzP2h/image.png" alt="" />
            <div className="c4-name">Clinic Hub</div>
        </div>
        <div className="c4-sec2">
            Created At : 11 NOV 2024 10:45 AM
        </div>
        <div className="c4-sec1 c4-sec3">
        <Button variant="success">View</Button>
        <Button variant="warning">Edit</Button>
        <Button variant="danger">Delete</Button>
        </div>
    </div>
    </>
  )
}
