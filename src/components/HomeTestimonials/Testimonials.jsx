import React, { useState, useEffect } from 'react'
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom'
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';

import './Testimonials.scss'
// import { testimonialsdata } from '../../data/testimonialsdata'
import Testimaonialscard from '../TestimoniesCard/TestimonyCard';
import { appUrl } from '../../config/appUrl'

function SampleNextArrow(props) {

  const { onClick } = props;
  return (
    <div className='right_cont_'> <div className="right">  <RightOutlined onClick={onClick} /></div></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='left_cont_'><div className="left">  <LeftOutlined onClick={onClick} /></div></div>

  );
}



const Testimonials = () => {
  const navigate = useNavigate();
  const [testimonies, setTestimonies] = useState([])
  const [index, setIndex] = useState(0)

  const mediaMatch = window.matchMedia('(max-width: 600px)');
  const [matches, setMatches] = useState(mediaMatch.matches);


  useEffect(() => {
    const getValues = async () => {
      const url = appUrl.url;
      const key = appUrl.key;
      const testimonyData = await axios.get(`${url}/testimonials?key=${key}`)
      console.log(testimonyData.data);
      setTestimonies(testimonyData.data)
    }
    getValues()


  }, [])

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch])

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
    beforeChange: (current, next) => setIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          beforeChange: (current, next) => setIndex(next),
          // afterChange: (current, next) => setIndex(current),
        }
      }
    ]
  }
  return (
    <div className='testimonial'>
      <div className="side_text">
        <h3>testimonials</h3>
      </div>
      {
        !matches ?
          <Slider {...settings} className='slider'>
            {
              testimonies.map((testimony, idx) => (
                <div key={testimony.id} className={idx === index ? 'slides activeSlides' : "slides"} >

                  <Testimaonialscard testimony={testimony} item='true'
                    border={idx === index ? '1' : '0'}
                  />
                </div>
              ))
            }
          </Slider> :

          <Slider {...settings} className='slider'>
            {
              testimonies.map((testimony, idx) => (
                <div key={testimony.id}
                  className={(idx === testimonies.length - 1) ? 'slides_mob' : idx === index ? 'slides_mob' : " slides"}
                  // className={idx === index ? 'slides_mob' : " slides"}
                  // className='slides activeSlides' 
                  
                >

                  <Testimaonialscard testimony={testimony} item='true'
                    border={idx === index ? '1' : '1'}
                  />
                </div>
              ))
            }
          </Slider>
      }
      <div className="go_to_feedback" onClick={() => navigate('/feedback')}><p>Click here if you'd like to say some 'Nice - Not So Nice' things about Us? 😉</p></div>
    </div>
  )
}

export default Testimonials