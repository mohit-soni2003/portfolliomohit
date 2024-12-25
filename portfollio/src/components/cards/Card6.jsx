import React from 'react'
import "./Card6.css"
import image from "/images/image.png"
import Button from 'react-bootstrap/Button';


export default function Card6() {
    return (
        <>
            <div className="card6">
                <div className="card6-sec1">
                    <div className="card6-img">
                    <img src={image} alt="" />
                    </div>
                    <div className="card6-name">Mohit Soni
                    </div>
                </div>
                <div className="card6-sec2">
                    <div>Email : mohitsonip1847@gmail.com</div>
                    <div>Phone : +91 9589571577</div>
                    <div>Username : 2mohitsoni</div>
                    <div>Password : ********</div>
                </div>
                <div className="card6-sec3">
                <Button variant="danger">Delete User</Button>
                <Button variant="warning">Update</Button>

                </div>
            </div>
        </>
    )
}
