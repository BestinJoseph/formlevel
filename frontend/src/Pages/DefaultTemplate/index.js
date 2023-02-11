import React from 'react'
import { Outlet, useNavigate, } from 'react-router-dom'

const DefaultTemplate = () => {
    const navigate = useNavigate()

    const handleForms = () => {
        console.log('nice.')
        navigate('/forms/123456')
    }

    return (
        <div style={{display: 'flex', width: '1000px', margin: '0 auto',  }}>
            <div style={{ width: '20%', borderRight: '1px solid gray', height: '25rem', }}>
                <ul style={{ listStyle: 'none', paddingTop: '3rem', }}>
                    <li style={{ borderBottom: '1px solid blue', padding: '.75rem 2rem', cursor: 'pointer', }} onClick={() => handleForms()}>Forms</li>
                    <li style={{ borderBottom: '1px solid blue', padding: '.75rem 2rem', cursor: 'pointer', }}>Drafts</li>
                    {/* <li>Drafts</li> */}
                </ul>
            </div>
            <div style={{ padding: '3rem 2rem', width: '80%', }}>
                <div >
                    Forms / new form.
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultTemplate
