import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
const SocialMob = () => {
    return (
        <Socialhandles>
            <FaWhatsapp className="icons" />
            <AiOutlineInstagram className="icons" />
            <FaFacebookF className="icons" />
        </Socialhandles>
    )
}

const Socialhandles = styled.div`
height: 13rem;
width: 15rem;
position: absolute;
bottom:0rem;
align-items: center;
justify-content: space-evenly;
display:none;
cursor:pointer;
.icons{
    font-size: 25px;
}
@media (max-width:600px){
    display: flex;
    bottom:-3rem;
    .icons{
        font-size: 18px;
    }

}
`
export default SocialMob
