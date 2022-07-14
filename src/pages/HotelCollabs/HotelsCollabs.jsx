import React, { useEffect, useState, Suspense } from 'react';
import Header from '../../components/Header/Header'
import './style.scss'
import Social from '../../components/Social/Social'
// import { newHotels } from '../../data/newcollabsdata' Static collaboration data
import Loading from '../../utils/Loading/Loading';

const HotelsCards = React.lazy(() => import('../../components/HotelCollabCard/HotelsCards'))

const apiUrl = "http://api.luxuryliving.in/"
const apiKey = "key=9d3480fc-49c4-4427-b19e-3f70d753656d"

const HotelsCollabs = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        document.title = 'Luxury Living - Hotels collabs'

        fetch(`${apiUrl}collaborations?${apiKey}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Something went wrong")
        })
        .then((actualData) => {
            setData(actualData)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <Suspense fallback={<Loading />}>
            <div className='hotels_collabs'>
                <Header />
                <div className="hotels_collabs_wrapper">
                    <h3>New Collaborations</h3>
                    <div className="new_hotels_container">
                        {
                            data.map(d => (
                                <HotelsCards key={d.id} d={d} />
                            ))
                        }
                    </div>
                </div>
                <Social />
            </div>
        </Suspense>
    )
}

export default HotelsCollabs