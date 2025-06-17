import React, { use, useState } from 'react'
import './Header.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FiPhone } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { RiBankCardLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../DarkLight/DarkLight';
import Navegation from './Navegation/Navegation';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { Button } from 'reactstrap';




const Header = () => {

    const { theme, toggleMoonSun } = use(ThemeContext);

    const [subMenuIndex, setSubMenuIndex] = useState(null);

    const menuItem = [
        {
            title: 'Home',
            link: '/'

        },
        {
            title: 'About',
            link: '/about'

        },
        {
            title: 'Services',
            submenu: [
                {
                    title: 'service1',
                    link: '/service/1'

                },
                {
                    title: 'service2',
                    link: '/service/2'

                },
                {
                    title: 'Service3',
                    link: '/service/3'

                },
            ]

        },
        {
            title: 'Product',
            submenu: [
                {
                    title: 'service1',
                    link: '/service/1'

                },
                {
                    title: 'service2',
                    link: '/service/2'

                },
                {
                    title: 'Service3',
                    link: '/service/3'

                },
            ]

        },
        {
            title: 'Contact us',
            link: '/contactus'

        },
    ];

    const [isOpen, setIsOpen] = useState(true);

    const menuToggle = () => {
        setIsOpen(!isOpen);


    }

    return (

        <div className='container-fluid header-container-fluid'>

            <div className='row header-row'>
                <div className={theme === 'dark' ? 'col-lg-4 header-col-4-dark' : 'col-lg-4 header-col-4-light'}>

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

                    <div className='menu' onClick={menuToggle}>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>

                    </div>

                </div>
                {/*---------------------------------------------------------------------------------------------*/}


                <div className={isOpen ? 'col-8 header-col-8' : 'header-col-8-isOpen'}>


                    <div className='row header-col-8-row'>
                        <div className={isOpen ? 'col-12 header-col-8-row-col-121' : 'col-12 header-col-8-row-col-121-isOpen'}  >
                            <ul>
                                <li>Skip to main content</li>
                                <li><FontAwesomeIcon icon={faWhatsapp} className='font-icon' /> 08363507100</li>
                                <li><FontAwesomeIcon icon={faPhone} className='font-icon' /> 18008906766</li>
                                <li> <RiBankCardLine className='font-icon' />Block ATM Card: 18001030 & 18004250018</li>
                                <li><button className='B'>AMALGAMATION</button></li>

                            </ul>


                        </div>
                        <div className={isOpen ? 'col-12 header-col-8-row-col-122-light' : 'col-12 header-col-8-row-col-122-light-isOpen'}  >

                            <ul className='outer'>
                                {
                                    menuItem.map((item, index) => {
                                        return (<li key={index}>{item.link ? (<Link to={item.link}><li>{item.title}</li> </Link>) : (<li className='submenu-li' onClick={() => setSubMenuIndex(subMenuIndex === index ? null : index)}>{item.title} {subMenuIndex === index ? <IoIosArrowUp /> : <MdKeyboardArrowDown />}</li>)}
                                            {
                                                subMenuIndex === index && (<ul className='inner'>
                                                    {
                                                        item.submenu.map((subItem, subIndex) => {
                                                            return (<li key={subIndex}><Link to={subItem.link}>{subItem.title}</Link> </li>)
                                                        })
                                                    }
                                                </ul>)
                                            }

                                        </li>
                                        )
                                    })

                                }



                            </ul>
                            <div className='col-lg two-button'>
                                <button className='B1'>INTERNET BANKING</button>
                                <button className='B2'>CUSTOMER GRIEVANCE</button>

                            </div>


                        </div>

                    </div>



                </div>


            </div>




        </div >
    )
}

export default Header