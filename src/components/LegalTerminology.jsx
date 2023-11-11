import styled from "styled-components";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    title: "임금(연봉)",
    content:
      "근로계약서에는 고용주와 근로자간 협의된 총 임금(연봉)이 반드시 표기되어 있어야 합니다. 기본급, 수당, 상여금 등 임금 구성항목과 임금 지급일, 지급 방법 등도 정해져 있어야 하고요! 임금 지급은 예금통장으로 지불받는 것이 좋습니다.",
  },
  {
    id: "2",
    title: "소정 근로 시간&휴게 시간",
    content:
      "근로기준법에서는 휴게 시간 제외 근로시간을 주 40시간 이하로 규정하고 있어요. 특정한 사유가 있을 시에는 1일 최대 12시간, 주 최대 52시간까지 근로가 가능합니다.",
  },
  {
    id: "3",
    title: "연차&휴가(무급/유급)",
    content: "2018년 6월 관련 법이 개정되면서 1년 미만 신입사원도 11일의 연차 휴가를 사용할 수 있게 되었습니다.",
  },
  //   {
  //     id: "4",
  //     title: "상속",
  //     content:
  //       "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  //   },
  //   {
  //     id: "5",
  //     title: "계약 해지",
  //     content:
  //       "계약 해지는 어떤 계약이 정해진 기간 동안 유효하게 유지되지 않거나, 계약의 조건이 어기어졌을 때, 또는 당사자 중 하나가 계약을 위반했을 때 발생합니다. 계약 해지에는 서면 통지, 소송, 또는 양자 합의 등 다양한 방법이 포함될 수 있습니다.",
  //   },
  //   {
  //     id: "6",
  //     title: "상표권",
  //     content:
  //       "상표권은 상표로 등록된 상표의 소유자에게 주어지는 권리를 의미합니다. 이 권리는 특정한 상표를 특정한 상품 또는 서비스에 사용할 수 있는 권리를 제공하며, 상표의 소유자는 다른 사람이 해당 상표를 무단으로 사용하는 것을 막을 수 있습니다.",
  //   },
];

const LegalTerminology = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(0);
  const wordsPerPage = 1;

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;

  const currentData = DUMMY_DATA.slice(indexOfFirstWord, indexOfLastWord);
  // 페이지 번호를 생성합니다.
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(DUMMY_DATA.length / wordsPerPage); i++) {
    pageNumbers.push(i);
  }

  const groupCount = Math.ceil(pageNumbers.length / 10);
  const firstPageNumber = currentGroup * 10;
  const currentGroupPageNumbers = pageNumbers.slice(firstPageNumber, firstPageNumber + 10);

  return (
    <Wrapper>
      <MainTitle>Legal Terminology</MainTitle>
      <SubTitle>법률 용어 해석</SubTitle>
      <Content>
        {currentData.map((data) => (
          <DataItem key={data.id}>
            <DataTitle>{data.title}</DataTitle>
            <DataContent>{data.content}</DataContent>
          </DataItem>
        ))}
      </Content>
      {currentGroup > 0 && <TextButton onClick={() => setCurrentGroup(currentGroup - 1)}>⬅️</TextButton>}
      {currentGroupPageNumbers.map((number) => (
        <PaginationButton key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
          {number}
        </PaginationButton>
      ))}
      {currentGroup < groupCount - 1 && <TextButton onClick={() => setCurrentGroup(currentGroup + 1)}>➡️</TextButton>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 462px;
  height: 330px; */
  width: 90%;
  height: 80%;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #e4e4e7;
  /* padding: 30px; */
`;

const MainTitle = styled.h4`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 476px;
  height: 230px;
  overflow: hidden;
`;

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const DataTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
`;

const DataContent = styled.p`
  font-size: 0.75rem;
  color: #83838b;
  margin: 0;
`;

const PaginationButton = styled.button`
  border: 1px solid black;
  background-color: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 5px;
  &:focus {
    outline: none;
  }
`;

const TextButton = styled(PaginationButton)`
  border-radius: 5px;
  width: auto;
  padding: 0 10px;
`;

export default LegalTerminology;
