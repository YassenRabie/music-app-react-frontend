import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar container flex">
            <a className="logo" href="/">
                <img src="../images/logo colored-01.png" width="100"/>
            </a>
            <div className="nav-links flex">
                <a className="link">PROFILE</a>
                <a><img src="../images/profile icon-01.png" width="80"/></a>
            </div>
        </nav>
    )
}

export default Navbar
