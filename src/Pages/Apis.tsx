import { styled } from "styled-components";
import List from "../Components/Props/Lists";
import { useRef, useEffect, useState } from "react";

const Apis =() =>{
    const Bn: string[] = [
        "background-image: linear-gradient(to right, #007cf0, #00dfd8); background-clip: border; -webkit-background-clip: border; -webkit-border-fill-color: transparent",
        "background-image: linear-gradient(to right, #7928ca,  #ff0080) background-clip: border; -webkit-background-clip: border; -webkit-border-fill-color; transparent",
        "background-image: linear-gradient(to right, #ff4d4d, #f9cb28)background-clip: ; -webkit-background-clip: border; -webkit-border-fill-color; transparent",
       ]



    
       let Bn_ref: any = useRef()
       const [count, setCount] = useState(0)
     
       useEffect(()=>{
        
         Bn_ref.current.style = Bn[count % Bn.length]
       })
     
       useEffect(()=>{
         setInterval(()=>{
           setCount((el)=> el + 1/2 )
         }, 5000)
       },[])

    return(
        <>
            <Container>
                <Wrapper>
                    <Head>Well documented and easy-to-use <span ref={Bn_ref}>APIs</span> for <span>developers</span>
                        <p>We have done the core payments integrations and abstractions, so your team can easily <br></br>integrate with our APIs and  access multiple payment functionalities</p>
                    </Head>
                   <Middle>
                    <List text=""/>
                    </Middle>
                    <Buton ref={Bn_ref}>Read the API docs</Buton>

                </Wrapper>
            </Container>
        </>
    )
}

export default Apis;

const Buton = styled.button`
width: 180px;
height: 70px;
border-radius: 10px;
border: none;
color: white;
background-color: #0A0E27;
font-size: 15px;
font-weight: 550;
`
const Middle = styled.div``
const Head = styled.div`
font-size: 80px;
font-weight: 800;
font-family: Georgia, 'Times New Roman', Times, serif;
color: #1D1D1D;
text-align: start;
p{
    font-size: 20px;
font-weight: 400;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}span{
    color: #EB7DA7;
}
@media screen and (max-width: 320px){
width: 100%;
    font-size: 40px;
font-weight: 800;
    
 }
@media screen and (max-width: 375px){
width: 100%;
    font-size: 50px;
font-weight: 800;
    
 }
@media screen and (max-width: 425px){
width: 100%;
    font-size: 50px;
font-weight: 800;
    
 }
`
const Wrapper = styled.div`
width: 80%;
height: 80%;
display: flex;
justify-content: center;
gap: 30px;
flex-direction: column;
flex-wrap: wrap;
@media screen and (max-width: 320px){
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
 }
@media screen and (max-width: 375px){
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 }
@media screen and (max-width: 425px){
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 }
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
padding: 80px 0px;
background-color: #F8FAFD;
`