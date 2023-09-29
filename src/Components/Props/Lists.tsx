import { styled } from "styled-components"

type iProps = {
    text: string;

}

export default function List ({text}:iProps){
    return(
        <>
        <Container>
           
                <Hold>
                <Circle/>
                <ContentText>Quick Transfers</ContentText>
                </Hold>
                <Hold>
                <Circle/>
                <ContentText>Initiate one-time and recurring payments</ContentText>
                </Hold>
                <Hold>
                <Circle/>
                <ContentText>Payment verification</ContentText>
                </Hold>
                <Hold>
                <Circle/>
                <ContentText>Instant virtual cards creation</ContentText>
                </Hold>
                <Hold>
                <Circle/>
                <ContentText>Customer verification</ContentText>
                </Hold>
        </Container>
        </>
    )
}



const Hold = styled.div`
width: 100%;
height: 42px;
display: flex;
align-items: center;
gap: 10px;
`
const Circle = styled.div`
width: 20px;
height: 15px;
border-radius: 100px;
background-color: #0A0E27;
`
const ContentText = styled.div`
@media screen and (max-width: 320px){
    display: flex;
    width: 90%;
}
@media screen and (max-width: 375px){
    display: flex;
    width: 90%;
}
`

const Container = styled.div`
width: 320px;
height: 220px;
/* background-color: yellow; */
display: flex;
align-items: center;
flex-direction: column;
`