import React, { useEffect } from 'react';
import ComingSoon from '../../utils/ComingSoon/ComingSoon';

const HotelPatners = () => {

    useEffect(() => {
        document.title = 'Luxury Living - Hotel Partners'
    }, [])
    return (
        <ComingSoon />
    )
}

export default HotelPatners