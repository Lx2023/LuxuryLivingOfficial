import React, { useEffect, useState } from "react";
import { debounce } from "lodash"
import { useDispatch } from "react-redux"
import { searchAdd } from "../../redux/indexReducer";

import "./portfolio.scss";
import HotelSection from "./Hotelsection/HotelSection";
import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Portfolio = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const url = location.pathname.split("/")[1];
    const url2 = location.pathname.split("/")[2];
    const [searchTerm, setSearchTerm] = useState("");

    const [active, setActive] = useState("brands");

    useEffect(() => {
        document.title = "Luxury Living - Portfolio";
    }, []);

    const apiUrl = "http://api.luxuryliving.in/";
    const apiKey = "key=9d3480fc-49c4-4427-b19e-3f70d753656d";
    // const fetchBrandData = fetch(`${apiUrl}brands?${apiKey}`).then((res) => res.json()).then((resData) => console.log("current", resData))

            const searchType = (text) => {
                if (active === "brands") {
                    if (text === "") {
                        fetch(`${apiUrl}brands?${apiKey}`).then((res) => res.json()).then((resData) => dispatch(searchAdd(resData)))
                    } else {
                        fetch(`${apiUrl}search/brand?q=${text}&&${apiKey}`)
                        .then((res) => res.json()).then((resData) => dispatch(searchAdd(resData)))
                    }
                } else {
                    if (text === "") {
                        fetch(`${apiUrl}destinations?${apiKey}`).then((res) => res.json()).then((resData) => {
                            dispatch(searchAdd(resData))
                        })
                    } else {
                        fetch(`${apiUrl}search/destination?q=${text}&&${apiKey}`)
                        .then((res) => res.json()).then((resData) => dispatch(searchAdd(resData)))
                    }
                }
            };
        
            // Debouncing for performance
            const handleTextSearch = debounce((text) => {
                searchType(text)
            }, 500)

    return (
        <div className="portfolio">
            <Header display="flex" />
            <div className="portfolio_landing_page">
                <div className="portfolio_landing_page_wrapper">
                    <h1 className="heading">portfolio</h1>
                    <p className="portfolio_page_para">
                        Having a close circle of friends makes life a breeze!
                        Wouldn't you agree? And ours has been a breeze since the
                        day we started making friends in our business. Most of
                        our hotel partners have been working with us since our
                        inception & they continue to watch our back as we
                        continue to watch theirs! And its no joke when we claim
                        to have taken quite a few bullets for them...so what if
                        it was while playing paintball...bullets are bullets!
                    </p>
                </div>
            </div>
            <div className="search_by">
                {/* <div className="filterBy">
                    <span>Filter By :</span>
                </div> */}
                <div className="buttons">
                    <button
                        className={active === "brands" ? "btns active" : "btns"}
                        onClick={() => {
                            navigate("");
                            setActive("brands");
                            setSearchTerm("")
                            dispatch(searchAdd(null))
                        }}
                    >
                        Brands
                    </button>
                    <button
                        className={
                            active === "destinations" ? "btns active" : "btns"
                        }
                        onClick={() => {
                            navigate("destinations");
                            setActive("destinations");
                            setSearchTerm("")
                            dispatch(searchAdd(null))
                        }}
                    >
                        Destinations
                    </button>
                </div>
                <form className="portfolio_search" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={searchTerm} onChange={(e) => {
                        handleTextSearch(e.target.value)
                        setSearchTerm(e.target.value);
                        }} placeholder={active === "destinations" ? "SEARCH DESTINATIONS..." : "SEARCH BRANDS..."} />
                </form>
            </div>
            {url2 ? <Outlet /> : url ? <HotelSection /> : <Outlet />}

            <Social />
        </div>
    );
};

export default Portfolio;
