import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home"
import RegisterPage from "../Pages/RegisterPage"
import PageNotAvailable from "../Pages/pageNotAvailable"
import NavBar from "../components/NavBar"
import LoginPage from "../Pages/LoginPage"
import UserProfile from "../Pages/UserProfile"
import DefaultTemplate from "../Pages/DefaultTemplate"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import FormLists from "../Pages/FormLists"
import FormSingle from "../Pages/FormSingle"

export default () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<UserProfile />} />
                <Route path="forms" element={<PrivateRoute><DefaultTemplate /></PrivateRoute>}>
                    <Route path="" element={<FormLists />} />
                    <Route path=":formid" element={<FormSingle />} />
                </Route>
                <Route path="*" element={<PageNotAvailable />} />
                <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
                <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}