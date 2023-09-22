import React from "react";
import { styled } from "styled-components";

const About  = () =>{
    return(
        <div>
            <Container>
                <Holder>
                    <Hold>
                    <h1>
                    Endless payment possibilities for every<span> individual</span>
                    </h1>
                    <p>Flutterwave offers a host of seamless products for individuals, ensuring smooth transactions and efficient money management</p>
                    </Hold>
                    <CardHold>
                    <Cards>
                  <h4>Shop online</h4>
                  <p>Explore a world of possibilities as you Discover, Shop, and have your purchases conveniently delivered from your cherished online businesses. Embark on a secure shopping e</p>
                    </Cards>
                    <Card2>
                    <h4>Shop online</h4>
                  <p>Explore a world of possibilities as you Discover, Shop, and have your purchases conveniently delivered from your cherished online businesses. Embark on a secure shopping </p>
                    </Card2>
                    <Card3>
                    <h4>Shop online</h4>
                  <p>Explore a world of possibilities as you Discover, Shop, and have your purchases conveniently delivered from your cherished online businesses. Embark on a secure shopping </p>
                    </Card3>
                    </CardHold>
                </Holder>
            </Container>
        </div>
    )
}

export default About;

const Hold = styled.div`
padding: 10px 10px;
text-align: center;
h1{
    font-size: 68px;
    font-weight: 800;
    margin: 0px;
   
}span{
    color: #F1A5C2;
}p{
    margin: 0px;
    font-size: 20px;
    font-weight: 400;
}
@media screen and (max-width: 320px){
    h1{
          font-size: 40px;
    font-weight: 700;
    margin: 0px;
    }p{
        margin: 14px;
    font-size: 17px;
    font-weight: 350;
    }
}
@media screen and (max-width: 375px){
    h1{
          font-size: 45px;
    font-weight: 700;
    margin: 0px;
    }p{
        margin: 14px;
    font-size: 13px;
    font-weight: 250;
    }
}

`
const CardHold = styled.div`
width: 100%;
height: 85%;
display: flex;
position: relative;
/* background-color: red; */

@media screen and (max-width: 320px){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
}
@media screen and (max-width: 375px){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
}
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-direction: column;
}
`
const Cards = styled.div`
width: 45%;
right: 300px;
padding: 15px 10px;
height: 250px;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 15px;
background-color: #363636;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align: start;
transition: all 350ms;
padding: 0px 50px;
&:hover{
    transform: translateX(50px);
   
    @media screen  and (max-width: 320px){
        transform: translateX(0px);
    }
    @media screen  and (max-width: 375px){
        transform: translateX(0px);
    }
}
@media screen and (max-width: 320px){
    width: 65%;
    /* text-align: center; */
    padding: 0px 40px;
    height: 55%;
}
@media screen and (max-width: 375px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
@media screen and (max-width: 500px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
`
const Card3 = styled.div`
width: 45%;
padding: 15px 10px;
/* height: 250px; */
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 15px;
background-color: #363636;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align: start;
padding: 0px 50px;
transition: all 350ms;
&:hover{
    transform: translateX(50px);
   /* margin-left: 50px; */
   @media screen  and (max-width: 320px){
        transform: translateX(0px);
    }
    @media screen  and (max-width: 375px){
        transform: translateX(0px);
    }
    @media screen  and (max-width: 500px){
        transform: translateX(0px);
    }
}
@media screen and (max-width: 320px){
    width: 65%;
    /* text-align: center; */
    padding: 0px 40px;
    height: 55%;
}
@media screen and (max-width: 375px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
@media screen and (max-width: 500px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
`
const Card2 = styled.div`
width: 45%;
padding: 15px 10px;
height: 250px;
display: flex;
justify-content: center;
flex-direction: column;
border-radius: 15px;
background-color: #363636;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
text-align: start;
padding: 0px 50px;
transition: all 350ms;
&:hover{
    transform: translateX(50px);
    @media screen  and (max-width: 320px){
        transform: translateX(0px);
    }
    @media screen  and (max-width: 375px){
        transform: translateX(0px);
    }
}
@media screen and (max-width: 320px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}@media screen and (max-width: 375px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
@media screen and (max-width: 500px){
    width: 65%;
    text-align: center;
    padding: 0px 40px;
    height: 55%;
}
`
const Holder = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 30px;
color: white;
padding: 50px 0px;
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #1D1D1D;
padding: 200px 0;
`