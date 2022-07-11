import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
const Social = () => {
    return (
        <Socialhandles>
            <FaWhatsapp className="icons" />
            <AiOutlineInstagram className="icons" />
            <FaFacebookF className="icons" />
        </Socialhandles>
    )
}

const Socialhandles = styled.div`
height: 130px;
width: 60px;
position: fixed;
left: 30px;
bottom:10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
cursor:pointer;
.icons{
    font-size: 25px;
}
@media (max-width:600px){
    position: fixed;
    left:-15px;
    top: 45%;
    display:none;
    .icons{
        font-size: 17px;
    }

}
@media (max-width:480px){
    position: fixed;
    left:35%;
    top:85%;
    flex-direction:row;
    width:30%;
    .icons{
        font-size: 17px;
    }

}
`
export default Social
