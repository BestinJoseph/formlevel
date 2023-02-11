import React, { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'

const LoginPage = () => {
    const initialValues = {username: '', password: ''}

    const handleSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    return (
        <div style={{ width: '30%', margin: '4rem auto 0 auto', }}>
            <Typography variant="h4" sx={{mb: 4, }}>User Login</Typography>
            <div style={{ padding: '2rem', border: '1px solid blue', }}>
                <Box sx={{mb:5}}>
                    <Typography variant="p" sx={{mb:6}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
                </Box>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                    <Form>
                        <Box sx={{mb: 3, width: '100%', }}>
                            <Field as={TextField} fullWidth type="text" name="username" placeholder="Username" variant="standard" />
                        </Box>
                        <Box sx={{mb: 5}}>
                            <Field as={TextField} type="password" name="password" placeholder="Password" fullWidth variant="standard" />
                        </Box>
                        <Button variant="contained" color="success">Login</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage
