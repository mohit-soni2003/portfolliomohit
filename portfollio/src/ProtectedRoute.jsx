import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const getToken = (name) => {
    const tokenValue = localStorage.getItem(name);
    console.log("Token value retrieved:", tokenValue); // Log the retrieved token value
    return tokenValue !== null; // Ensure to check for null
};

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => getToken('jwt')); // Initialize with token check

    useEffect(() => {
        const tokenExists = getToken('jwt'); 
        console.log("Token exists:", tokenExists); // Log if token exists
        setIsAuthenticated(tokenExists); // Update state based on token existence
    }, []); // No dependencies mean this runs only on mount

    // Log for debugging
    console.log("Is authenticated (after useEffect):", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
