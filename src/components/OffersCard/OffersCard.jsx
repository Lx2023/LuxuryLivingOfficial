import React, { useState } from 'react';
import './styles.scss';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { useEffect } from 'react';
const OffersCard = (props) => {
    const { hotelId, postDate, hotelName, offerName, room_cate, offerDetail, startDates, endDates } = props; // setDetails also was included

    const [animate, setAnimate] = useState(false)

    const handleClick = () => {
        if (!animate || animate) {
            setAnimate(!animate);
        }
        // setTimeout(() => {
        //     setDetails(true);
        // }, 500);
    }

    function reverseString(str) {
        let splitString = str.split("-")
        let reversed = splitString.reverse()
        let resultString = reversed.join("-")
        return resultString;
    }

    const [hotelImage, setHotelImage] = useState();

    useEffect(() => {
        fetch(`http://api.luxuryliving.in/hotel?pk=${hotelId}&&key=9d3480fc-49c4-4427-b19e-3f70d753656d`)
        .then((response) => response.json())
        .then((responseData) => setHotelImage(responseData.pictures[0].url))
    })

    return (
        <div className='offers_card' style={{
            animationName: animate ? "offer_card_length" : "offer_card_decrease",
            animationDuration: "1s",
            height: animate && '450px',
        }}>
            <div className="hotel_name">
                <div className="img">
                    <img src={hotelImage ? hotelImage : " "} alt="" />
                </div>
                <div className="hotel_">
                    <h3>{hotelName}</h3>
                    <p>Posted On : {postDate ? reverseString(`${postDate.slice(0,10)}`) : "Loading..."}</p>
                </div>
            </div>
            <div className="offer_details">
                <h4 className="offer_name">{offerName}</h4>
                <h6 className="room_category" style={{overflow: animate && "visible", WebkitLineClamp: animate && "100"}}>Room Categories : {room_cate} </h6>
                <p className="offer_detail" style={{overflow: animate && "visible", WebkitLineClamp: animate && "100"}}>{offerDetail}</p>
                <p className="dates">Offer starts on {reverseString(startDates)}</p>
                <p className="dates">Offer ends on {reverseString(endDates)} </p>
                <button className="more_details" onClick={handleClick}>More details {animate ? <AiOutlineArrowUp className='arrow' /> : <AiOutlineArrowDown className='arrow' />}</button>
            </div>
        </div>
    )
}

export default OffersCard