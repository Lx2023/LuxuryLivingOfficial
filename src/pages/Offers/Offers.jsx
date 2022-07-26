import React, { useEffect, Suspense, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import {
    SearchOutlined,
    FilterOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { debounce } from "lodash";

import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";
import Loading from "../../utils/Loading/Loading";
import OffersDetails from "../../components/OffersDetails/OffersDetails";

const OffersCard = React.lazy(() =>
    import("../../components/OffersCard/OffersCard")
);

const apiUrl = "http://api.luxuryliving.in/";
const apiKey = "key=9d3480fc-49c4-4427-b19e-3f70d753656d";

const Offers = () => {
    // const [index, setIndex] = useState(0);
    const [transform, setTransform] = useState(250);
    const [main, setMain] = useState(0);
    const [details, setDetails] = useState(false);
    // const [checked, setChecked] = useState();
    const [filters, setFilters] = useState([]);
    const [offerData, setOfferData] = useState([]);
    const [offerSearchData, setOfferSearchData] = useState("");

    // handling filtering side bar
    const handleSidebar = () => {
        switch (transform) {
            case 0:
                setTransform(250);
                setMain(0);
                break;
            case 250:
                setTransform(0);
                setMain(50);
                break;
            default:
                setTransform(250);
                setMain(0);
        }
    };

    const sliderContent = [
        "offers first filter",
        "offers second filter",
        "offers third filter",
        "offers fourth filter",
        "offers fifth  filter",
        "offers sixth filter",
        "offers seventh filter",
        "offers eighth filter",
        "offers sixth filter",
        "offers nineth filter",
        "offers tenth filter",
        "offers eleven filter",
        "offers twelveth filter",
        "offers thirteenth filter",
    ];

    const handleCheckbox = (e) => {
        let index;

        // check if the check box is checked or unchecked
        if (e.target.checked) {
            // add the numerical value of the checkbox to options array
            filters.push(e.target.value);
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = filters.indexOf(e.target.value);
            filters.splice(index, 1);
        }

        // update the state with the new array of options
        setFilters(filters);
        console.log(filters);
    };

    useEffect(() => {
        document.title = "Luxury Living - Offers";
        fetch(`${apiUrl}offers?${apiKey}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Something went wrong");
            })
            .then((actualData) => {
                setOfferData(actualData);
                console.log(actualData)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // iterating offers
    const offerComponent = (offerSearchData === "" ? (offerData.map((data) => {
        return (
            <OffersCard
                key={data.id}
                hotelName={data.name}
                brandName={data.brand}
                hotelImage={data.thumbnail}
                hotelHeading={data.hotel}
                offerName={data.name}
                room_cate={data.categories}
                offerDetail={data.description}
                startDates={data.travel_start_date}
                endDates={data.travel_end_date}
                bookStartDates={data.book_by_start_date}
                bookEndDates={data.book_by_end_date}
                setDetails={setDetails}
                hotelId={data.hotel_id}
            />
        );
    })) : (
        offerSearchData.map((data) => {
            console.log(data)
            return (
                <OffersCard
                    key={data.id}
                    hotelName={data.name}
                    brandName={data.brand}
                    hotelImage={data.thumbnail}
                    hotelHeading={data.hotel}
                    offerName={data.name}
                    room_cate={data.categories}
                    offerDetail={data.description}
                    startDates={data.travel_start_date}
                    endDates={data.travel_end_date}
                    bookStartDates={data.book_by_start_date}
                    bookEndDates={data.book_by_end_date}
                    setDetails={setDetails}
                    hotelId={data.hotel_id}
                />
            );
        })
    ))

    // Searching on Offer Page

    // ON Button click search
    // const search = (e) => {
    //     e.preventDefault();
    //     console.log("This here is the value : ", e.target[0].value);
    //     fetch(`${apiUrl}search-offer?q=${e.target[0].value}&&${apiKey}`)
    //         .then((res) => res.json())
    //         .then((result) => setOfferData(result));
    // };

    const searchType = (text) => {
        if (text === "") {
            setOfferSearchData(offerData)
        } else {
            fetch(`${apiUrl}search-offer?q=${text}&&${apiKey}`)
            .then((res) => res.json())
            .then((result) => {setOfferSearchData(result); console.log(result)});
        }
    };

    // Debouncing for performance
    const handleText = debounce((text) => {
        searchType(text)
    }, 500)

    return (
        <Suspense fallback={<Loading />}>
            <div className="offers">
                <Header />
                {details ? (
                    <OffersDetails setDetails={setDetails} />
                ) : (
                    <>
                        <div
                            className="offers_wrapper"
                            style={{
                                transform: `translateX(-${main}px)`,
                            }}
                        >
                            <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
                                <div className="search_bar">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        onChange={(e) =>
                                            handleText(e.target.value)
                                        }
                                        list="searchParams"
                                        placeholder="Search Here..."
                                    />

                                    {/* <datalist id="searchParams">
                                            {
                                                sliderContent.map((c, ind) => (
                                                    <option value={c} key={ind} />
                                                ))
                                            }
                                        </datalist> */}

                                    <button className="search" type="submit">
                                        <SearchOutlined />
                                    </button>
                                </div>
                                <div
                                    className="filter"
                                    onClick={() => {
                                        handleSidebar();
                                    }}
                                >
                                    Filters
                                    <FilterOutlined className="icon" />
                                </div>
                            </form>
                            <div className="offers_">
                                {/* offers cards should be added here  */}
                                {offerComponent}
                                {/* <OffersCard
                                        hotelName='aman resorts'
                                        offerName='offer name'
                                        room_cate='room category'
                                        offerDetail='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maiores culpa reprehenderit voluptatem. Quam nostrum laudantium dolore, alias voluptatibus explicabo doloribus itaque voluptate tempora ab cum dolores odit sunt. PlLorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maiores culpa reprehenderit voluptatem. Quam nostrum laudantium dolore, alias voluptatibus explicabo doloribus itaque voluptate tempora ab cum dolores odit sunt. Pl'
                                        startDates='june 01 2022'
                                        endDates='july 01 2022'
                                        setDetails={setDetails}
                                    />
                                    */}
                            </div>
                        </div>
                        {/* filters */}
                        <div
                            className="filter_div"
                            style={{ transform: `translateX(${transform}px)` }}
                        >
                            <h1>sort offers </h1>
                            <div className="filter_wrapper">
                                {sliderContent.map((c, ind) => (
                                    <div className="filter_params" key={ind}>
                                        <div className="checkbox">
                                            <input
                                                type="checkbox"
                                                name={c}
                                                id=""
                                                value={c}
                                                //  onChange={(e)=>setChecked(e.target.checked)}
                                                onChange={handleCheckbox}
                                            />
                                        </div>
                                        <div className="params">{c}</div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="back"
                                onClick={() => {
                                    handleSidebar();
                                    //   setFilters([])
                                    // filters.splice(0, filters.length)
                                }}
                            >
                                <CloseOutlined />
                            </div>
                        </div>
                    </>
                )}
                <Social />
            </div>
        </Suspense>
    );
};

export default Offers;
