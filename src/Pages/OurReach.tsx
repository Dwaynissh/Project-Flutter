import { styled } from "styled-components";
import pic from "../Assets/darkblueglobe-removebg-preview.png"
import { useState, useEffect, useRef } from "react";
import pix from '../Assets/dots.png'

const  OurReach = () =>{
    
    return(
        <>
        <Container>
            <Wrapper>
                <Head>Our <span>global</span> reach</Head>
                <Holder>
                    <TextHold>
                        <img src={pix} alt="" />
                       <Miniwrap>
                       <Hold>
                            <h3><span>30+ currencies</span></h3>
                            <p>We accept payments in more than thirty currencies</p>
                        </Hold>
                       <Hold>
                            <h3>20M+ API calls</h3>
                            <p>API calls per day, peaking at 231 requests per second</p>
                        </Hold>
                       <Hold>
                            <h3>500k+ payments daily</h3>
                            <p>Average number of payments processed daily</p>
                        </Hold>
                       <Hold>
                            <h3>15+ payments options</h3>
                            <Minifooter>
                                <Line1>
                                    <p>Debit & Credit cards</p>
                                    <p>Bank Account</p>
                                </Line1>
                                <Line1>
                                    <p>Mobile money</p>
                                    <p>POS</p>
                                </Line1>
                                <Line1>
                                    <p>M-Pesa</p>
                                    <p>VISA QR</p>
                                </Line1>
                                <Line1>
                                    <p>Bank Transfer</p>
                                    <p>USSD</p>
                                </Line1>
                            </Minifooter>
                        </Hold>
                       </Miniwrap>
                    </TextHold>
                    <ImageHold>
                        <img src={pic} alt="" />
                    </ImageHold>
                </Holder>
            </Wrapper>
        </Container>
        </>
    )
}

export default OurReach;

const Line1  = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 320px){
    display: flex;
    width: 90%;
   
}
@media screen and (max-width: 375px){
    display: flex;
    width: 90%;
}
@media screen and (max-width: 425px){
    display: flex;
    width: 90%;
}
`
const Minifooter  = styled.div`
width: 300px;
height: 130px;
display: flex;
flex-direction: column;
gap: 4px;
`
const Miniwrap  = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 375px){
    display: flex;
    flex-direction: column;
    width: 100%;
}
@media screen and (max-width: 425px){
    display: flex;
    flex-direction: column;
    width: 100%;

}
`
const Hold  = styled.div`
span{
    color: #00ABAB;
}@media screen and (max-width: 320px){
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 375px){
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 425px){
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const Holder  = styled.div`
width: 100%;
height: 80%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 70px 0px;
 @media screen and (max-width: 320px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 70px 0px;
 }
 @media screen and (max-width: 375px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 70px 0px;
 }
 @media screen and (max-width: 425px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 70px 0px;
 }

`
const ImageHold  = styled.div`
width: 45%;
display: flex;justify-content: center;
align-items: center;
img{
    width: 500px;
    object-fit: cover;
} @media screen and (max-width: 320px){
width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
 }
 @media screen and (max-width: 375px){
width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
 }
 @media screen and (max-width: 425px){
width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
 }

`
const TextHold  = styled.div`
width: 55%;
height: 80%;
display: flex;
gap: 50px;
img{
    height: 500px;
}
@media screen and (max-width: 320px){
width: 100%;
    text-align: center;
  
 }
@media screen and (max-width: 375px){
width: 100%;
    text-align: center;
  
 }
@media screen and (max-width: 425px){
width: 100%;
    text-align: center;
  
 }
`
const Head  = styled.div`
width: 100%;
font-size: 80px;
font-weight: 800;
font-family: Georgia, 'Times New Roman', Times, serif;
color: #1D1D1D;
text-align: start;
span{
    color: #6672C7;
} @media screen and (max-width: 320px){
width: 90%;
 }
 @media screen and (max-width: 375px){
width: 90%;
   
 }
 @media screen and (max-width: 425px){
width: 90%;
   
 }

`
const Wrapper  = styled.div`
width: 80%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 320px){
width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
@media screen and (max-width: 375px){
width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
@media screen and (max-width: 425px){
width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`
const Container  = styled.div`
width: 100%;
height: 100%;
padding: 10px 0px;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 320px){
width: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 375px){
width: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 425px){
width: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}
`