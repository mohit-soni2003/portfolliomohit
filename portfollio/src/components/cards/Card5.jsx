import React from 'react'
import "./Card5.css"
import Button from 'react-bootstrap/Button';

export default function Card5({props}) {
  return (
    <>
    <div className="card5">
        <div className="card5-container">
            <div className="card5-part1">
                <div className="card5-name">{props.name}</div>
                <div className="card5-email">{props.email}</div>
                <div className="card5-phone">{props.phoneno}</div>
            </div>
            <div className="card5-part2">
                <div>Posted Date :</div>
                <div>{props.date}</div>
            </div>
            <div className="card5-part3">
            <Button variant="primary">View</Button>
            <Button variant="warning">Reply</Button>
            <Button variant="danger">Delete</Button>
            </div>
        </div>
    </div>
    </>
  )
}
