import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const { isAuthenticate } = useSelector( state => state.auth )

    if(isAuthenticate === true ) {
        return <Navigate to="/profile" replace />
    }

    return children
}

export default PublicRoute
