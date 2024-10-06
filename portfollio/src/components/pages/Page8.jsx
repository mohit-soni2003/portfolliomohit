import React from 'react'
import "./Page8.css"
import "../utility/syle.css"
import "../utility/utility.css"

// icons import-------
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Page8() {
    return (
        <>
            <div className="page8">
                <div className="pg-heading pg8-heading">
                    Contact Me
                </div>

                <div className="pg8-container">
                    <div className="pg8-left">
                        <div className="heading2">
                            Let's Connect With me :
                        </div>

                        <div className="contact-links">
                            <div className="contact-link1 email-cont ">
                                <div>
                                    <MdEmail size={30} style={{ color: "var(--second-color)" }} />
                                </div>
                                <div>
                                    <div>Email Address</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>mohitsonip1847@gmail.com</div>
                                </div>
                            </div>
                            <div className="contact-link1 phone-cont">
                                <div>
                                    <FaPhoneAlt size={30} style={{ color: "var(--second-color)" }} />
                                </div>
                                <div>
                                    <div>Phone</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>+91 9589571577</div>
                                </div>
                            </div>
                            <div className="contact-link1 linkedin-cont">
                                <div style={{ color: "var(--second-color)" }}>
                                    <IoLogoWhatsapp size={30} />
                                </div>
                                <div>
                                    <div>Whatsapp</div>
                                    <div style={{ color: "rgb(0,0,0,0.5)" }}>+91 9589571577</div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* --------------Contact Form -------------- */}
                    <div className="pg8-right">
                        <div className="pg8-right-l1">I am always Open to discuss and <br /> <span>Colloborate with you</span></div>
                        <div className="form-table">
                            <table>

                            <tr>
                                <td> <input type="text" placeholder='Name' /></td>
                                <td> <input type="text" placeholder='Phone No' /></td>
                            </tr>
                            <tr>
                                <td><input type="email" name="" id="" placeholder='Email' /></td>
                                <td><input type="text" name="" id="" placeholder='Subject' /></td>
                            </tr>
                            <tr>
                                <td  colSpan={2} rowSpan={2}><input type="text" name=""  id="tdimp" placeholder='Description' /></td>
                            </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
