import React from 'react'
import './Header.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FiPhone } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { RiBankCardLine } from 'react-icons/ri';
import { Link } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa';




const Header = () => {
    return (

        <div className='container-fluid header-container-fluid'>

            <div className='row header-row'>
                <div className='col-lg-4 header-col-4'>

                    <div className='header-col-4-div-img'>
                        <img src={logo} alt='logo' />
                    </div>

                    <div className='header-col-4-div-vl'></div>

                    <div className='header-col-4-div-text'>
                        <h5>श्री वरद विनायक</h5>
                        <p>ता.- जत, जि.- सांगली </p>
                        <div className='header-col-4-div-text-hl'></div>
                        <h5>Shri Varad Vinayak</h5>
                        <p>Tal.- Jat, Dist.- Sangli</p>
                    </div>

                    <div className='menu'>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>

                    </div>

                </div>
                {/*---------------------------------------------------------------------------------------------*/}
                <div className='col-8 header-col-8'>


                    <div className='row header-col-8-row'>
                        <div className='col-12 header-col-8-row-col-121'>
                            <ul>
                                <li>Skip to main content</li>
                                <li><FiPhone size={24} className='font-icon' /> 08363507100</li>
                                <li><FontAwesomeIcon icon={faPhone} className='font-icon' /> 18008906766</li>
                                <li> <RiBankCardLine className='font-icon' />Block ATM Card: 18001030 & 18004250018</li>
                                <li><button>AMALGAMATION</button></li>

                            </ul>


                        </div>
                        <div className='col-12 header-col-8-row-col-122'>
                            <ul>
                                <li><Link to='/'> Home</Link></li>
                                <li><Link to='/'> About us</Link></li>
                                <li><Link to='/'> Banking Products</Link></li>
                                <li><Link to='/'> E-Services</Link></li>
                                <li><Link to='/'>Customer Care</Link></li>
                                <li><Link to='/'> <button>Internet Banking</button></Link><Link to='/'> <button>CUSTOMER GRIEVANCE</button></Link></li>
                            </ul>



                        </div>

                    </div>



                </div>


            </div>




        </div>
    )
}

export default Header