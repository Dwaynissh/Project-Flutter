import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
const Hero = () => {
    const [textColor, setTextColor] = useState<string>('black');
    const colors = ['black'];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTextColor(randomColor);
      }, 1000);
      return () => {
          clearInterval(intervalId);
        }
      }, []);
  return (
    <Container>
      <Wrapper>
        <Top>

          <H1 style={{ color:  textColor }}> <span>Endless possibilities</span> for all</H1>

          <p>Unlocking boundless payment opportunities for enterprises, individuals, small businesses, emerging markets, and startups alike.</p>

          <ButtonHolder>
          <Button   pd='13px' bg='rgb(251, 145, 41)' cl='#fff' br='10px' ml='' wd='' hi=''>Create a free account</Button>
          <Button  pd='11px' bg='#eae1e1' cl='#000' br='10px' ml='20px' wd='' hi=''>Contact sales</Button>
          </ButtonHolder>
        </Top>
      </Wrapper>
    </Container>
  )
}

export default Hero;

// const Card = styled.div``

const ButtonHolder = styled.div`
margin-top: 35px;
display: flex;
align-items: center;


`

const Button = styled.div<{pd: string, bg: string, cl:string, br:string, ml: string, wd:string, hi:string}>`
height: ${({hi}) => hi};
width: ${({wd}) => wd};
padding: ${({pd}) => pd};
background-color: ${({bg}) => bg};
color: ${({cl}) => cl};
border-radius: ${({br}) => br};
margin-left: ${({ml}) => ml};
cursor: pointer;
font-size: 14px;
font-weight: 500;

@media screen and  (min-width: 375px){
  padding: 17px;
  transition: all 350ms;
}  


@media  screen and  (min-width: 375px) {
  padding: 20px 30px;
  transition: all 350ms;
}
/* @media (min-width: 768px) {
  padding: ${({pd}) => pd};
  transition: all 350ms;
} */
`

// const Top = styled.div``

// const Top = styled.div``

// const Top = styled.div``

// const Top = styled.div``

const H1 = styled.h1`
font-family: Millik, sans-serif;
font-size: 50px;
line-height: 60px;
color: #fff;
@media (min-width: 768px) {
    width: 50%;
    font-size: 62px;
    line-height: 63px;
}

@media (min-width: 1024px) {
    width: 57%;
    font-size: 90px;
    line-height: 100px;
}
`

const Top = styled.div`
span{
  color: rgb(251, 145, 41);
}
p{
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #fff;
  @media (min-width: 768px) {
    width: 80%;
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    width: 55%;
    font-size: 22px;
    line-height: 32px;
    margin-top: -20px;
}
}

`

const Wrapper = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 15px;

@media (max-width: 1026px) {
  /* background-color: aliceblue; */
    width: 90%;
}
`

const Container = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
display: flex;
justify-content: center;
`