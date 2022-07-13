import React, { useEffect, useState } from "react";
import './hotelSection.scss';
import Aos from "aos";
import "aos/dist/aos.css";
import { CaretDownOutlined } from '@ant-design/icons'
import Dropdown from "../../../components/PortfolioDropdown/Dropdown";
import axios from 'axios';
import { appUrl } from '../../../config/appUrl'
import Loading from '../../../utils/Loading/Loading'

function Port() {
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState('');
    const [brands, setBrands] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1800 });
        const fetchData = async () => {
            setLoading(true);
            const url = appUrl.url;
            const key = appUrl.key;
            const fetchedData = await axios.get(`${url}/brands?key=${key}`)
            const fetchedHotels = await axios.get(`${url}/hotels?key=${key}`)
            setBrands(fetchedData.data);
            setHotels(fetchedHotels.data);
            setLoading(false)
        }
        fetchData()
    }, []);



    const animations = (num) => {
        let direction;
        let rgtAnimation = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98]; // for right animations

        if (num % 3 === 0) {
            direction = 'fade-right'
        } else if (rgtAnimation.includes(num)) {
            direction = 'fade-left'
        } else if (num % 3 === 1 || (num % 2 === 0)) {
            direction = 'fade-up'
        }
        return direction;
    }



    const ShowModal = () => {
        switch (isOpen) {
            case false:
                setIsOpen(true);
                break;
            case true:
                setIsOpen(false);
                break;
            default:
                setIsOpen(false)
        }
    }


    // API Sorting algo (sorting with descding alphatical order)
    const resultBrands = []

    const dataArray = brands.map((item) => {
        return item.name
    });
    const sortedDataArray = (dataArray.sort())

    brands.forEach((item, index) => {
        const anotherData = brands.find((items) => items.name === sortedDataArray[index])
        resultBrands.push(anotherData)
    })


    return (
        <>
            {
                isOpen &&
                <Dropdown ShowModal={ShowModal} destination={destination} filterByD={false} hotels={hotels} />
            }
            {
                loading ? <Loading /> :
                    <div className="port">
                        <div className="port-container">

                            {
                                resultBrands.map((b, ind) => (
                                    <div className="port-card" key={b.id} data-aos={`${animations(ind)}`}>
                                        <div className="port-imgBx">
                                            <img src={b.logo_url} alt="brands_img" />
                                        </div>
                                        <div className="port-content">
                                            <div className="upper">
                                                <div className="button" onClick={() => {
                                                    ShowModal();
                                                    setDestination(b.id)
                                                    // setDestination(b.name.toLowerCase())
                                                    // console.log(b.brands.toLowerCase());
                                                }}>Select Your Hotel<CaretDownOutlined className='dropdwon_icon' /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </>
    );
}

export default Port;