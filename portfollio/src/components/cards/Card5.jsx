import React from 'react'
import "./Card5.css"
import Button from 'react-bootstrap/Button';

export default function Card5() {
  return (
    <>
    <div className="card5">
        <div className="card5-container">
            <div className="card5-part1">
                <div className="card5-name">Mohit Soni</div>
                <div className="card5-email">mohitsonip1623@gmail.com</div>
                <div className="card5-phone">+91 9893101215</div>
            </div>
            <div className="card5-part2">
                <div>Posted Date :</div>
                <div>31st july 2023 4:00Am</div>
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
