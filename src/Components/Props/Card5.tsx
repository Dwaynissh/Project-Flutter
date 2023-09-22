import React from 'react'
import styled from 'styled-components';

const Card5 = () => {
  return (
    <Container>
        <Wrapper>
        <Text fs='15px' fw='bolder' cl='#1D1D1D'>API documentation</Text>
          <Text fs='16px' fw='bolder' cl=''>API reference</Text>
          <Text fs='16px' fw='bolder' cl='#1D1D1D'>API status</Text>
        </Wrapper>
    </Container>
  )
}

export default Card5;

// const Card = styled.div``

const Text = styled.div<{fs:string, fw: string, cl: string}>`
  font-size: ${({fs}) => fs};
  font-weight: ${({fw}) => fw};
  color: ${({cl}) => cl};
  cursor: pointer;

  &:hover{
    color: rgb(251, 145, 41);
  }
`
const Wrapper = styled.div`
width: 80%;
height: 20vh;
display: flex;
justify-content: space-evenly;
flex-direction: column;
`

const Container = styled.div`
height: 25vh;
width: 18%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50px;
left: 53%;
border-radius: 7px;
box-shadow: rgba(248, 242, 242, 0.514) 0px 2px 8px 0px;
`