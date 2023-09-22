import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import phone from '../../src/Assets/checkoutphone.png'

const Features = () => {
    const [textColor, setTextColor] = useState<string>('black');
  const colors = ['red', 'green', 'blue', 'orange', 'purple'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor(randomColor);
    }, 1000);
    return () => {
        clearInterval(intervalId);
      };
    }, []);
  return (
    <div>
        <FeaturesCover>
            <FeaturesWrapp>
                <Payments>
                    <TextH1>
                    <h1 style={{ color: textColor }}>Endless payment <br /> possibilities <span style={{color: "rgb(251,145,41)"}}> for <br /> enterprises</span> </h1>
                    </TextH1>
                </Payments>
                <Contents>
                    <Checkout>
                        <Wrappem>
                        <Online>
                            <h2>Online Checkout</h2>
                        </Online>
                        <Our>
                        Our online checkout features our <br />smart payment ordering system, <br /> incredible speed, and beautiful <br /> simplicity. It's designed to grow your <br /> revenue and provide the best <br /> payment experience to your <br />customers.
                        </Our>
                        <GetStarted>

                        </GetStarted>
                        </Wrappem>
                    </Checkout>
                    <FImage>
                        <img src={phone} alt="" style={{width:"85%", height:"100%",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} />
                    </FImage>
                    <PayTransfers>
                        <FirstHalf>
                            <Online>
                                    <h2>Accept payments</h2>
                            </Online>
                            <Our>
                            Easily receive money from anyone, <br /> anywhere in the world via our <br /> multitude of secure payment <br /> methods.
                            </Our>
                            <Learn>
                                <p> <span style={{color: "rgb(251,78,32)"}}> Learn more </span></p>
                            </Learn>
                        </FirstHalf>
                        <SecondHalf>
                            <Online>
                                    <h2>Transfers (Payout)</h2>
                            </Online>
                            <Our>
                            Make single or bulk transfers to <br /> bank accounts from your <br /> Flutterwave dashboard.
                            </Our>
                            <Learn>
                                <p> <span style={{color: "rgb(251,78,32)"}}> Learn more </span></p>
                            </Learn>
                        </SecondHalf>
                        

                    </PayTransfers>
                </Contents>
            </FeaturesWrapp>
        </FeaturesCover>
    </div>
  )
}

export default Features

const Learn = styled.div`
&:hover{
    transition: transform 0.2s ease-in-out;
transform: translateY(-2px);
}
`;
const SecondHalf = styled.div`
height: 40%;
width: 100%;
margin-left: 50px;
`;
const FirstHalf = styled.div`
height: 40%;
width: 100%;
margin-left: 50px;
margin-top: 50px;
`;
const PayTransfers = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`;
const FImage = styled.div`
height: 100%;
width: 30%;
`;
const GetStarted = styled.div`

`;
const Our = styled.div`
line-height: 25px;
font-size: 17px;
color: white;
`;
const Online = styled.div`
color: white;
`;
const Wrappem = styled.div`
`;
const Checkout = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const Contents = styled.div`
height: 60%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;
const TextH1 = styled.div`
font-size: 40px;
margin-left: 60px;
color: white;
`;
const Payments = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const FeaturesWrapp = styled.div`
width: 80%;
height: 130vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
transition: left 0.5s ease-in-out; 
@keyframes slide-in {
    0% {
        left: -100%;
        animation: slide-in 1s forwards;
    }
    100% {
        left: 0; 
    }
}
`;
const FeaturesCover = styled.div`
height: 100%;
width: 100%;
padding: 80px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: #1D1D1D;
`;