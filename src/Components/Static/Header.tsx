import React, { useState } from 'react'
import styled from 'styled-components';
import {AiOutlineMenu} from "react-icons/ai"
import Card4 from '../Props/Card4';
import Card5 from '../Props/Card5';
import Card6 from '../Props/Card6';
import logo from '../../Assets/logo-removebg-preview.png'
import IconCard from '../Props/IconCard';
import {NavLink} from "react-router-dom"
import Upload from '../../Pages/Upload';

const Header = () => {

    const [show1 , setShow1] = useState (false) 
    const [show2, setShow2] = useState (false) 
    const [show3, setShow3] = useState (false) 
    const [show4, setShow4] = useState (false) 
    const [show5, setShow5] = useState (false) 
    const [show6, setShow6] = useState (false) 

    const [drop, setDrop] = useState(false)
    
    const Toggle1 = () => {
        setShow1 (!show1);
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
    }

    const Toggle2 = () => {
        setShow2(!show2)
        setShow1 (false);
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
    }

    const Toggle3 = () => {
        setShow3(!show3)
        setShow1 (false);
        setShow2 (false);
        setShow4(false)
        setShow5(false)
        setShow6(false)
    }

    const Toggle4 = () => {
        setShow4(!show4)
        setShow1 (false);
        setShow2(false)
        setShow3(false)
        setShow5(false)
        setShow6(false)
    }

    const Toggle5 = () => {
        setShow5(!show5)
        setShow1 (false);
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow6(false)
    }
    
    const Toggle6 = () => {
        setShow6(!show6)
        setShow1 (false);
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
    }
    const Toggle7 = () => {
        setShow6(false)
        setShow1 (false);
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
    }

    const Tog = () => {
        setDrop(!drop)
    }
    
    const [header, setHeader] = useState(false)

    const headerChange = () => {
        const scroll = window.pageYOffset

        if(scroll >= 10){
            setHeader(true)
        }else{
            setHeader(false)
        }
    };
    window.addEventListener("scroll", headerChange)
  return (
    <div>
        
    {header?(
    <Container bg="rgb(251, 145, 41)" po="fixed" onMouseLeave={Toggle7}>
        <Wrapper>
            <Logo>
                <img src={logo} alt="" />
                <h3>flutterwave</h3>
            </Logo>
            <NavHolder>
                <Nav cl="#fff" onMouseEnter={Toggle1}>Features</Nav>
                {show1? (<Card1/>):null}


                <Nav cl="#fff" onMouseEnter={Toggle2}>About</Nav>
                {show2? (<Card2/>):null}


                <Nav cl="#fff" onMouseEnter={Toggle3}>Contact</Nav>
                {show3? (<Card3/>):null}


                <Nav cl="#fff" onMouseEnter={Toggle4}>Resources</Nav>
                {show4? (<Card4/>):null}


                <Nav cl="#fff" onMouseEnter={Toggle5}>Developers</Nav>
                {show5? (<Card5 />):null}


                <Nav cl="#fff" onMouseEnter={Toggle6}>Company</Nav>
                {show6? (<Card6/>):null}


            </NavHolder>
            <Icon cl="#fff" onClick={Tog}><AiOutlineMenu/></Icon>
            {drop? (<IconCard/>):null}
            <NavLink to = "./Upload" style={{ textDecoration: "none"}}>
            <Button>Upload</Button>
            </NavLink>
        </Wrapper>
    </Container>
    ):(
        <Container bg="#1D1D1D" po="sticky" onMouseLeave={Toggle7}>
        <Wrapper>
            <Logo>
                <img src={logo} alt="" />
                <h3>flutterwave</h3>
            </Logo>
            <NavHolder>
                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle1}>Features</Nav>
                {show1? (<Card1/>):null}


                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle2}>About</Nav>
                {show2? (<Card2/>):null}


                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle3}>Contact</Nav>
                {show3? (<Card3/>):null}


                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle4}>Resources</Nav>
                {show4? (<Card4/>):null}


                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle5}>Developers</Nav>
                {show5? (<Card5 />):null}


                <Nav cl="rgb(251, 145, 41)" onMouseEnter={Toggle6}>Company</Nav>
                {show6? (<Card6/>):null}


            </NavHolder>
            <Icon cl="rgb(251, 145, 41)" onClick={Tog}><AiOutlineMenu/></Icon>
            {drop? (<IconCard/>):null}
           <NavLink to= "upload">
           <Button>Upload</Button>
           </NavLink>
        </Wrapper>
    </Container>
  )}
    </div>
  )
}

export default Header;

const Card3 = styled.div``

const Card2 = styled.div``

const Card1 = styled.div``

const Button = styled.div`
padding: 12px 45px;
border-radius: 10px;
background-color: #EEEEEE;
display: none;
cursor: pointer;
&:hover{
    background-color: rgb(251, 145, 41);
    box-shadow: rgba(248, 242, 242, 0.514) 0px 2px 8px 0px;
    color: #fff;
}

@media(min-width: 1024px){
    display: flex;
}
`

const Icon = styled.div<{cl: string}>`
font-size: 25px;
color: ${({cl}) => cl};
display: none;

@media(max-width: 1023px){
    display: flex;
    font-weight: bolder;
}

`

const Nav = styled.div<{cl: string}>`
margin-right: 30px;
font-size: 16px;
font-weight: 500;
color: ${({cl}) => cl};
cursor: pointer;

&:hover{
    color: rgb(251, 145, 41);
}
`

const NavHolder = styled.div`
width: 60%;
display: none;
justify-content: center;
align-items: center;

@media(min-width: 1024px){
    display: flex;
}
`

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: -7px;
h3{
    font-size: 23px;
    color: #fff;
    font-weight: 500;
}
img{
    height: 50px;
    width: 50px;
}
`

const Wrapper = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;

@media (max-width: 1026px) {
    width: 90%;
}

`

const Container = styled.div<{bg: string, po:string}>`
height: 70px;
width: 100%;
background-color: ${({bg}) => bg};
display: flex;
justify-content: center;
align-items: center;
position: relative;
position: ${({po}) => po};
transition: 350ms ease-in;
z-index: 20;
`