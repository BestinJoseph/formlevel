import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import useStyles from './NavBarStyles'

const NavBar = () => {
    const nav = 
    [
        {name: "Sign In", link: 'login', public: true }, 
        {name: "Sign Up", link: 'register', public: true }, 
        {name: 'About us', link: "company/about", public: true}, 
        {name: "Privacy Policy", link: 'company/terms', public: true}, 
        {name: "How it works", link: "company/howtouse", public: true},
        {name: "Sing Out", link: 'logout', public: false},
        {name: "Username", link: 'profile', public: false}, 
    ]
    const {user, isAuthenticate } = useSelector( state => state.auth )
    const classes = useStyles()

    return (
        <div className={classes.navContainer}>
            <div>
                <h1>Form Level</h1>
            </div>
            <div className={classNames(classes.navMenus)}>
                <ul>
                    { nav.map( (na, i) => {
                        if(isAuthenticate === false ) {
                            return na.public === true ? <Link to={na.link} key={i} style={{ marginRight: '1rem', textDecoration: 'none', fontWeight: 600 }}>{na.name}</Link> : null
                        } else {
                            return na.public === false ?  <Link to={na.link} key={i} style={{ marginRight: '1rem', textDecoration: 'none', fontWeight: 600 }}>{na.name}</Link> : null
                        }
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar
