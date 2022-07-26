import React, { useState } from "react";
import "./styles.scss";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const OffersCard = (props) => {
    const {
        offerName,
        room_cate,
        offerDetail,
        startDates,
        endDates,
        bookStartDates,
        bookEndDates,
        brandName,
        hotelImage,
        hotelHeading,
    } = props; // setDetails also was included

    const [animate, setAnimate] = useState(false);
    const webkitAnimation  = "webkit_animation";

    const handleClick = () => {
        if (!animate || animate) {
            setAnimate(!animate);
        }
        // setTimeout(() => {
        //     setDetails(true);
        // }, 500);
    };

    function reverseString(str) {
        if (str === undefined) {

        } else {
            let splitString = str.split("-");
            let reversed = splitString.reverse();
            let resultString = reversed.join("-");
            return resultString;
        }
    }

    return (
        <div
            className="offers_card"
            style={{
                animationName: animate
                    ? "offer_card_length"
                    : "offer_card_decrease",
                animationDuration: "1s",
                height: "fit-content",
                
            }}
        >
            <div className="hotel_card_container">
                <div className="hotel_name">
                    <div className="img">
                        <img src={hotelImage ? hotelImage : " "} alt="" />
                    </div>
                    <div className="hotel_">
                        <h3>{hotelHeading}</h3>
                        <p>{brandName.toUpperCase()}</p>
                    </div>
                </div>
                <div className="offer_details">
                    <h4 className="offer_name">{offerName}</h4>
                    <div className="dates_container">
                        <p className="dates date-travel">
                            <span>Travel period: </span>{reverseString(startDates)} <span>to</span> {reverseString(endDates)}
                        </p>
                    </div>
                    <div className="dates_container">
                        <p className="dates date-booking">
                            {console.log(bookStartDates.slice(0,4))}
                            <span>Booking period: </span>{bookStartDates.slice(0,4) === "2001" ? "" : reverseString(bookStartDates)} <span>{bookStartDates.slice(0,4) === "2001" ? "Upto" : "to"}</span> {reverseString(bookEndDates)}
                        </p>
                    </div>
                    <hr />
                    <p
                        className={`offer_detail ${animate ? webkitAnimation : ""}`}
                    >
                        {offerDetail}
                    </p>
                    {animate && <hr />}

                    <h6
                        className={`room_category ${animate ? webkitAnimation : ""}`}
                    >
                        Room Categories : <span>{room_cate}{" "}</span>
                    </h6>
                    <button className="more_details" onClick={handleClick}>
                        {animate ? "Read Less" : "Read More"}
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
