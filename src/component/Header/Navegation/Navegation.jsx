import React, { useState } from 'react';
import './Navegation.css';

const Navegation = () => {

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
            link: '/product'

        },
        {
            title: 'Contact us',
            link: '/contactus'

        },
    ];

    return (
        <div className='div1'>

            <ul>
                {
                    menuItem.map((item, index) => {
                        return (<li key={index}>{item.link ? item.title : <button onClick={() => setSubMenuIndex(subMenuIndex === index ? null : index)}  >{item.title}</button>}

                            {
                                subMenuIndex === index && item.submenu.map((subItem, subIndex) => {
                                    return (<li key={subIndex}>{subItem.title}</li>)
                                })
                            }

                        </li>)
                    })
                }


            </ul>





        </div>
    )
}

export default Navegation