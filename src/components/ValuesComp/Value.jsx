import React, { useState } from 'react'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ValuesCard from '../ValuesCard/ValuesCard'
import {
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='right_cont' >
            <RightOutlined onClick={onClick} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='left_cont' >

            <LeftOutlined onClick={onClick} />
        </div>

    );
}

const Value = ({ values }) => {
    const [index, setIndex] = useState(0);



    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        lazyload: true,
        autoplay: false,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => {
            setIndex(next);
        },
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }

    return (
        <div className='values_container'>
            <Slider {...settings}>

                {
                    values.map((v, idx) => (
                        <div key={v.id} className={idx === index ? 'slides activeSlides' : "slides"}  >
                            <ValuesCard val={v} item='true'
                                border={idx === index ? '1' : '0'}
                            //  color={idx === index ? 'var(--border-golden)' : 'whiet'} 
                            />

                        </div>
                    ))
                }
            </Slider >
        </div >
    )
}

export default Value