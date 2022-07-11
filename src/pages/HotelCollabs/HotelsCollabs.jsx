import React, { useEffect, useState, Suspense } from 'react';
import Header from '../../components/Header/Header'
import './style.scss'
import Social from '../../components/Social/Social'
import { newHotels } from '../../data/newcollabsdata'
import Loading from '../../utils/Loading/Loading';

const HotelsCards = React.lazy(() => import('../../components/HotelCollabCard/HotelsCards'))

const HotelsCollabs = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        document.title = 'Luxury Living - Hotels collabs'
        setData(newHotels)
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