import { React, useState, useEffect } from 'react';
import "./Page8.css";
import "../utility/syle.css";
import "../utility/utility.css";

// icons import-------
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

//modal
import Projetmodel from '../models/Projetmodel';

export default function Page8() {
    const [showmodal, setshowmodal] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        phoneno: '',
        email: '',
        subject: '',
        description: ''
    });

    const [personalDetail, setPersonalDetail] = useState(null);  // To store fetched data
    const [loading, setLoading] = useState(true);                // To manage loading state
    const [error, setError] = useState(null);                    // To manage error state
    const [submitStatus, setSubmitStatus] = useState(null);      // To track form submission status
    
    useEffect(() => {
        // Fetch the personal details when the component mounts
        const fetchPersonalDetails = async () => {
            try {
                // const response = await fetch('http://localhost:8000/getpersonaldetail');
                const response = await fetch('https://portfollioserver-one.vercel.app/getpersonaldetail');
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

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            // const response = await fetch('http://localhost:8000/submit-form', {
            const response = await fetch('https://portfollioserver-one.vercel.app/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            setSubmitStatus('Form submitted successfully!');
            setFormData({ name: '', phoneno: '', email: '', subject: '', description: '' }); // Reset form
        } catch (err) {
            setSubmitStatus(`Error: ${err.message}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;  // Show loading message while data is being fetched
    }
    
    if (error) {
        return <div>Error: {error}</div>;  // Show error message if something goes wrong
    }

    return (
        <>
            <div className="page8" id="contact">
                <div className="pg-heading pg8-heading" data-aos="fade-right">
                    Contact Me
                </div>

                <div className="pg8-container">
                    <div className="pg8-left" data-aos="fade-right">
                        <div className="heading2">Let's Connect With me :</div>

                        <div className="contact-links">
                            <div className="contact-link1 email-cont">
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
                        <div className="pg8-right-l1">I am always Open to discuss and <br /><span>Collaborate with you</span></div>
                        <form className="form-table" onSubmit={handleFormSubmit}>
                            <table>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="tel"
                                            name="phoneno"
                                            placeholder="Phone No"
                                            value={formData.phoneno}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <textarea
                                            name="description"
                                            id="tdimp"
                                            placeholder="Description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </td>
                                </tr>
                            </table>
                            <button type="submit" className="send-msg">Send Message</button>
                        </form>
                        {submitStatus && <div>{submitStatus}</div>}
                    </div>
                </div>
            </div>
            {showmodal && <Projetmodel setshowmodal={setshowmodal} />}
        </>
    );
}
