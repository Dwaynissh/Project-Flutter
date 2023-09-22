import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../Components/Props/ButtonProps'
import {HiLocationMarker} from "react-icons/hi"
import {IoCall} from "react-icons/io5"

const Contact = () => {
  return (
    <div>
        <ContactCover>
            <ContactCoverWrapp>
                <ContactText>
                    <ContactH>
                        <h1>Contact Us</h1>
                        <p>Working with the Flutterwave is more than just a career; it’s meaningful <br /> work that improves the lives of millions of people.</p>
                    </ContactH>
                </ContactText>
                <TheRestContent>
                    <FirstInput>
                        <InputWrapp>
                        <Giveus>
                            <h2>Give us a call</h2>
                            <h3>01-2715000 or 0700CALLARM(0700 2255 276)</h3>
                        </Giveus>
                        <Giveus>
                            <h2>Leave us a message</h2>
                        </Giveus>
                        <Email>
                            <h2>Email Address</h2>
                            <input type="text" placeholder='Johndoe@codelab.com' style={{borderRadius:"8px", paddingLeft:"10px", fontSize:"17px"}} />
                        </Email>
                        <Name>
                            <h2>Full Name</h2>
                            <input type="text" placeholder='John Doe' style={{borderRadius:"8px", paddingLeft:"10px",fontSize:"17px"}} />
                        </Name>
                        <PhoneNo>
                            <h2>Phone Number</h2>
                            <input type="text" placeholder='+234'  style={{borderRadius:"8px", paddingLeft:"10px",fontSize:"17px"}} />
                        </PhoneNo>
                        <Terms>
                            <PolicyHolder>
                            <input type="checkbox" />I hereby consent to the use of the personal data provided in this form by Flutterwave as it relates to the Fintech Window, and/or for providing updates and marketing material which I have agreed to receive, in accordance with the Nigerian Data Protection Regulations (NDPR) 2019, as well as our data protection policy
                            </PolicyHolder>
                        </Terms>
                        <Button>
                        <ButtonProps text ='Discover' bg = 'rgb(251,145,41)' col = 'white' fs = '17px'/>
                        </Button>
                        </InputWrapp>       
                    </FirstInput>
                    <BranchLocator>
                        <BranchWrapp>
                            <BranchLocay>
                            <h2>Branch Locator</h2>
                            </BranchLocay>
                            <InputLocay>
                            <input type="text" placeholder='Search Branch by State, Street or LGA' style ={{borderRadius:"8px", paddingLeft:"10px",fontSize:"17px", width:"100%", height:"100%"}}/>
                            </InputLocay>
                            <BButton>
                                Search
                            </BButton>
                            <Head>
                                <h3>HEAD QUARTERS</h3>
                            </Head>
                            <TextAll>
                                <Circle> 
                                    <HiLocationMarker/> 
                                </Circle>
                                <h4>5, Mekunwen Rd Off Oyinkan Abayomi Drive Ikoyi, Lagos</h4>
                            </TextAll>
                            <TextAll2>
                                <Circle> 
                                    <IoCall/>
                                </Circle>
                                <h4>01-2715000, 0700CALLARM(0700 2255 276)</h4>
                            </TextAll2>
                            <Head>
                                <h3>LAGOS OPERATIONS OFFICE</h3>
                            </Head>
                            <TextAll>
                                <Circle>
                                <HiLocationMarker/> 
                                </Circle>
                                <h4>SURULERE 86, Adeniran Ogunsanya Street Surulere, Lagos</h4>
                            </TextAll>
                            <TextAll2>
                                <Circle>
                                <IoCall/>
                                 </Circle>
                                <h4>01-2715005 ; 01-2715000; 01-4608350-379</h4>
                            </TextAll2>
                        </BranchWrapp>
                    </BranchLocator>
                </TheRestContent>
            </ContactCoverWrapp>
        </ContactCover>
    </div>
  )
}

export default Contact

const Button = styled.div`

`;
const PolicyHolder = styled.div`
height: 80%;
width: 80%;
`;
const Terms = styled.div`
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
`;
// const Input = styled.div`
// width: 100%;
// height: 10%;
// `;
const PhoneNo = styled.label`
width: 100%;
height: 20%;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-bottom: 20px;
input {
    width: 100%;
    height: 50%;
    outline-color: rgb(251,145,41);
}
`;
const Name = styled.label`
width: 100%;
height: 20%;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-bottom: 20px;
input {
    width: 100%;
    height: 50%;
    outline-color: rgb(251,145,41);
}
`;
const Email = styled.label`
width: 100%;
height: 20%;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin-bottom: 20px;
input {
    width: 100%;
    height: 50%;
    outline-color: rgb(251,145,41);
}
`;
const Giveus = styled.label`
width: 100%;
height: 10%;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
// const TheRestContent = styled.div`
// `;


const Circle = styled.div`
height: 80%;
width: 8%;
border-radius: 50%;
background-color: rgb(241,165,194);
margin-right: 20px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
&:hover {
    transition: transform 0.3s ease-in-out;
transform: scale(1.05);
}
`;
const TextAll2 = styled.div`
height: 8%;
width: 100%;
color: black;
display: flex;
justify-content: flex-start;
align-items: center;  
`;
const TextAll = styled.div`
height: 8%;
width: 100%;
color: black;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Head = styled.div`
height: 8%;
width: 100%;
border-bottom: 1px solid grey;
color: black;
`;
const BButton = styled.button`
height: 8%;
width: 100%;
color: black;
font-size: 20px;
border-radius: 8px;
border: none;
display: flex;
justify-content: center;
align-items: center;  
background-color: rgb(234, 119, 4);  
cursor: pointer;
transform: scale(0.98);
`;
const InputLocay = styled.div`
height: 8%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;  
background-color: green;  
margin-bottom: 20px;
`;
const BranchLocay = styled.div`
height: 10%;
width: 100%;
color: black;
font-size: 25px;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
`;
const BranchWrapp = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
`;
const BranchLocator = styled.div`
width: 45%;
height: 80%;
background-color: white;
box-shadow: rgba(248, 242, 242, 0.514) 0px 2px 8px 0px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
&:hover{
transition: transform 0.2s ease-in-out;
transform: translateY(-2px);
}
`;
const InputWrapp = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const FirstInput = styled.div`
width: 45%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`;
const TheRestContent = styled.div`
height: 80%;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const ContactH = styled.div`
text-align: center;
h1{
    font-size: 50px;
}
p {
    font-size: 20px;
}
`;
const ContactText = styled.div`
height: 20%;
width: 100%;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const ContactCoverWrapp = styled.div`
height: 100%;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const ContactCover = styled.div`
height: 140vh;
width: 100%;
padding: 100px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #1D1D1D;
`;