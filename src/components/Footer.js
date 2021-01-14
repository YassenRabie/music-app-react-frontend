import React from 'react'

const Footer = () => {
    return (
        <footer className="footer container">
           <div className="footer-info">
                <img src="../images/logo white-01.png" height="40"/>
                <div className="footer-menu">
                    <a className="link">link</a>
                    <a className="link">link</a>
                    <a className="link">link</a>
                </div>
            </div> 
            <div className="footer-navbar">
                <div className="footer-navbar-links">
                    <a className="link">link</a>
                    <a className="link">link</a>
                    <a className="link">link</a>
                    <a className="link">link</a>
                    <a className="link">link</a>
                </div>
                <span className="copyright">@ 2019 MUSICDB</span>
            </div>
        </footer>
    )
}

export default Footer
