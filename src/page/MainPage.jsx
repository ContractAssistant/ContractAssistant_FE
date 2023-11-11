import styled from "styled-components";

const Main = () => {
  return (
    <GridContainer>
      <LeftBar>sidebar</LeftBar>
      <GridItem>main</GridItem>
      <RightBar>sidebar</RightBar>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100vh;
  background-color: white;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

const GridItem = styled.div`
  background-color: gray;
  border: 1px dotted black;
  margin: 1px;
  @media (max-width: 768px) {
    grid-row: 2;
  }
`;

const LeftBar = styled(GridItem)`
  background-color: white;
  grid-row: span 3;
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;
const RightBar = styled(GridItem)`
  background-color: white;
  grid-row: span 3;
  @media (max-width: 768px) {
    grid-row: 3;
  }
`;
export default Main;
