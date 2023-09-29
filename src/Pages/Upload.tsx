import { styled} from 'styled-components'
import pic from '../Assets/logo.png'
import { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Upload = () =>{

    const [minutes, setMinutes] = useState(0)
    useEffect(()=>{
        const Target = new Date("9/08/2023 11:59:59")
    
        const interval = setInterval(()=>{
          const now = new Date ()
          const difference =Target.getMinutes() - now.getMinutes()  

          const m = Math.floor((difference % (1000 * 60 * 60 )/(1000 * 60)))
          setMinutes(m)
        
        })
        
      })

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
                    <Button>Upload</Button>
               
                    <Icon><AiOutlineMenu/> </Icon>
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
                        <input placeholder="Full Name"></input>
                        <input placeholder="Company Name"></input>
                        <input placeholder="Email Address"  inputMode='numeric'></input>
                        <input placeholder="Phone number"></input>
                        <input placeholder="Country your business is registered"></input>
                        <input placeholder="Business Type"></input>
                        <input placeholder="Industry"></input>
                        <Btn2>Submit</Btn2>
                        </InputsHolder>
                       
                    </Holder>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Upload;

const Wrap = styled.div``
const Hold = styled.div``
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
height: 300px;
border: 1px solid #2e2d2d;
border-radius: 10px;
`

const InputsHolder = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px 20px;
gap: 20px;
input{
    width: 300px;
    height: 40px;
border: 1px solid grey;
border-radius: 10px;
outline-color: #424242;
}::placeholder{
    /* margin-t: 50px; */
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
background-color: #000000;
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
display: flex;
justify-content: center;
align-items: center;
;
&:hover{
    transition: all 350ms ease 0s;
    cursor: pointer;
}
`

const Profile = styled.div`
width: 50%;
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
color: black;

  
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
color: black;

}
`
const Wrapper = styled.div`
`
const Container = styled.div`
width: 100%;
height: 100%;
/* background-color: #1D1D1D; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
margin-top: 50px;
`