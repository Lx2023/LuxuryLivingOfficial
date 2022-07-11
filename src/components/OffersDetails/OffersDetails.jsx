// import React, { useRef, useEffect } from 'react';
import './style.scss';
import {
    CloseOutlined
} from '@ant-design/icons'
const OffersDetails = ({ setDetails }) => {
    // const modalRef = useRef();

    // useEffect(() => {
    //     const handler = (e) => {
    //         if (!modalRef.current.contains(e.target)) {
    //             setDetails(false)
    //         }
    //     }
    //     document.addEventListener('click', handler)
    //     return () => {
    //         document.removeEventListener('click', handler)
    //     }
    // }, [setDetails])

    return (
        <div className='offers_details'>
            <h1>Offers Details Page</h1>
            <div className="close_" onClick={() => setDetails(false)}><CloseOutlined /></div>
        </div>
    )
}

export default OffersDetails