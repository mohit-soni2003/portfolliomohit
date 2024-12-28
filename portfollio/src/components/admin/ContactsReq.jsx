import React, { useState, useEffect } from 'react';
import DashboardSidebar from './DashboardSidebar';
import './ContactsReq.css';
import Card5 from '../cards/Card5';

export default function ContactsReq() {
    const [requests, setRequests] = useState([]); // State to store form requests
    const [loading, setLoading] = useState(true); // State for loading indicator

    // Fetch data from the API
    useEffect(() => {
        const fetchContactRequests = async () => {
            try {
                const response = await fetch('http://localhost:8000/contactreq'); // Assuming the backend is hosted on the same server
                const data = await response.json();
                setRequests(data.data); // Set the retrieved data
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contact requests:', error);
                setLoading(false);
            }
        };

        fetchContactRequests();
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="dasboard-left">
                <DashboardSidebar />
            </div>
            <div className="dasboard-right">
                <div className="admin-contact-heading">Contact Request</div>
                <div className="contact-card-container">
                    {loading ? (
                        <div>Loading...</div> // Show loading indicator while fetching
                    ) : requests.length > 0 ? (
                        requests.map((request) => (
                            <div className="contact-card" key={request._id}>
                                {/* Pass data as props to Card5 */}
                                <Card5 props={request} 
                                />
                            </div>
                        ))
                    ) : (
                        <div>No contact requests found.</div> // Show message if no data
                    )}
                </div>
            </div>
        </div>
    );
}
