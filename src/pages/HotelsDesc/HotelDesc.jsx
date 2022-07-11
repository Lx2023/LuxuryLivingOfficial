import React, { useState, useEffect } from 'react'
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import jsPDF from 'jspdf'
import { useLocation, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined,
  CloseOutlined
} from '@ant-design/icons'
import ShareModal from '../../components/ShareComponent/ShareModal';
import Pdf from '../../components/Pdf/Pdf';
import { appUrl } from '../../config/appUrl';
import axios from 'axios';
import Loading from "../../utils/Loading/Loading"

const HotelDesc = () => {
  // hooks ------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const [showShare, SetShowShare] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hotel, setHotel] = useState({});
  const [pics, setPics] = useState([]);

  // popup
  const [flyer, setFlyer] = useState(false);
  const [name, setName] = useState('');
  const [agency, setAgency] = useState('');
  const [phone, setPhone] = useState('');
  const [showPdf, setShowPdf] = useState(false)

  // getting id from url of the site-------------------------
  const id = location.pathname.split('/')[2]

  const back = () => {
    navigate(-1)
  }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = appUrl.url;
      const key = appUrl.key;
      const fetchedHotel = await axios.get(`${url}/hotel?pk=${id}&&key=${key}`)
      setHotel(fetchedHotel.data)
      setPics(fetchedHotel.data.pictures)
      setLoading(false);
    }
    fetchData()

  }, [id])



  // changing title of the site on component mounted=------------
  useEffect(() => {
    document.title = `Luxury Living - ${hotel.name} `
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    setTimeout(() => {
      setAutoPlay(false)
    }, 9000);
  })

  // function for duynamic arrow or hiding the arrows of slick , looking for better way to hide buttons
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <RightOutlined
        style={{ color: 'goldenrod', fontSize: '3rem', display: 'none' }}
        onClick={onClick} />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <LeftOutlined
        style={{ color: 'goldenrod', fontSize: '3rem', display: 'none' }}
        onClick={onClick} />

    );
  }
  // ------------------------------------------------
  // const [activeSlide, setActiveSlide] = useState(0)

  // let settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: autoPlay,
  //   autoplaySpeed: 3000,
  //   swipeToSlide: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // }

  // -----------------------------------------
  let settingsImg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // afterChange: current => setActiveSlide(current)
  }
  // -----------------------------------------------!!
  // downloadin pdf --------------------------
  // const download = () => {
  //   var doc = new jsPDF("p", "mm", "a4");
  //   doc.getFillColor('black');
  //   doc.setFontSize(19);
  //   doc.text(20, 10, hotel.hotelname)
  //   doc.setFontSize(12);
  //   doc.addFont('helvetica', 'normal')
  //   doc.text(20, 20, `Style :${hotel.style}`)
  //   doc.text(20, 30, `Location :${hotel.location}`)
  //   doc.text(20, 40, `Best Part :${hotel.best_part}`)
  //   doc.text(20, 50, `Accomodation :${hotel.accomodation}`)
  //   // doc.text(20, 60, hotel.carouseltxt1)
  //   // doc.text(20, 70, hotel.carouseltxt2)
  //   switch (activeSlide) {
  //     case 0:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img1}`, 'JPEG', 20, 80, 170, 110)
  //       break;
  //     case 1:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img2}`, 'JPEG', 20, 80, 170, 110)
  //       break;
  //     case 2:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img3}`, 'JPEG', 20, 80, 170, 110)
  //       break;
  //     case 3:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img4}`, 'JPEG', 20, 80, 170, 110)
  //       break;
  //     case 4:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img5}`, 'JPEG', 20, 80, 170, 110)
  //       break;
  //     default:
  //       doc.addImage(`http://localhost:3000/gallery/${hotel.img1}`, 'JPEG', 20, 50, 170, 110)
  //   }
  //   doc.text(20, 200, name)
  //   doc.text(20, 205, agency)
  //   doc.text(20, 210, phone)
  //   doc.save("luxury_living.pdf")

  // }


  const addFlyerDownload = () => {
    if (!name || !agency || !phone) {
      toast.error('Please fill all the fields')
    } else {
      setFlyer(false)
      setShowPdf(true);
      // download();
      // setTimeout(() => {
      //   // toast.success('Downloaded successfully')
      // }, 300);
    }
  }
  const skipAndDownload = () => {
    setFlyer(false)
    setShowPdf(true);
    // download();
    // setTimeout(() => {
    //   // toast.success('Downloaded successfully')
    // }, 300);
  }

  return (
    <>
      {
        showPdf &&
        <Pdf
          name={name}
          agency={agency}
          phone={phone}
          hotel={hotel}
          setShowPdf={setShowPdf}
          showTip={true}
        />

      }
      {
        loading ? <Loading /> :
          <div className='hotel_desc'>
            {/* back bautton */}
            <div className="back_btn" onClick={back}><ArrowLeftOutlined className='back_icon' /></div>
            {/* showing Enquiruy form */}
            {/* {
        showForm && <Enquiry setShowForm={setShowForm} hotel={hotel.hotelname} />
      } */}
            {
              showShare && <ShareModal SetShowShare={SetShowShare} hotel={hotel} />
            }
            <div className="hotel_desc_wrapper">
              <div className="hotels_details">
                <div className="hotel_desc_left hotel_desc_">
                  <div className="hotel_name">
                    <h2>{hotel.name}</h2>
                  </div>
                  <Slider {...settingsImg} className="hotel_desc_img">
                    {
                      pics.map((pics, ind) => (
                        <div className="img" key={ind}>
                          <img src={pics.url} alt="hotel services" />
                        </div>
                      ))
                    }
                  </Slider>
                </div>
                <div className="hotel_desc_right hotel_desc_">
                  <div className="hotel_name">
                    <h2>{hotel.name}</h2>
                  </div>
                  <div className="about_hotel">
                    {/* <p>{hotel.point1}</p> */}
                    <ul>
                      <li>
                        <div className="bullet_points"></div>
                        <div className="bullet_points_">Style :</div>
                        <div className="content"> {hotel.style}</div>
                      </li>
                      <li>
                        <div className="bullet_points"></div>
                        <div className="bullet_points_">Location :</div>
                        <div className="content"> {hotel.location}</div>
                      </li>
                      <li>
                        <div className="bullet_points"></div>
                        <div className="bullet_points_">Best Part :</div>
                        <div className="content">{hotel.best_part}</div>
                      </li>
                      <li>
                        <div className="bullet_points"></div>
                        <div className="bullet_points_">Accomdation :</div>
                        <div className="content"> {hotel.accomodation}</div>
                      </li>
                    </ul>
                  </div>
                  <div className="hotels_desc_sliders">
                    <p>{hotel.tip}</p>
                  </div>
                </div>
              </div>
              {/* actions btn */}
              <div className="actions_btn_div">
                <div className="actions_btn" onClick={() => navigate(`/enquire/${hotel.id}`)}>
                  <span>Enquire</span>
                </div>
                <div className="actions_btn"
                  onClick={() => {
                    SetShowShare(true)
                  }}>
                  <span>share</span>
                </div>
                <div className="actions_btn" onClick={() => setFlyer(true)}>
                  <span>download</span>
                </div>
              </div>
            </div>
            {
              flyer &&
              <div className="flyer">
                <ToastContainer style={{ fontSize: '1.8rem' }} />
                <div className="flyer_wrapper">
                  <h2 className="flyer_head">If you wish to display your signature  in the flyer, please input here  , otherwise press skip</h2>
                  <div className="input_div">
                    <label htmlFor="">Name :</label>
                    <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="input_div">
                    <label htmlFor="">Agency :</label>
                    <input type="text" name="" id="" onChange={(e) => setAgency(e.target.value)} />
                  </div>
                  <div className="input_div">
                    <label htmlFor="">Phone :</label>
                    <input type="text" name="" id="" onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="input_div_">
                    <button onClick={addFlyerDownload}>Add to flyer</button>
                    <button onClick={skipAndDownload}>Skip</button>
                  </div>
                  <div className="cancel_" onClick={() => setFlyer(false)}><CloseOutlined /></div>
                </div>
              </div>
            }
          </div>
      }
    </>
  )
}

export default HotelDesc