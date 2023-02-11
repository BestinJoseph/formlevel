import React from 'react'
import { Link } from 'react-router-dom'

const FormLists = () => {
    const forms = ["one", "two", "three", "four", "five", "six"]
    return (
        <div style={{ marginTop: '1rem', }}>
            {
                forms.map( (form, i) => (
                    <div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 9fr 2fr 1fr', width: '100%', border: '1px solid gray', marginBottom: '3px', padding: '.5rem 0' }}>
                        <p style={{paddingLeft: '1rem', }}>{i + 1}</p>
                        <p>{form}</p>
                        <p style={{ fontSize: '.75rem', background: 'yellow', borderRadius: '.5rem', display: 'inline', }}>pending</p>
                        <p style={{cursor: 'pointer', }}><Link to="/forms/12345">...</Link></p>
                    </div>
                ))
            }
        </div>
    )
}

export default FormLists