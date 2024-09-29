import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, requiredRole }) => {
    const userRole = localStorage.getItem('role');

    console.log("User Role:", userRole); 
    console.log("Required Role:", requiredRole); 

    if (userRole !== requiredRole) {
        console.log("Access Denied"); 
        return <Navigate to="/" replace />;
    }

    return element;
};

export default ProtectedRoute;
