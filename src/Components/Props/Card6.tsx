import React from 'react'
import styled from 'styled-components';

const Card6 = () => {
  return (
    <Container>
        <Wrapper>
          <Text fs='16px' fw='bolder' cl='#1D1D1D'>Careers</Text>
          <Text fs='16px' fw='bolder' cl='#1D1D1D'>Press</Text>
        </Wrapper>
    </Container>
  )
}

export default Card6;

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
width: 130px;
height: 17vh;
display: flex;
justify-content: space-evenly;
flex-direction: column;
`

const Container = styled.div`
height: 18vh;
width: 16%;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
position: absolute;
top: 50px;
left: 65%;
border-radius: 7px;
box-shadow: rgba(248, 242, 242, 0.514) 0px 2px 8px 0px;
`