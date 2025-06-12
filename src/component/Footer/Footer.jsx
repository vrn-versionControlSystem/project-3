import React from 'react';
import './Footer.css';
import Declairation from './Declairation/Declairation.jsx';

const Footer = () => {
    return (<>
        <div className='container-fluid footer-container-fluid'>

            <div className='container home-container'>
                <div className='row footer-row2'>
                    <div className='col-lg-12 footer-col3'>
                        <ul>
                            <li><h5> RATES AND CHARGES</h5></li>
                            <li> Deposit Interest Rates</li>
                            <li> Loan Products</li>
                            <li> Loan Interest Rates</li>
                            <li>  Secured assets possessed </li>
                            <li> Prudential Norms on IRACP</li>
                            <li> Microfinance Loans </li>
                            <li> Service Charges & Fees</li>
                            <li> Tenders</li>
                            <li>SARFAESI Notice / Sale Notice</li>

                        </ul>
                        <ul>
                            <li><h5>MANDATORY DISCLOSURE</h5>  </li>
                            <li> Policies of Bank</li>
                            <li> DICGC Details</li>
                            <li> DEAF Scheme</li>
                            <li>DEAF Account List</li>
                            <li>MOUs details</li>
                            <li>Annual Reports</li>
                            <li>Financial Statement</li>
                            <li> Right to Information</li>
                            <li> Interest subsidy scheme</li>

                        </ul>
                        <ul>
                            <li><h5>STAFF RELATED</h5></li>
                            <li>Staff Details along with Remuneration </li>
                            <li>Service Regulation </li>
                            <li>Careers and Recruitments</li>
                            <li>Pension Portal</li>
                            <li>Pension Regulation</li>
                            <li>CLWS Guidelines</li>
                            <li>Reservation of Roster </li>
                            <li>Format to be Submitted by EX-EMPLOYEES</li>
                            <li>Format to be Submitted by Family Employees </li>
                            <li>Computer Increment Arrears from 01/11/1993</li>
                        </ul>
                    </div>


                </div>

                <div className=''>
                    <div className='col-lg-12 '>
                        <Declairation />
                    </div>

                </div>

                <div className='row footer-row1'>

                    <div className='col-lg-12 footer-col1'>
                        <ul>
                            <li>RBI</li>
                            <li> NABARD</li>
                            <li>Canara Bank</li>
                            <li>Deposit Int Rates</li>
                            <li> Loan Int Rates</li>
                            <li>Service Charges</li>


                        </ul>

                    </div>
                </div>



            </div>

        </div>

        <div className='container-fluid end'>
            <div className='row footer-rowend'>
                <div className='col-lg-12 footer-col2'>
                    <p>Site best viewed in browsers I.E 11+, Mozilla 3.5+, Chrome 3.0+, Safari 5.0+ on all desktops, laptops,
                        and Android & iOS mobile/tablet devices<br />
                        Copyright © 2020 Karnataka Vikas Grameena Bank. All Rights Reserved</p>

                </div>
            </div>
        </div>




    </>








    )
}

export default Footer