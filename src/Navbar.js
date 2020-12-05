import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="http://www.pngmart.com/files/10/Netflix-Logo-PNG-Image.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://www.pinclipart.com/picdir/middle/38-388919_computer-icons-user-profile-clip-art-avatar-user.png"
                alt="Avatar Logo"
            />
        </div>
    )
}

export default Navbar
