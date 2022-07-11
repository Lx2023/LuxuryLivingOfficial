import React, { useState } from 'react'
import './ham.css'
const Btn = () => {
    const [cancel, setCancel] = useState(false)

    const click = () => {
        switch (cancel) {
            case false:
                setCancel(true)
                break;
            case true:
                setCancel(false)
                break;
            default:
                setCancel(false)
        }
    }

    return (
        <div className='btn' onClick={click}>
            <span className={cancel ? "btn1" : "btn11"} ></span>
            <span className={cancel ? "btn2" : "btn22"} ></span>
            <span className={cancel ? "btn3" : "btn33"}></span>
        </div>
    )
}

export default Btn
