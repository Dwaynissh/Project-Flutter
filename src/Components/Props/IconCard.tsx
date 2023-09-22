import React from 'react'
import styled from 'styled-components';
import {NavLink} from "react-router-dom"

const IconCard = () => {
  return (
    <Container>
        <Wrapper>
            <TextHolder>
                <NavLink to="" style={({isActive }) => {
        return {
           textDecoration: "none",
           }}}>
            <Text fs='22px' fw='bolder' cl='#1D1D1D'>Features</Text>
                </NavLink>
                <hr/>


                <NavLink to="" style={({isActive }) => {
        return {
           textDecoration: "none",
           }}}>
            <Text fs='22px' fw='bolder' cl='#1D1D1D'>About</Text>
            </NavLink>
            <hr/>

            
            <NavLink to="" style={({isActive }) => {
                return {
                    textDecoration: "none",
                    }}}>
                <Text fs='22px' fw='bolder' cl='#1D1D1D'>Contact</Text>
                </NavLink>
                <hr/>
                
       <NavLink to="" style={({isActive }) => {
        return {
           textDecoration: "none",
        }}}>
            <ButtonHold>
            <Button><h3>Upload</h3></Button>
            </ButtonHold>
      </NavLink>
            
            </TextHolder>
        </Wrapper>
    </Container>
  )
}

export default IconCard;
const Button = styled.div`
display: none;
width: 40px;
height: 20px;
padding: 15px 50px;
background-color: rgb(251, 145, 41);
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 10px;
margin-top: 20px;
cursor: pointer;
font-size: 14px;
font-weight: 500;
`

const ButtonHold = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.div<{fs:string, fw: string, cl: string}>`
  font-size: ${({fs}) => fs};
  font-weight: ${({fw}) => fw};
  color: ${({cl}) => cl};
  cursor: pointer;
  margin-top: 30px;

  &:hover{
    color: rgb(251, 145, 41);
  }
`

const TextHolder = styled.div`

hr{
    background-color: rgb(251, 145, 41);
}
`

const Wrapper = styled.div`
width: 100%;
height: 55vh;
background-color: gray;
border-radius: 7px;


`

const Container = styled.div`
height: 60vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 70px;
border-radius: 7px;
`