import React, { use, useContext } from 'react';
import './Main.css';
import { FaCarSide, FaFacebook, FaFacebookF, FaHeartbeat, FaLinkedin, FaUserShield, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GiLifeBar } from 'react-icons/gi';
import bank from '../../assets/8953258.jpg';
import { BsBank } from 'react-icons/bs';
import { PiHandDeposit } from 'react-icons/pi';
import { ThemeContext } from '../DarkLight/DarkLight';
import image1 from '../../assets/image-1.jpg';
import image2 from '../../assets/image-2.jpg';
import image3 from '../../assets/image-3.jpg';
import image4 from '../../assets/image-4.jpg';
import image5 from '../../assets/image-5.jpg';
import image6 from '../../assets/image-6.jpg';
import image7 from '../../assets/image-7.jpg';
import image8 from '../../assets/image-8.jpg';
import SliderImage from './image/SliderImage';


const Main = () => {

    const { theme, toggleMoonSun } = use(ThemeContext);

    return (
        <>

            <div className='container-fluid main-container-fluid'>
                <div className='row main-row'>
                    <div className={theme === 'light' ? 'col-lg main-row-col-light ' : 'col-lg main-row-col-dark'}     >
                        {/*  
                    <div className='imgSlider'>ok</div>
                  */}

                        <SliderImage />

                    </div>

                </div>

                <div className='container main-container'>
                    <div className='row main-container-row1'>
                        <div className='col-lg main-container-row1-col'>
                            <h1 >Empowering Agriculture and Rural Sectors</h1>
                            <p>
                                Karnataka Vikas Grameena Bank is operating in almost 1/3rd of geographical area of Karnataka. Catering to the financial and banking needs of more than 84 lakh customers in 2033 villages through 629 Branches.
                            </p>

                        </div>

                    </div>
                    <div className='row products'>
                        <div className='col-lg products-col'>

                            <PiHandDeposit className='products-icon' />
                            <h5>Deposit Products</h5>
                            <p>We provide a wide range of savings accounts and deposit schemes. Easy to Invest and operate
                            </p>

                        </div>
                        <div className='col-lg products-col'>
                            <FaCarSide className='products-icon' />
                            <h5>Loan Products</h5>
                            <p>We strive to provide you with working capital facilities to finance the day-to-day operations of your business.</p>
                        </div>
                        <div className='col-lg products-col'>
                            <BsBank className='products-icon' />
                            <h5>Internet Banking</h5>
                            <p>No Queue, No waiting. Our digital application allows you to access your account using a mobile / Internet.
                            </p>
                        </div>

                    </div>


                    <div className='row'>
                        <div className='col-lg-4'>


                            <ul className='three-ul'>
                                <li>
                                    <FaUserShield className='three-ul-icon' />
                                    <h5>Pay Bills</h5>
                                    Pay all your bills quickly and easily in one place.
                                </li>
                                <li>
                                    <FaHeartbeat className='three-ul-icon' />
                                    <h5>Instant Transfers</h5>
                                    Send and receive money instantly, securely, and hassle-free.
                                </li>
                                <li>

                                    <GiLifeBar className='three-ul-icon' />
                                    <h5>Get Statements</h5>
                                    Access your financial statements anytime for easy transaction tracking.
                                </li>

                            </ul>

                        </div>
                        <div className='col-lg-4 digital_image'>
                            <img src={bank} alt='bank' width={400} height={500} />
                        </div>
                        <div className='col-lg-4 digital_bank'>

                            <h1>Digital Banking With KVGB Mobile Banking</h1>
                            <p>Experience trust, growth, and excellence with our bank—your reliable partner in achieving financial success and empowering dreams. Together, we build a brighter future!</p>

                            <ul className='four-ul'>
                                <li>
                                    <h1>629</h1>
                                    <h5> BRANCHES</h5>

                                </li>
                                <li>
                                    <h1>60L+</h1>
                                    <h5> HAPPY CUSTOMERS</h5>

                                </li>
                                <li>
                                    <h1>50</h1>
                                    <h5>ATM CENTERS</h5>

                                </li>
                                <li>
                                    <h1>300k+</h1>
                                    <h5>Mobile Bankers</h5>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
            </div >


            <div className='container-fluid dummy'>
                <div className='row dummy-row'>
                    <div className='col dummy-row-col'>
                        <ul>
                            <li><FaFacebook className='social-media-icon icon1' /><span>Facebook </span>  </li>
                            <li><FaLinkedin className='social-media-icon icon2' /><span>LinkedIn</span>   </li>
                            <li><FaXTwitter className='social-media-icon icon3' /><span> X </span> </li>
                            <li><FaSquareInstagram className='social-media-icon icon4' /><span>Instagram</span> </li>
                            <li><FaWhatsappSquare className='social-media-icon icon5' /><span>WhatsApp</span></li>
                            <li><FiPhoneCall className='social-media-icon icon6' /><span>1800 8906 7600</span></li>

                        </ul>

                    </div>

                </div>

            </div>


        </>

    )
}

export default Main