import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri'

import formss from '../../utils/comments.js'
import useStyles from './FormSingleStyles'

const FormSingle = () => {
    const { formid } = useParams()
    const [formData, setFormData] = useState(null)
    const [setName] = useOutletContext()
    const role = 'admin'
    const classes = useStyles()

    useEffect(()=>{
        formss.forms.map( (fo) => {
            if( fo._id === formid ) {
                setFormData(fo)
                setName( preState => {
                    return preState = fo.name
                })
            }
        })
    },[formss])

    if(!formData) {
        return <div>Loading...</div>
    }

    return (
        <div style={{ marginTop: '1rem', }}>
            <h4 style={{ background: 'yellow', marginBottom: '1rem', display: 'inline-block', padding: '.5rem 1rem', borderRadius: '0 10px 10px 10px', }}>{ new Date().toDateString() }</h4>
            <div style={{background: '#E9F8F9', padding: '1rem', width: '70%', marginBottom: '2rem', }}>
                <p style={{ lineHeight: '1.5' }}>Form name: {formData.name}</p>
                <button style={{ marginTop: '.5rem', cursor: 'pointer', }}>view filled form</button>
            </div>
            {
                formData.approvals.map((approval, i) => (
                    <div key={i} className={classes.approvalSections}>
                        <div style={{background: 'blue', minHeight: '3rem', position: 'relative', width: '100%' }}>
                            <div style={{ height: '10px', width: '10px', background: 'blue', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%'}}></div>
                            <h5 style={{ position: 'absolute', top: 0, left: '2rem', display: 'block', width: '20rem', }}>{approval.department}</h5>
                        </div>
                        {
                            approval.status !== '' ?
                                <div style={{ marginTop: '2rem', paddingBottom: '1.5rem', }}>
                                    {/* { role && role == 'admin' ? <RiAdminFill style={{ fontSize: '3rem', }}/> : <RiUser3Fill style={{ fontSize: '3rem', }}/>} */}
                                    {
                                        approval.comments.map((comment, j) => (
                                            <div key={j} style={{ display: 'grid', marginBottom: '1rem', gridTemplateColumns: '1fr 8fr', padding: '1rem', border: '1px solid #E9F8F9', marginLeft: comment.role !== 'admin' ? '3rem' : '0rem' }}>
                                                { comment.role === 'admin' ? <RiAdminFill style={{ fontSize: '3rem', }}/> : <RiUser3Fill style={{ fontSize: '3rem', }}/> }
                                                <div>
                                                    <p>{comment.content}</p>
                                                    <p style={{ fontSize: '.85rem', marginTop: '1rem', color: '#EB6440' }}>{comment.updatedOn}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', }}>
                                        { role === 'admin' ? approval.approved ? null : <button style={{ marginRight: '1rem', padding: '.5rem .75rem', background: '#379237', border: 'none', color: 'white', borderRadius: '5px', }}>Approve</button>  : null }
                                        <h4><span style={{ background: 'yellow', padding: '.5rem', borderRadius: '5px', }}>{approval.status}</span> Waiting for HISDESIGNINATION Approval</h4>
                                    </div>
                                </div> : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default FormSingle