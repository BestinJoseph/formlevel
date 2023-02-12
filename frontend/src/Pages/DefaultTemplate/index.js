import React, { useState } from 'react'
import { Link, Outlet, useNavigate, } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const DefaultTemplate = () => {
    const navigate = useNavigate()
    const [name, setName] = useState(null)

    const handleForms = () => {
        console.log('nice.')
        navigate('/forms')
    }

    console.log(name)

    return (
        <div style={{display: 'flex', width: '1000px', margin: '0 auto',  }}>
            <div style={{ width: '20%', borderRight: '1px solid gray', height: '25rem', }}>
                <ul style={{ listStyle: 'none', paddingTop: '3rem', }}>
                    <li style={{ borderBottom: '1px solid blue', padding: '.75rem 2rem', cursor: 'pointer', }} onClick={() => handleForms()}>Forms</li>
                    <li style={{ borderBottom: '1px solid blue', padding: '.75rem 2rem', cursor: 'pointer', }}>Drafts</li>
                    <li style={{ borderBottom: '1px solid blue', padding: '.75rem 2rem', cursor: 'pointer', }}>Rejected</li>
                    {/* <li>Drafts</li> */}
                </ul>
            </div>
            <div style={{ padding: '3rem 2rem', width: '80%', }}>
                <div >
                    <Link style={{ textDecoration: 'none', fontWeight: 600 }} to="/forms">Forms</Link> { name !== null ? <><IoIosArrowForward style={{ display: 'inline', }}/> {name}</> : null }
                </div>
                <Outlet context={[setName]} />
            </div>
        </div>
    )
}

export default DefaultTemplate
