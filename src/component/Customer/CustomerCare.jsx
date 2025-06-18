import React, { use, useContext } from 'react'
import './CustomerCare.css';
import contact from '../../assets/about.jpg';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { ThemeContext } from '../DarkLight/DarkLight';


const CustomerCare = () => {

    const { theme, toggleMoonSun } = use(ThemeContext);

    return (
        <div className={theme === 'light' ? 'CustomerCare' : 'CustomerCare-dark'} >
            <div className={theme === 'light' ? 'container div1' : 'container div1-dark'}  >
                <div className='div2'>
                    <h1>Contact Us</h1>
                </div>

                <div className='row div3'>
                    <div className='col-lg div31'>
                        <img src={contact} alt='contact us' width={200} height={200} />
                    </div>
                    <div className='col-lg div32'>
                        <h4 className='h4'>KARNATAKA VIKAS GRAMEENA BANK</h4>
                        <p ><address>
                            HEAD OFFICE , P. B. NO. 111,<br />
                            BELGAUM ROAD , DHARWAD- 580 008,<br />
                            KARNATAKA, INDIA<br />
                            PHONE: 08363507100 & 1800-890-6766<br />
                            EMAIL: customercare@kvgbank.com<br />
                        </address>
                        </p>

                    </div>
                    <div className='col-lg div33'>

                        <h4>For General Queries</h4>
                        <p>  <IoMdMail />  customercare@kvgbank.com <br />

                            <FaPhoneAlt /> 08363507100 and 1800-890-6766 (TollFree)<br />
                        </p>

                        <h4>Instant ATM Card Block</h4>
                        <p>    TollFree : 18001030 & 18004250018 <br />

                        </p>
                    </div>
                </div>

                <div>
                    <p>
                        <h4>  Grievance Redress System </h4>
                        Online Grievance Redress System (OGRS) is an online web-enabled system developed by KVG Bank for Speedy redress of your grievance. OGRS is the platform based on web technology which primarily aims to enable submission of grievances by the aggrieved citizens from anywhere and anytime (24x7) basis
                    </p>

                </div>

                <div>
                    <p>
                        <h4> Regional Offices</h4>
                        <h5> REGIONAL OFFICE BAGALKOT</h5>
                        Karnataka Vikas Grameena Bank, <br />
                        Plot no 24,2/3/4,Sector-25,<br />
                        Navanagar, BAGALKOT-587103<br />

                        <FaPhoneAlt /> 08354-201474,Fax:08354236347<br />

                        <IoMdMail />  bgkro@kvgbank.com
                    </p>
                </div>

            </div>

        </div>
    )
}

export default CustomerCare