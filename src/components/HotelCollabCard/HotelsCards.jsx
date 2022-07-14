import React, { useState, useEffect } from 'react';
import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import jsPDF from 'jspdf'
import ShareModal from '../ShareComponent/ShareModal';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pdf from '../Pdf/Pdf'
import {
    LeftOutlined,
    RightOutlined,
    CloseOutlined
} from '@ant-design/icons';
import Aos from "aos";
import "aos/dist/aos.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                color: 'goldenrod', fontSize: '3rem', display: 'none', position: 'absolute',
                top: '100%', right: '40rem',
                // top: '80%', right: '20rem'
            }}
        >
            <RightOutlined onClick={onClick} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{
                color: 'goldenrod', fontSize: '3rem', display: 'none', position: 'absolute',
                top: '100%', left: '40rem'
                // top: '80%', left: '20rem'
            }}
        >  <LeftOutlined onClick={onClick} /></div>

    );
}

const HotelsCards = ({ d }) => {

    const mediaMatch = window.matchMedia('(max-width: 480px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    const navigate = useNavigate();
    const [showShare, SetShowShare] = useState(false);
    // const [activeSlide, setActiveSlide] = useState(0)

    // popup
    const [flyer, setFlyer] = useState(false);
    const [name, setName] = useState('');
    const [agency, setAgency] = useState('');
    const [phone, setPhone] = useState('');
    const [showPdf, setShowPdf] = useState(false);

    console.log(d)

    const addFlyerDownload = () => {
        if (!name || !agency || !phone) {
            toast.error('Please fill all the fields')
        } else {
            setFlyer(false)
            // setShowPdf(true);
            // download();
            // setTimeout(() => {
            //   // toast.success('Downloaded successfully')
            // }, 300);
        }
    }
    const skipAndDownload = () => {
        setFlyer(false)
        // setShowPdf(true);
        // download();
        // setTimeout(() => {
        //   // toast.success('Downloaded successfully')
        // }, 300);
    }


    useEffect(() => {
        Aos.init({ duration: 1000 });
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    }, [mediaMatch]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // afterChange: current => setActiveSlide(current)
    }


    // downloadin pdf --------------------------
    // const download = () => {
    //     var doc = new jsPDF("p", "mm", "a4");
    //     doc.setFontSize(19);
    //     doc.text(20, 10, d.hotelname)
    //     doc.setFontSize(12);
    //     doc.addFont('helvetica', 'normal')
    //     switch (activeSlide) {
    //         case 0:
    //             doc.addImage(d.img1, 'JPEG', 20, 50, 170, 110)
    //             break;
    //         case 1:
    //             doc.addImage(d.img2, 'JPEG', 20, 50, 170, 110)
    //             break;
    //         case 2:
    //             doc.addImage(d.img3, 'JPEG', 20, 50, 170, 110)
    //             break;
    //         default:
    //             doc.addImage(d.img1, 'JPEG', 20, 50, 170, 110)
    //     }

    //     doc.save("luxury_living.pdf")

    // }

    return (
        <>
            {
                showPdf &&
                <Pdf
                    name={name}
                    agency={agency}
                    phone={phone}
                    hotelImg1={d.img1}
                    hotelImg2={d.img2}
                    hotelname={d.hotelname}
                    style={d.style}
                    location={d.location}
                    bestPart={d.best_part}
                    accomodation={d.accomodation}
                    setShowPdf={setShowPdf}
                />

            }
            {
                showShare && <ShareModal SetShowShare={SetShowShare} hotel={d} />
            }
            <div className='new_hotel_card'
                data-aos={`fade-${d.aos}`}
            >
                <div className="hotel_card_top"
                    style={{
                        flexDirection: matches ? 'column' : `${d.f}`
                    }}
                >
                    <div className="new_hotel_card_left">
                        <Slider {...settings} className="hotel_desc_img">
                            <div className="img" >
                                <img src={d.img1} alt="" />
                            </div>
                            <div className="img" >
                                <img src={d.img2} alt="" />
                            </div>
                            <div className="img" >
                                <img src={d.img3} alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="new_hotel_card_right">
                        <div className="logo">
                            <img src={`images/${d.logo}`} alt="" />
                        </div>
                        <h3 className="name">Hotel Name Should Be {d.hotelname}</h3>
                        <div className="about_hotel">
                            <ul>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Style :</div>
                                    <div className="content"> {d.style}</div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Location :</div>
                                    <div className="content"> {d.location}</div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Best Part :</div>
                                    <div className="content">{d.best_part}</div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Accomodation :</div>
                                    <div className="content"> {d.accomodation}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* actions btn */}
                <div className="actions_btn_div">
                    <div className="actions_btn" onClick={() => navigate(`/enquire/${d.id}`)}>
                        <span>Enquire</span>
                    </div>
                    <div className="actions_btn"
                        onClick={() => {
                            SetShowShare(true)
                        }}>
                        <span>share</span>
                    </div>
                    {/* <div className="actions_btn" onClick={download}> */}
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
        </>
    )
}

export default HotelsCards