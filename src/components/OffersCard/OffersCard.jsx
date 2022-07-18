import React, { useState } from "react";
import "./styles.scss";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useEffect } from "react";
const OffersCard = (props) => {
    const { hotelId, offerName, room_cate, offerDetail, startDates, endDates } =
        props; // setDetails also was included

    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        if (!animate || animate) {
            setAnimate(!animate);
        }
        // setTimeout(() => {
        //     setDetails(true);
        // }, 500);
    };

    function reverseString(str) {
        let splitString = str.split("-");
        let reversed = splitString.reverse();
        let resultString = reversed.join("-");
        return resultString;
    }

    const [hotelImage, setHotelImage] = useState();
    const [hotelHeadName, setHotelHeadName] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchHotelImage = async () => {
        const response = await (hotelId &&
            fetch(
                `http://api.luxuryliving.in/hotel?pk=${hotelId}&&key=9d3480fc-49c4-4427-b19e-3f70d753656d`
            ));
        if (!response.ok) {
            throw new Error("Something went wrong");
        } else {
            return response.json();
        }
    };
    useEffect(() => {
        fetchHotelImage()
            .then((res) => {
                setHotelImage(res.pictures[0].url);
                setHotelHeadName(res.name);
            })
            .catch((e) => {
                console.log(e.message);
            });
    });

    return (
        <div
            className="offers_card"
            style={{
                animationName: animate
                    ? "offer_card_length"
                    : "offer_card_decrease",
                animationDuration: "1s",
                height: animate && "fit-content",
            }}
        >
            <div className="hotel_card_container">
                <div className="hotel_name">
                    <div className="img">
                        <img src={hotelImage ? hotelImage : " "} alt="" />
                    </div>
                    <div className="hotel_">
                        <h3>{hotelHeadName}</h3>
                        <p>BrandName</p>
                    </div>
                </div>
                <div className="offer_details">
                    <h4 className="offer_name">{offerName}</h4>
                    <h6
                        className="room_category"
                        style={{
                            overflow: animate && "visible",
                            WebkitLineClamp: animate && "100",
                        }}
                    >
                        Room Categories : {room_cate}{" "}
                    </h6>
                    <p
                        className="offer_detail"
                        style={{
                            overflow: animate && "visible",
                            WebkitLineClamp: animate && "100",
                        }}
                    >
                        {offerDetail}
                    </p>
                    <p className="dates">
                        Offer starts on {reverseString(startDates)}
                    </p>
                    <p className="dates">
                        Offer ends on {reverseString(endDates)}{" "}
                    </p>
                    <button className="more_details" onClick={handleClick}>
                        More details{" "}
                        {animate ? (
                            <AiOutlineArrowUp className="arrow" />
                        ) : (
                            <AiOutlineArrowDown className="arrow" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OffersCard;
