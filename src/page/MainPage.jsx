import styled from "styled-components";
import GptAnalytics from "../components/GptAnalytics";
import ChatForm from "../components/ChatForm";
import ListBar from "../components/ListBar";
import LegalTerminology from "../components/LegalTerminology";
import useModalStore from "../store/useModalStore";
import { useEffect, Suspense } from "react";
import MinWageCal from "../components/MinWageCal";

const MainPage = () => {
  const modalTable = { MinWageCal: <MinWageCal /> };
  const { setShowModal, showModal, modalType } = useModalStore();
  const component = modalType ? modalTable[modalType] : null;
  useEffect(() => {
    setShowModal(false);
  }, []);
  return (
    <GridContainer>
      {showModal && <Suspense fallback={null}>{component}</Suspense>}
      <LeftBar>
        <ListBar />
      </LeftBar>
      <GridItem>
        <ChatForm />
      </GridItem>
      <RightBar>
        <RightBarTop>
          <GptAnalytics />
        </RightBarTop>
        <RightBarBottom>
          <LegalTerminology />
        </RightBarBottom>
      </RightBar>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr 4fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: white;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

const GridItem = styled.div`
  background-color: white;
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
  padding-top: 1rem;
  padding-right: 1rem;
`;

const RightBarTop = styled.div`
  flex: 1;
  height: 51.5%;
  width: 100%;
  background-color: white;
`;

const RightBarBottom = styled.div`
  flex: 1;
  height: 50%;
  width: 100%;
  background-color: white;
`;
export default MainPage;
