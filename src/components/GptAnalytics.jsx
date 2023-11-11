import styled from "styled-components";

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
  {
    id: "4",
    title: "상속",
    content:
      "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  },
  {
    id: "4",
    title: "상속",
    content:
      "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  },
  {
    id: "4",
    title: "상속",
    content:
      "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  },
  {
    id: "4",
    title: "상속",
    content:
      "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  },
  {
    id: "4",
    title: "상속",
    content:
      "상속은 죽은 사람으로부터 그의 재산, 채권, 부채 등의 권리와 의무를 그의 법정 상속인에게 이전하는 것을 말합니다. 상속은 법률에 따라 이뤄지며, 상속인은 상속에 따른 재산을 상속인 간 협의 또는 법정 분할에 따라 나눌 수 있습니다.",
  },
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

const GptAnalytics = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Analytics</Title>
        <SubTitle>계약서 분석 자료</SubTitle>
      </Header>

      <AnalyticsContent>
        {DUMMY_DATA.map((word, index) => (
          <ContentWrapper key={index}>
            <AnalyticsTitle key={word}>{index + 1}</AnalyticsTitle>
            <AnalyticsTitle key={word}>{word.title}</AnalyticsTitle>
            <AnalyticsTitle key={word}>{word.content}</AnalyticsTitle>
          </ContentWrapper>
        ))}
      </AnalyticsContent>
    </Wrapper>
  );
};

export default GptAnalytics;

const Wrapper = styled.div`
  /* width: 462px;
  height: 330px; */
  width: 90%;
  height: 80%;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #e4e4e7;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
`;

const Title = styled.p`
  padding: 0;
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
`;

const SubTitle = styled.p`
  padding: 0;
  margin: 0;
  color: #000;
  color: #000;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AnalyticsTitle = styled.p`
  padding: 0;
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AnalyticsContent = styled.div`
  height: 100%;
  margin-top: 1rem;
  overflow: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 8px; /* Width of scrollbar */
    height: 0px; /* Set to 0 for horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000; /* Scrollbar color */
    border-radius: 4px; /* Round the corners of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of scrollbar track */
  }
`;
const ContentWrapper = styled.div`
  margin-bottom: 1rem;
`;
