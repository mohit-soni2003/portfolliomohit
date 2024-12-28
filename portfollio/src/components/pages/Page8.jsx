import { React, useState, useEffect } from 'react'
import "./Page8.css"
import "../utility/syle.css"
import "../utility/utility.css"

// icons import-------
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

//modal
import Projetmodel from '../models/Projetmodel';



export default function Page8() {
    const [showmodal, setshowmodal] = useState(false)


    const [personalDetail, setPersonalDetail] = useState(null);  // To store fetched data
    const [loading, setLoading] = useState(true);                // To manage loading state
    const [error, setError] = useState(null);                    // To manage error state
    
    useEffect(() => {
        // Fetch the personal details when the component mounts
        const fetchPersonalDetails = async () => {
            try {
                const response = await fetch('http://localhost:8000/getpersonaldetail');
                if (!response.ok) {
                    throw new Error('Failed to fetch personal details');
                }
                const data = await response.json();
                setPersonalDetail(data.personalDetail);  // Set the fetched data to state
                setLoading(false);                       // Update loading state
            } catch (err) {
                setError(err.message);  // Set error message in case of failure
                setLoading(false);       // Update loading state even on error
            }
        };
    
        fetchPersonalDetails();  // Call the function to fetch data
    }, []);  // Empty dependency array to ensure it runs only once when the component mounts
    
    if (loading) {
        return (
            <div>Loading...</div>  // Show loading message while data is being fetched
        )
    }
    
    if (error) {
        return(
            <div>Error: {error}</div>  // Show error message if something goes wrong
        )
    }
    


    return (
        <>
            <div className="page8" id='contact'>
                <div className="pg-heading pg8-heading" data-aos="fade-right">
                    Contact Me
                </div>

                <div className="pg8-container">
                    <div className="pg8-left" data-aos="fade-right">
                        <div className="heading2" >
                            Let's Connect With me :
                        </div>

                        <div className="contact-links">
                            <div className="contact-link1 email-cont ">
                                <div>
                                    <MdEmail size={30} style={{ color: "var(--second-color)" }} />
                                </div>
                                <div>
                                    <div>Email Address</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>{personalDetail.email}</div>
                                </div>
                            </div>
                            <div className="contact-link1 phone-cont">
                                <div>
                                    <FaPhoneAlt size={30} style={{ color: "var(--second-color)" }} />
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>{personalDetail.phoneno}</div>
                                </div>
                            </div>
                            <div className="contact-link1 linkedin-cont">
                                <div style={{ color: "var(--second-color)" }}>
                                    <IoLogoWhatsapp size={30} />
                                </div>
                                <div>
                                    <div>Whatsapp</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>{personalDetail.whatsappno}</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* --------------Contact Form -------------- */}
                    <div className="pg8-right" data-aos="fade-left">
                        <div className="pg8-right-l1">I am always Open to discuss and <br /> <span>Colloborate with you</span></div>
                        <div className="form-table">
                            <table>

                                <tr>
                                    <td> <input type="text" placeholder='Name' /></td>
                                    <td> <input type="tel" placeholder='Phone No' /></td>
                                </tr>
                                <tr>
                                    <td><input type="email" name="" id="" placeholder='Email' /></td>
                                    <td><input type="text" name="" id="" placeholder='Subject' /></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} rowSpan={2}><input type="text" name="" id="tdimp" placeholder='Description' /></td>
                                </tr>

                            </table>
                            <div className="send-msg" onClick={() => setshowmodal(true)}>Send Message</div>
                        </div>
                    </div>

                </div>
            </div>
            {showmodal && <Projetmodel setshowmodal={setshowmodal} />}
        </>
    )
}
