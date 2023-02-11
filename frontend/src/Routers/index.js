import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home"
import RegisterPage from "../Pages/RegisterPage"
import PageNotAvailable from "../Pages/pageNotAvailable"
import NavBar from "../components/NavBar"
import LoginPage from "../Pages/LoginPage"
import UserProfile from "../Pages/UserProfile"
import DefaultTemplate from "../Pages/DefaultTemplate"

export default () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/about" element={<UserProfile />} />
                <Route path="/">
                    <Route path="company/:pages" element={<DefaultTemplate />} />
                </Route>
                <Route path="*" element={<PageNotAvailable />} />
            </Routes>
        </BrowserRouter>
    )
}