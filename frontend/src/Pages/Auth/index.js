import React, { useState } from 'react'
import { TextField } from '@mui/material'
import FormField, { Field, Form } from 'formik'

const Auth = () => {
    const [auth, setAuth] = useState({username: '', password: ''})

    return (
        <div>
            <div>
                <h4>Login Page</h4>
                <Field>
                    <Form>
                    <Field as={TextField} value={auth.username} placeholder="Username" onChange={ e => { setAuth({...auth, username: e.target.value}) }} />
                    <input type="password" value={auth.password} placeholder="Password" onChange={ e => { setAuth({...auth, password: e.target.value}) }} />
                    <input type="submit" value="Login" />
                    </Form>
                </Field>
            </div>
        </div>
    )
}

export default Auth
