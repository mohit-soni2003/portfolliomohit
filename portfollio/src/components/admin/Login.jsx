import {React , useEffect , useState} from 'react'
import "./Login.css"
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from 'react-router-dom'


export default function Login() {

    const navigate = useNavigate()

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleUsernameChange = (event)=>{
        setusername(event.target.value);
    }
    const handlePasswordChange = (event)=>{
        setpassword(event.target.value);
    }

    const postdata = () => {
        event.preventDefault();
        console.log(username)
        console.log(password)
        // fetch('http://localhost:8000/adminlogin', {
            fetch('https://portfollioserver-one.vercel.app/adminlogin', {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Correct Content-Type
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.message);
                localStorage.setItem("jwt", data.token);
                localStorage.setItem("user", JSON.stringify(data.user)); // Convert user object to string
                navigate("/dashboard");
            }
        })
        .catch(err => console.log(err));
    };
    
    return (
        <>
            <div className="admin-login">
                <div className="ad-login-border">
                    <div className="ad-login-container">

                        <div className="ad-login-heading">Admin Login</div>
                        <div className="ad-username"><label for="ad-username">Userame: &nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name='username' id='ad-username' placeholder='username' onChange={handleUsernameChange} /></div>
                        <div className="ad-password"><label for="ad-password">Password:</label><input type="password" id='ad-password' name='password' placeholder='password' onChange={handlePasswordChange} /></div>
                        <div className="ad-btn-container">
                            <div><Button variant="info" onClick={postdata}>Login</Button></div>
                            <div className="ad-forgot-pass"><Link>forgot password</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
