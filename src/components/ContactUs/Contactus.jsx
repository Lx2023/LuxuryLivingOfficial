import React from 'react'
import styled from 'styled-components'
import SocialMob from '../../components/SocialMob/SocialMob'
const Contactus = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <H3>COME...VISIT US SOMETIME!  </H3>
                    <Img src='./images/gmap.png' />
                    <Span>LX MARKETING PVT. LTD.</Span>
                    <P>K No. - 846/2, first floor, <br /> Opposite Metro pillar No. -115 <br />Ghitorni, New Delhi , India</P>
                </Left>
                <Line></Line>
                <Right>
                    <H3>IN A HURRY TO CONNECT?</H3>
                    <Img src='./images/cphone.png' />
                    <div>
                        <Span> <a href="tel:9711983158">+91 9711983158</a></Span>
                        <Span> <a href="tel:9899699991">+91 9899699991</a></Span>
                    </div>
                    <Email>  <a href="mailto:gaurav.s@luxuryliving.in">gaurav.s@luxuryliving.in</a> <br />
                        <a href="mailto:luxuryliving.in"> a@luxuryliving.in</a>
                    </Email>
                </Right>
                <Vertical />
            </Wrapper>
            <SocialMob />
        </Container >
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;    
    position:relative;
    margin-top:4rem;
    .nav{
        color:white;
        text-decoration:none;
    }
    @media screen and (max-width:480px){
        height:auto;
        margin-top:7rem;
        margin-bottom:4rem;
    }
`

const Wrapper = styled.div`
width:100%;
height:75vh;
display: flex;
align-items: center;
justify-content: center;
position:relative;
@media(max-width:1000px){
    width:95%;
}
@media(max-width:540px){
    flex-direction:column;
    justify-content: space-evenly;
    height:90vh;
    padding-bottom:5rem;
}
`
const Left = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
@media(max-width:540px){
    width:90%;
    height:40%;
}
`
const H3 = styled.h3`
font-size:1.9rem;
color:white;
font-weight:bold;
letter-spacing:1.5px;
line-height:2;
text-align:center;
@media(max-width:400px){
    font-size:2.3rem;
}
`

const Img = styled.img`
width:12rem;
height:12rem;
object-fit:cover;
@media(max-width:540px){
    width:15rem;
    height:15rem;    
}
`

const Span = styled.span`
    font-size:1.9rem;
a {
    color:white;
    font-weight:400;
    text-decoration:none;
    &:hover{
        color:gold;
    }
}
@media(max-width:540px){
    font-size:1.7rem;
}
`
const P = styled.p`
font-size:1.4rem;
color:white;
text-align:center;
letter-spacing:1.5px;
@media(max-width:540px){
    font-size:1.8rem;    
    margin-top:1rem;
}
`
const Email = styled.p`
font-size:1.4rem;
color:white;
text-align:center;
margin-top:1rem;
letter-spacing:1.6px;
a{
    color:white;
    font-weight:400;
    text-decoration:none;
    &:hover{
        color:gold;
    }   
}
@media(max-width:540px){
    font-size:1.8rem;
}
`

const Right = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
div{
    display:flex;
    flex-direction:column;
}
@media(max-width:540px){
    width:90%;
    height:35%;
}
`
const Vertical = styled.div`
position:absolute;
top:10rem;
right:49%;
width:2px;
height:50vh;
background-color:var(--border-golden);
@media(max-width:540px){
    height:1.5px;
    width: 60%;
    left:20%;
    top:50%;
    display:none;
}
`
const Line = styled.div`
width:80%;
height:1px;
background-color:goldenrod;
display:none;
@media(max-width:540px){
    display:block;
}
`
export default Contactus
