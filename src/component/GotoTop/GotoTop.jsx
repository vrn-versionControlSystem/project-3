import React, { useEffect, useState } from 'react';
import './GotoTop.css';
import { FaArrowUp } from 'react-icons/fa';
import { FaCircleArrowUp } from 'react-icons/fa6';

const GotoTop = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const gotoTop = () => {

        window.scrollTo({ top: 0, right: 0, behaviour: "smooth" });


    }




    return (

        <div  >



            <FaCircleArrowUp className={isVisible ? 'scroll-to-top' : 'disable'} onClick={gotoTop} />



        </div>

    )
}



export default GotoTop