import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import useStyles from './NavBarStyles'

const NavBar = () => {
    const nav = [
                    {name: "Sign In", link: 'login'}, 
                    {name: "Sign Up", link: 'register'}, 
                    {name: "Sing Out", link: 'logout'}, 
                    {name: "Username", link: 'profile'}, 
                    {name: 'About us', link: "about"}, 
                    {name: "Privacy Policy", link: 'terms'}, 
                    {name: "How it works", link: "howtouse"}
                ]
    const state = useSelector( state => state )
    const classes = useStyles()

    console.log(state)

    return (
        <div className={classes.navContainer}>
            <div>
                <h1>Form Level</h1>
            </div>
            <div className={classNames(classes.navMenus)}>
                <ul>
                    { nav.map( (na, i) => (
                        <Link to={na.link} key={i} style={{ marginRight: '1rem', textDecoration: 'none', fontWeight: 600 }}>{na.name}</Link>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar
