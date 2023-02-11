import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const DefaultTemplate = () => {
    const params = useParams()

    return (
        <div>
            <h2>{ params.pages.toUpperCase() }</h2>
        </div>
    )
}

export default DefaultTemplate
