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
                        <img src="" alt="" />
                        <h5>Nigeria </h5>
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
height: 80%;
width: 75%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
color: #bfbcbc;
`;
const FlutterIcon = styled.div`
height: 80%;
width: 15%;
`;
const Socials = styled.div`
height: 80%;
width: 60%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
color: #bfbcbc;
`;
const DivIcon = styled.div`
height: 70%;
width: 30%;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid white;
border-radius: 10px;
cursor: pointer;
transform: scale(0.98);
`;




const Cou = styled.div`
margin-left: 5px;
margin-top: 8px;
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
`;
const DropUp = styled.div`
height: 250px;
width: 500px;
border-radius: 10px;
border: 1px solid white;
position: absolute;
bottom: 55px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;
const CountryIcon = styled.div`
height: 80%;
width: 20%;
position: relative;
`;
const Edge2 = styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
color: white;

@media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;
const Edge1 = styled.div`
height: 50%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid white;
border-bottom: 1px solid white;
color: white;
@media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterEdge = styled.div`
height: 25%;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContact = styled.div`
height: 100%;
width: 16%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`;
const SectionCompany = styled.div`
height: 100%;
width: 16%;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`;
const SectionDevelopers = styled.div`
height: 100%;
width: 16%;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`;
const SectionResources = styled.div`
height: 100%;
width: 16%;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`;
const SectionProducts = styled.div`
height: 100%;
width: 16%;
color: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`;
const Navs = styled.div`
color: #bfbcbc;
&:hover{
    color: orange;
    cursor: pointer;
}
`;
const MNav = styled.div`
font-size: 25px;
font-weight: bold;
color: white;
`;
const LiWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;
margin-top: 90px;
`;
const FooterWrapper = styled.div`
height: 75%;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const FooterContainer = styled.div`
height: 75vh;
width: 100%;
background-color: #1D1D1D;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;