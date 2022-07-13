import React from 'react'
import './style.scss'

const Testimaonialscard = ({ testimony, border  }) => {
    return (
        <div className="testimaonials_card"  style={{
            border:`${border}px solid goldenrod`
        }}>
            <div className={`testimonials_card_para_div`}>
                {
                    // <p className={`${testimony.class}`}>{testimony.feedbackMessage}</p>
                    testimony.feedbackMessage.split('\n').map(str => <p>{str}</p>)
                }
            </div>
            <div className="info">
                <h3 className="name">{testimony.name}</h3>
                <p className="profession">{testimony.companyName}</p>
            </div>
        </div>
    )
}

export default Testimaonialscard;