
import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
// import Header from '../../components/Header/Header';
const NotFound = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
        window.scroll({
            top: 0,
            behavior: 'auto'
        })
    }
    const home = () => {
        navigate('/');
        window.scroll({
            top: 0,
            behavior: 'auto'
        })
    }
    return (
        <div className='not_found'>
            {/* <Header display='none' /> */}
            <div className="not_found_wrapper">
                <h3> page not found !</h3>
                <p>We are sorry but the page you are looking for does not exist.</p>
                <div className="btns_">
                <button onClick={back}>
                    <span> &larr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go Back</span>
                </button>
                <button onClick={home}>
                    <span> Home</span>
                </button>
                </div>
            </div>
            <div className="err"><span>404</span></div>
        </div>
    )
}

export default NotFound








