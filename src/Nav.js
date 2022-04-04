import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            }
            else {
                handleShow(false)
            }
        });
        return () => { window.removeEventListener('scroll'); };
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img className='nav-logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'></img>

            <img className='nav-avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'></img>

        </div>
    )
}

export default Nav;