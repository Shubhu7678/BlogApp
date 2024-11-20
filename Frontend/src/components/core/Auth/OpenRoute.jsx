import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OpenRoute = ({children}) => {
   
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    console.log("Token : ", token);

    useEffect(() => { 

        if (token) { 

            navigate('/dashboard/my-profile');
        }

    },[token,navigate])
    
    if (token === null) {

        return children
    }

    return (
        <></>
    )
}

export default OpenRoute