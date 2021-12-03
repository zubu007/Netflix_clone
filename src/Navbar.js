import React, {useEffect, useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false)
        })
    }, [])

    return (
        <div className={`navbar_container ${show && 'navbar_black'}`}>
            <img 
                className='nav_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='Netflix Logo'
            />

            <img 
                className='nav_avatar'
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
                alt='Avatar'
            />
        </div>
    )
}

export default Navbar
