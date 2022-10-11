import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        }else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)

    }, []);


  return (
        <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>

        <img
        onClick={() => navigate('/')}
         className='nav__logo'
         src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
             alt='' 
        />

        <img
        onClick={() => navigate('/profile')}
        className='nav__avatar'
         src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' alt=''
        />

        
        </div>
        </div>

  );
}

export default Nav