import React, { useEffect, useRef, useState } from 'react';
import './SliderImage.css';
//import Image from './Images.json';
import image1 from '../../../assets/image-1.jpg';
import image2 from '../../../assets/image-2.jpg';
import image3 from '../../../assets/image-3.jpg';
import image4 from '../../../assets/image-4.jpg';
import image5 from '../../../assets/image-5.jpg';
import image6 from '../../../assets/image-6.jpg';
import image7 from '../../../assets/image-7.jpg';
import image8 from '../../../assets/image-8.jpg';


const SliderImage = () => {

    const [count, setCount] = useState(0);
    const ImageData = [image1, image2, image3, image4, image5, image6, image7, image8];

    let ref = useRef(null);


    const plus = () => {

        setCount((previous) => {

            if (previous == ImageData.length - 1) {
                return 0;
            }
            return previous + 1;

        })

    }
    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(7);
        }

    }

    useEffect(() => {
        ref.current = setInterval(plus, 3000);
        return (
            () => {
                clearInterval(ref.current);
            }
        )

    }, []);


    return (
        <div className='container-fluid' onMouseEnter={() => { clearInterval(ref.current) }} onMouseLeave={() => { ref.current = setInterval(plus, 3000); }} >


            <div className='left-btn'>
                <button onClick={minus}>{"<"}</button>
            </div>



            <img src={ImageData[count]} alt='image' className='img' />

            <div className='right-btn'>
                <button onClick={plus}>{">"}</button>
            </div>



        </div>
    )
}

export default SliderImage