import React, { useEffect, useState } from 'react'
import './style.scss';
import axios from 'axios';
import { appUrl } from '../../config/appUrl';
import {
    CloseOutlined
} from '@ant-design/icons'
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
import Pdf from 'react-to-pdf'
const ref = React.createRef();
const Mobref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
};

const PdfFile = ({
    name,
    agency,
    phone,
    hotel,
    setShowPdf,
    showTip,
    tip }) => {

    const mediaMatch = window.matchMedia('(max-width: 500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    const [display, setDisplay] = useState(false);
    const [logoUrl, setLogourl] = useState('');

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    }, [mediaMatch]);

    useEffect(() => {
        const getBrand = async () => {
            const brand = await axios.get(`${appUrl.url}/brand?pk=${hotel.brand_id}&&key=${appUrl.key}`)
            // console.log(brand);
            setLogourl(brand.data.logo_url)
        }
        getBrand()
    }, [hotel])


    // const inputRef = useRef(null);
    const pic1 = hotel.pictures[0].url
    const pic2 = hotel.pictures[2].url

    const img = [pic1, pic2]
    // const img = ['https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1611500278735-a0275be1cb79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60']

    // const download = () => {
    //     html2canvas(inputRef.current, {
    //         proxy:'https://luxury-living-pictures.s3.amazonaws.com/',
    //         allowTaint: false,
    //         useCORS: true
    //     }).then((canvas) => {
    //         var imageType = "image/jpg";
    //         var imageData = canvas.toDataURL(imageType);
    //         var src = encodeURI(imageData);

    //         const pdf = new jsPDF();
    //         pdf.addImage(src, "JPEG", 0, 0);
    //         pdf.save("download.pdf");
    //     });
    // }
    return (
        <>
            <div className="pdf" >
                <div className="pdf_wrapper_"  >

                    {/* {
                        !matches ? */}

                    <div className="pdf_wrapper" ref={ref} options={options} x={1} y={.5} scale={0.8}>
                        {/* <div className="pdf_wrapper" ref={inputRef} options={options} x={1} y={.5} scale={0.8}> */}
                        <div className="logo">
                            <img src={logoUrl} alt="" />
                            {/* <img src="/images/Anantara.png" alt="" /> */}
                        </div>
                        <div className="line"></div>
                        <div className="hotel_name">{hotel.name}</div>
                        <div className="hotel_images">
                            {
                                img.map((i, ind) => (
                                    <div className="img_left" key={ind}>
                                        <img src={i} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="hotel_desc">

                            <ul>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Style :</div>
                                    <div className="content">{hotel.style}</div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Location :</div>
                                    <div className="content"> {hotel.location}</div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Best Part :</div>
                                    <div className="content">{hotel.best_part} </div>
                                </li>
                                <li>
                                    <div className="bullet_points"></div>
                                    <div className="bullet_points_">Accomdation :</div>
                                    <div className="content">{hotel.accomodation}</div>
                                </li>
                            </ul>
                            {/* } */}
                        </div>
                        {
                            showTip &&
                            <div className="hotel_tip">{hotel.tip}</div>
                        }

                        <div className="flyer_details">
                            <span>{name} </span>
                            <span>{agency} </span>
                            <span>{phone} </span>
                        </div>
                    </div>



                    <div className="cancel_" onClick={() => setShowPdf(false)}><CloseOutlined /></div>
                    {/* <button onClick={download} className='download_btn'>Download</button> */}

                    <Pdf targetRef={matches ? Mobref : ref} filename={`${hotel.name}.pdf`} >
                        {({ toPdf }) => (
                            <button onClick={() => {
                                setDisplay(true);
                                setTimeout(() => {
                                    toPdf()
                                    window.scroll({
                                        top: 0,
                                        behavior: 'auto'
                                    })
                                }, 200);
                                setTimeout(() => {
                                    setDisplay(false)
                                }, 5000);

                            }} className='download_btn'>Download</button>
                        )}
                    </Pdf>






                    {
                        display &&

                        <div className="pdf_wrapper pdf_wrapper_mob" ref={Mobref} options={options} x={1} y={.5} scale={0.8}>
                            {/* <div className="pdf_wrapper" ref={inputRef} options={options} x={1} y={.5} scale={0.8}> */}
                            <div className="logo">
                                <img src="/images/Anantara.png" alt="" />
                            </div>
                            <div className="line"></div>
                            <div className="hotel_name">{hotel.name}</div>
                            <div className="hotel_images">
                                {
                                    img.map((i, ind) => (
                                        <div className="img_left" key={ind}>
                                            <img src={i} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="hotel_desc">

                                <ul>
                                    <li>
                                        <div className="bullet_points"></div>
                                        <div className="bullet_points_">Style :</div>
                                        <div className="content">{hotel.style}</div>
                                    </li>
                                    <li>
                                        <div className="bullet_points"></div>
                                        <div className="bullet_points_">Location :</div>
                                        <div className="content"> {hotel.location}</div>
                                    </li>
                                    <li>
                                        <div className="bullet_points"></div>
                                        <div className="bullet_points_">Best Part :</div>
                                        <div className="content">{hotel.best_part} </div>
                                    </li>
                                    <li>
                                        <div className="bullet_points"></div>
                                        <div className="bullet_points_">Accomdation :</div>
                                        <div className="content">{hotel.accomodation}</div>
                                    </li>
                                </ul>
                                {/* } */}
                            </div>
                            {
                                showTip &&
                                <div className="hotel_tip">{hotel.tip}</div>
                            }

                            <div className="flyer_details">
                                <span>{name} </span>
                                <span>{agency} </span>
                                <span>{phone} </span>
                            </div>
                        </div>

                    }


                </div>
            </div>
        </>
    )
}

export default PdfFile