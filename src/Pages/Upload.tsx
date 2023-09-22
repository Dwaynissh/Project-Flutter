import { styled} from 'styled-components'
import pic from '../Assets/logo-removebg-preview.png'
import { useState } from 'react'
import {NavLink} from "react-router-dom"
// import {AiOutlineMenu} from 'react-icons/ai'

const Upload = () =>{

    const [Images, setImages] = useState("")
    const [previousImages, setPreviewImages] = useState("")

    const upLoadImage = (e: any) =>{
        const pics = e.target.files?.[0];
        setImages(pics);

        if(pics){
            const url = URL.createObjectURL(pics);
            setPreviewImages(url)
        }
    
    }

    return(
        <div>
            <Container>
                <Header>
                    <LogoHold>
                        <Img src={pic}/>
                        <p>flutterwave</p>
                    </LogoHold>
                    <NavHold>
                        <Nav>Enterprise</Nav>
                        <Nav>About </Nav>
                        <Nav>Contact</Nav>
                        <Nav>Features</Nav>
                        <Nav>Company</Nav>
                    </NavHold>
                    <NavLink to = "/" style={{ textDecoration: "none"}}>
                    <Button>Upload</Button>
                    </NavLink>
               
                    {/* <Icon><AiOutlineMenu/> </Icon> */}
                </Header>
                <Wrapper>
                <Holder>
                        <Profile>
                            <Pic src = {previousImages} alt="User Avatar" />
                            <Btn htmlFor = 'pics'>
                                
                                Upload Cover Image</Btn>
                                <Input
                                type = 'file'
                                id="pics"
                                accept ="images/jpg images/jpeg images/png"
                                onChange={upLoadImage}
                                style={{display: 'none'}} 
                                />
                        </Profile>                               
                        <InputsHolder>
                        <input placeholder="Enter Yor Full Name"></input>
                        <input placeholder="Email"></input>
                        <input placeholder="Password"  inputMode='numeric'></input>
                        <input placeholder="select a category"></input>
                        <Btn2>Submit</Btn2>
                        </InputsHolder>
                    </Holder>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Upload;

const Icon = styled.div`
display: none;
/* font-size: 20px; */
@media screen and (max-width: 320px) {
    display: flex;
    color: white;
}
@media screen and (max-width: 375px) {
    display: flex;
    color: white;
}
@media screen and (max-width: 500px) {
    display: flex;
    color: white;
}
`
const Input = styled.input``

const Pic = styled.img`
width: 250px;
height: 250px;
border: 1px solid #F1A5C2;
border-radius: 20px;
`

const InputsHolder = styled.div`
width: 40%;
height: 240px;
// background-color: red;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* border: 1px solid silver; */
gap: 10px;
input{
    width: 300px;
    height: 30px;
border: 1px solid silver;
outline-color:#F1A5C2;
border: none;
}
`

const Btn2 = styled.button`
// width: 190px;
// height: 190px;
border-radius: 10px;
padding: 10px 20px;
border: none;
color: white;
background-color: lightgrey;
`
const Btn = styled.label`
width: 160px;
height: 30px;
border-radius: 15px;
padding: 15px 10px;
border: none;
background-color: #000000;
color: white;
text-align: center;
;
&:hover{
    transition: all 350ms ease 0s;
    cursor: pointer;
}
`

const Profile = styled.div`
width: 50%;
height: 240px;
// background-color: green;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
`

const Holder = styled.div`
width: 700px;
height: 500px;
/* background-color: #363636; */
/* border: 1px solid silver; */
display: flex;
align-items: center;
justify-content: space-around;
gap: 10px;
@media screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}
@media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}
@media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}
`

const Header = styled.div`
height: 70px;
width: 90%;
/* background-color: aqua; */
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 200px;
`

const Img = styled.img`
height: 50px;
width: 50px;
`
const Button = styled.button`
padding: 15px 30px ;
border-radius: 10px;
background-color: #F1A5C2;
border: none;
transition: all 350ms;
        cursor: pointer;
    &:hover{
        transform:  scale(1.05s);
        background-color: #22263C;
        color: white;
    }
    @media screen and (max-width: 320px) {
        display: none;
    }
    
    @media screen and (max-width: 375px) {
        display: none;
    }
    @media screen and (max-width: 500px) {
        display: none;
    }
    
`
const Nav = styled.div`
 font-size: 20px;
    font-weight: 400;
  
`
const NavHold = styled.div`
width: 800px;
height: 40px;
/* background-color: red; */
display: flex;
gap: 10px;
justify-content: space-around;
align-items: center;
color: white;
@media screen and (max-width: 320px) {
        display: none;
    }
@media screen and (max-width: 375px) {
        display: none;
    }
@media screen and (max-width: 500px) {
        display: none;
    }
`
const LogoHold = styled.div`
width: 200px;
height: 40px;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
color: white;
p{
    font-size: 20px;
    font-weight: 400;
}
`
const Wrapper = styled.div`
`
const Container = styled.div`
width: 100%;
height: 100%;
padding: 100px 0;
background-color: #1D1D1D;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
margin-top: 50px;
`