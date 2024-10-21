import React from 'react'
import "./Login.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <>
            <div className="admin-login">
                <div className="ad-login-border">
                    <div className="ad-login-container">

                        <div className="ad-login-heading">Admin Login</div>
                        <div className="ad-username"><label for="ad-username">Name: &nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" id='ad-username' placeholder='username' /></div>
                        <div className="ad-password"><label for="ad-password">Password:</label><input type="password" id='ad-password' placeholder='password' /></div>
                        <div className="ad-btn-container">
                            <div><Button variant="info">Login</Button></div>
                            <div className="ad-forgot-pass"><Link>forgot password</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
