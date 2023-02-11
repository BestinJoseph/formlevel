import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { isAuthenticate } = useSelector( state => state.auth )

    if(isAuthenticate === false) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default PrivateRoute
