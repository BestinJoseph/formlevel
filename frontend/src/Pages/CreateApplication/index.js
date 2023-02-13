import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const CreateApplication = () => {
    const [setName] = useOutletContext()

    useEffect(()=>{
        setName('Create Form')
    },[])

    return (
        <div>CreateApplication</div>
    )
}

export default CreateApplication