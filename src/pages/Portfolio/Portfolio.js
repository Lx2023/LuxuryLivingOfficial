import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import HotelSection from './Hotelsection/HotelSection';
import Header from '../../components/Header/Header';
import Social from '../../components/Social/Social';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const Portfolio = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const url = location.pathname.split('/')[1]
    const url2 = location.pathname.split('/')[2]

    const [active, setActive] = useState('brands')

    useEffect(() => {
        document.title = 'Luxury Living - Portfolio'
    }, []);

    return (
        <div className="portfolio" >
            <Header display='flex' />
            <div className="portfolio_landing_page">
                <div className="portfolio_landing_page_wrapper">
                    <h1 className="heading">portfolio</h1>
                    <p className="portfolio_page_para">
                        Having a close circle of friends makes life a breeze! Wouldn't you agree? And ours has been a breeze since the day we started making friends in our business. Most of our hotel partners have been working with us since our inception & they continue to watch our back as we continue to watch theirs! And its no joke when we claim to have taken quite a few bullets for them...so what if it was while playing paintball...bullets are bullets!
                    </p>
                </div>
            </div>
            <div className="search_by">
                {/* <div className="filterBy">
                    <span>Filter By :</span>
                </div> */}
                <div className="buttons">
                    <button
                        className={active === 'brands' ? 'btns active' : 'btns'}
                        onClick={() => {
                            navigate('');
                            setActive('brands')
                        }}

                    >Brands</button>
                    <button
                        className={active === 'destinations' ? 'btns active' : 'btns'}
                        onClick={() => {
                            navigate('destinations')
                            setActive('destinations');
                        }
                        }
                    >Destinations</button>
                </div>
            </div>
            {url2 ? <Outlet /> : url ? <HotelSection /> : <Outlet />}

            <Social />
        </div>
    )
}

export default Portfolio

