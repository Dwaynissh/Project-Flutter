
import styled from "styled-components"

const Getstarted = () => {
  return (
    <div>
        <Getstartt>
                <Allwrapp>
                    <ContentWrapp>
                        <Contents>
                                <Header><h1>Ready to get started?</h1></Header>
                                <Text><p>Create an account and instantly start accepting payments, selling your <br /> beautiful products online and building financial tools.</p></Text>
                            <Btns>
                                <Button>Upload</Button>
                            </Btns>
                        </Contents>
                    </ContentWrapp>
                </Allwrapp>
        </Getstartt>
    </div>
  )
}

export default Getstarted

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
}`

const Btns = styled.div`
width: 90%;
background-color: green;    
display: flex;
`;
const Text = styled.div`
font-size: 18px; 
width: 90%;
color: white;
@media screen and (max-width: 500px){
    
    p{
        font-size: 17px;
    }
}
`;
const Header = styled.div`
width: 90%;
font-size: 50px;
font-weight: bold;
color: white;

@media screen and (max-width: 500px){
    
    h1{
        font-size: 25px;
    }
}


`;
const Contents = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;  
flex-direction: column;
`;
const ContentWrapp = styled.div`
display: flex;
justify-content: center;
align-items: center;  
`;
const Allwrapp = styled.div`
height: 65%;
width: 60%;
background-color: #1d1d1d;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 5px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center; 
@media screen and (max-width: 768px){
    width: 90%;
    align-content: flex-start;
};
@media screen and (max-width: 500px){
    width: 90%;
    align-content: flex-start;
    font-size: 25px;
} 
`;

const Getstartt = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-grow: 1;
flex-wrap: wrap;
justify-content: center;
align-items: center;


`;