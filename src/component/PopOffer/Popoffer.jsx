import React, { useEffect, useState } from 'react';
import './Popoffer.css';
import popoffer from '../../assets/offer.png';


const Popoffer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closePopup = () => {
        setIsOpen(false);

    }

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (<>

        <img src={popoffer} alt='offer' className='offer_img' />
        <button className='offer_button' onClick={closePopup}> &times;</button>

        <div className='container-fluid offer-c' onClick={closePopup} >
            <div className='row offer-row'>
                <div className='col offer-row1-col' >

                </div>

            </div>

        </div>

    </>

    )
}

export default Popoffer