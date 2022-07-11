import React, { useEffect } from 'react'
import ComingSoon from '../../utils/ComingSoon/ComingSoon'
const Agents = () => {

    useEffect(() => {
        document.title = 'Luxury Living - Agents'
    }, [])
    return (
        <ComingSoon />
    )
}

export default Agents