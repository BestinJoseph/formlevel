import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import formss from '../../utils/comments.js'


const FormLists = () => {
    const [forms, setForms] = useState([])
    const [setName] = useOutletContext()

    useEffect(async ()=>{
        setForms([...formss.forms])
        setName(null)
    },[formss])

    return (
        <div style={{ marginTop: '1rem', }}>
            {
                forms && forms.map( (form, i) => (
                    <div key={i} style={{display: 'grid', gridTemplateColumns: '1fr 9fr 2fr 1fr', width: '100%', border: '1px solid #E9F8F9', marginBottom: '3px', padding: '.75rem 0' }}>
                        <p style={{paddingLeft: '1rem', }}>{i + 1}</p>
                        <p>{form.name}</p>
                        <div>
                            <p style={{ fontSize: '.75rem', background: 'yellow', borderRadius: '.5rem', display: 'inline-block', padding: '.25rem .5rem', }}>{ form.status }</p>
                        </div>
                        <Link to={`/forms/${form._id}`}><HiOutlineDotsHorizontal /></Link>
                    </div>
                ))
            }
        </div>
    )
}

export default FormLists