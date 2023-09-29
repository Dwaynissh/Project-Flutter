import React, { useState } from 'react'
import styled from 'styled-components'
import usa from "../../Assets/us.svg"
import cm from "../../Assets/cm.svg"
import za from "../../Assets/za.svg"
import eu from "../../Assets/eu.svg"
import sn from "../../Assets/sn.svg"
import mw from "../../Assets/mw.svg"
import ng from "../../Assets/ng.svg"
import rw from "../../Assets/rw.svg"
import tz from "../../Assets/tz.svg"
import {FaAngleUp} from "react-icons/fa"

const Footer = () => {
    const [show, setshow] = useState(false)
    const Dropdown = () => {
        setshow(!show)
    }
  return (
    <div>
        <FooterContainer>
            <FooterWrapper>
                <LiWrapper>
                    <SectionProducts>
                        <MNav>Products</MNav>
                            <Navs>Collect Payment</Navs>
                            <Navs>Send Money</Navs>
                            <Navs>Store</Navs>
                            <Navs>Payment Navsnk</Navs>
                            <Navs>Invoices</Navs>
                            <Navs>Capital</Navs>
                            <Navs>Grow</Navs>
                            <Navs>Card Issuing</Navs>
                            <Navs>FaaS</Navs>
                            <Navs>Disha</Navs>
                            <Navs>Send</Navs>
                            <Navs>Tuition</Navs>
                    </SectionProducts>
                    <SectionResources>
                        <MNav>Resources</MNav>
                            <Navs>Pricing</Navs>
                            <Navs>Support</Navs>
                            <Navs>Blog</Navs>
                            <Navs>Integrations</Navs>
                            <Navs>Why you got Charged</Navs>
                            <Navs>Cookie Settings</Navs>
                    </SectionResources>
                    <SectionDevelopers>
                        <MNav>Developers</MNav>
                            <Navs>API Documentation</Navs>
                            <Navs>API Reference</Navs>
                            <Navs>API Status</Navs>
                            <Navs>Integrations</Navs>
                    </SectionDevelopers>
                    <SectionCompany>
                    <MNav>Company</MNav>
                            <Navs>Customers</Navs>
                            <Navs>Careers</Navs>
                            <Navs>Press</Navs>  
                            <Navs>Covid 19</Navs>
                    </SectionCompany>
                    <SectionContact>
                        <MNav>Contact</MNav>
                            <Navs>hi@flutterwavego.com</Navs>
                            <Navs>+234 1-8889595</Navs>
                            <Navs>0700-FLUTTERWAVE</Navs>
                            <Navs>Twitter Support 19</Navs>
                            <Navs>Our call Lines are available 24/7.</Navs>
                    </SectionContact>
                </LiWrapper>
            </FooterWrapper>
            <FooterEdge>
                <Edge1>
                    <CountryIcon>
                    {show? (
                            <DropUp>
                                <DropUpWrapp>
                                    <IconCountry>
                                        <img src={usa} alt="" height="80%"/>
                                        <Cou>United States</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={cm} alt="" height="80%" />
                                        <Cou>Cameroon</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={za} alt="" height="80%" />
                                        <Cou>South Africa</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={eu} alt="" height="80%" />
                                        <Cou>Europe</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={sn} alt="" height="80%" />
                                        <Cou>Senegal</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={mw} alt="" height="80%" />
                                        <Cou>Malawi</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={ng} alt=""  height="80%"/>
                                        <Cou>Nigeria</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={rw} alt="" height="80%" />
                                        <Cou>Rwanda</Cou>
                                    </IconCountry>
                                    <IconCountry>
                                        <img src={tz} alt="" height="80%" />
                                        <Cou>Tanzania</Cou>
                                    </IconCountry>

                                </DropUpWrapp>
                            </DropUp>
                    ): null}
                        <DivIcon onClick={Dropdown}>
                        <img src={ng} alt="" />
                        <h5>Nigeria </h5>
                        <FaAngleUp/>
                        </DivIcon>
                    </CountryIcon>
                    <Socials>
                        <h4>Twitter</h4>
                        <h4>Facebook</h4>
                        <h4>Instagram</h4>
                        <h4>Youtube</h4>
                        <h4>Linkden</h4>
                    </Socials>
                </Edge1>
                <Edge2>
                    <FlutterIcon>
                        <h4>© Flutterwave</h4>
                    </FlutterIcon>
                    <Policy>
                        <h4>Privacy policy</h4>
                        <h4>Terms of use</h4>
                        <h4>Cookie policy</h4>
                        <h4>Merchant service agreement</h4>
                        <h4>Payment protection promise</h4>
                    </Policy>
                </Edge2>
            </FooterEdge>
        </FooterContainer>
    </div>
  )
}

export default Footer

const Policy = styled.div`
width: 75%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
color: rgb(63,63,63);
@media screen and (max-width: 500px){
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`;
const FlutterIcon = styled.div`
width: 15%;
@media screen and (max-width: 500px){
    width: 50%;
    text-align: center;
}
`;
const Socials = styled.div`
height: 80%;
width: 60%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
color: rgb(63,63,63);
@media screen and (max-width: 500px){
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`;
const DivIcon = styled.div`
height: 70%;
width: 50%;
padding: 5px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
border: 1px solid white;
border-radius: 10px;
cursor: pointer;
transform: scale(0.98);
@media screen and (max-width: 500px){
    width: 90px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: center;
}
`;

const Cou = styled.div`
margin-left: 5px;
margin-top: 8px;
@media screen and (max-width: 500px){
    width: 50%;
}
`;
const IconCountry = styled.div`
height: 20%;
width: 30%;
display: flex;
justify-content: flex-start;
img {
    margin-top: 3px;
    margin-left: 3px;
}  
 &:hover{
    cursor: pointer;
    background-color: #d1d6d7;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    transform: translateY(-2px);
 };
 @media screen and (max-width: 500px){
    width: 20%;
    font-size: 15px;
    
    img{
        width: 70%;
    }
}
`;
const DropUpWrapp = styled.div`
height: 80%;
width: 90%;
color: black;
flex-wrap: wrap;
display: flex;
justify-content: flex-start;
align-items: flex-start;
gap: 20px;
margin-top: 10px;
@media screen and (max-width: 500px){
   margin: 15px;
}
`;
const DropUp = styled.div`
height: 250px;
width: 500px;
border-radius: 10px;
border: 1px solid white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position: absolute;
bottom: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
@media screen and (max-width: 800px){
    bottom: 100px;
    width: 350px;
    left: 50%;
    transform: translateX(-50%);
}
@media screen and (max-width: 500px){
    bottom: 100px;
    width: 250px;
    left: 50%;
    transform: translateX(-50%);
}
`;
const CountryIcon = styled.div`
height: 80%;
width: 20%;
position: relative;
`;
const Edge2 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
color: rgb(63,63,63);
@media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
`;
const Edge1 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid rgb(63,63,63);
border-bottom: 1px solid rgb(63,63,63);
color: rgb(63,63,63);
@media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
`;

const FooterEdge = styled.div`
width: 70%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 500px){
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
`;

const SectionContact = styled.div`
width: 16%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 500px){
    width: 40%;
}
`;
const SectionCompany = styled.div`
width: 16%;
color: rgb(63,63,63);
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 500px){
    width: 40%;
}
`;
const SectionDevelopers = styled.div`
width: 16%;
color: rgb(63,63,63);
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 500px){
    width: 40%;
}
`;
const SectionResources = styled.div`
width: 16%;
color: rgb(63,63,63);
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 500px){
    width: 40%;
}
`;
const SectionProducts = styled.div`
width: 16%;
color: rgb(63,63,63);
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 30px;
@media screen and (max-width: 500px){
    width: 40%;
}
`;
const Navs = styled.div`
color: rgb(63,63,63);
&:hover{
    color: orange;
    cursor: pointer;
}
`;
const MNav = styled.div`
font-size: 25px;
font-weight: bold;
color: rgb(63,63,63)white;
`;
const LiWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
margin-top: 90px;
margin-bottom: 50px;
@media screen and (max-width: 500px){
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
`;
const FooterWrapper = styled.div`
width: 70%;
display: flex;
@media screen and (max-width: 500px){
    flex-wrap: wrap;
    width: 95%;
}
`;

const FooterContainer = styled.div`
height: 100%;
width: 100%;
padding-top: 70px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 500px){
    flex-wrap: wrap;
    background-color: #939393;
}
`;