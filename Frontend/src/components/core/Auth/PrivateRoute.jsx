import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({children}) => {
    
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => { 

        if (!token) { 

            navigate('/login');

        }
    },[token,navigate])

    if (token) { 

        return children;
    }


}

export default PrivateRoute