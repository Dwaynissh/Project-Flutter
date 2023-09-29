import styled from 'styled-components'

const Endlesspay = () => {
  return (
    <div>
        <WholeSection>
            <WholeSectionWrapp>
                <AllSection>

                </AllSection>
                <BottomSection>

                </BottomSection>
            </WholeSectionWrapp>
        </WholeSection>
    </div>
  )
}

export default Endlesspay

const BottomSection = styled.div`
height: 40%;
width: 80%;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
background-color: blue;
`;
const AllSection = styled.div`
height: 60%;
width: 80%;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
background-color: green;
`;
const WholeSectionWrapp = styled.div`
height: 100%;
width: 80%;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column  ;
`;
const WholeSection = styled.div`
width: 100%;
background-color: #f8fafd;
display: flex;
justify-content: center;
align-items: center; 
`;