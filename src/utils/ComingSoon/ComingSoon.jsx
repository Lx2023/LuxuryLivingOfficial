import React from 'react'
import Header from '../../components/Header/Header'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import Social from '../../components/Social/Social'
const Agents = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <div className='coming_soon'>
            <Header />
            <img src="https://cdn-icons-png.flaticon.com/128/1256/1256019.png?ga=GA1.2.257983829.1629111004" alt="" />
            <h1>coming soon</h1>
            <button onClick={back}>back</button>
            <Social />
        </div>
    )
}

export default Agents