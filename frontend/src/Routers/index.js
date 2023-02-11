import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home"
import Auth from "../Pages/Auth"
import PageNotAvailable from "../Pages/pageNotAvailable"
import NavBar from "../components/NavBar"

export default () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                <Route path="*" element={<PageNotAvailable />} />
            </Routes>
        </BrowserRouter>
    )
}