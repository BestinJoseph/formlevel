import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import useStyles from './NavBarStyles'
import { logoutReducer } from '../../features/auth/authSlice'

const NavBar = () => {
    const nav = 
    [
        {name: "Sign In", link: 'login', public: true }, 
        {name: "Sign Up", link: 'register', public: true }, 
        {name: 'My Forms', link: "forms"},
        {name: "Username", link: 'profile', public: false}, 
        {name: "Sign Out", link: 'logout', public: false},
    ]
    const {user, isAuthenticate } = useSelector( state => state.auth )
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleLogout = (link) => {
        if( link === 'logout') dispatch(logoutReducer())
    }

    return (
        <div className={classes.navContainer}>
            <div>
                <h1>Form Level</h1>
            </div>
            <div className={classNames(classes.navMenus)}>
                <ul>
                    {   
                        nav.map( (na, i) => {
                            if (isAuthenticate) {
                                return na.link === 'login' || na.link === 'register' ? null : <Link to={na.link} key={i} style={{ marginRight: '1rem', textDecoration: 'none', fontWeight: 600 }} onClick={() => handleLogout(na.link)} >{na.name}</Link>
                            } else {
                                return na.link === 'profile' || na.link === 'logout' || na.link === 'forms' ? null : <Link to={na.link} key={i} style={{ marginRight: '1rem', textDecoration: 'none', fontWeight: 600 }}>{na.name}</Link>
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar
