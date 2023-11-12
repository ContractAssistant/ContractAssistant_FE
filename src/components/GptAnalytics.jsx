import styled from "styled-components";
import useStoreGptData from "../store/useStoreGptData";

const gptData = [
  {
    id: "1",
    expression: `표현해석]
    항목번호 1: "을"의 담당업무는 고객응대 서비스, 두피 모발관리로 한다. 고객 관리 후 뒷 마무리, 사용한 물건은 바로 쓸고 닦기로 한다.;
    항목번호 2: "을"의 근로시간은 시작시간 10:00부터 마감시간 20:00까지이며, 주 1회 휴무(화요일, 수요일 중 택1) 및 예약이 없을 시 자유시간으로 휴게시간을 정한다(기본휴게시간 : 3시간). 시간은 "갑"의 업무형평상 변경될 수 있다.;
    항목번호 3: "갑"은 "을"에게 수습기간(2개월간) 동안 월급 140만원, 식대 10만원, 포함 1500000 원을 월 1회(매달 10일) 통장으로 지급하며, 매출 6000000 달성시 인센티브 5%를 함께 지급한다.;
    항목번호 4: "을"의 계약기간은 계약체결일로부터 2개월 간으로 하며, 계약의 갱신은 계약 만료일 1개월 이전에 하며, 어느 일방의 계약해지와 의사표시가 없을 경우에는 (다시결정)개월 간 자동 연장된다.;
    항목번호 5: 업무상 획득한 업무관련정보는 재직 중 혹은 퇴직후에도 누설하여서는 아니되며, "갑"의 허가 없이 문서나 물품 등을 반출하거나 타인에게 열람 또는 인도 하여서는 아니된다. (고객정보, 고객과의 대화 속 나눈 이야기 등 포함);
    `,
    caution: `[주의사항]
      항목번호 2: 근로시간은 "갑"의 업무형평상 변경될 수 있다. 세미클론 추가;
      항목번호 3: 수습기간 동안의 월급 및 인센티브 지급 조건이 명확하게 정의되어 있지만, 그 이후 급여 및 인센티브 지급 조건이 명시되어 있지 않아 주의가 필요하다. 세미클론 추가;
      항목번호 4: 계약의 갱신 및 자동 연장 조건이 명확히 정의되어 있으나, 갱신 시의 조건에 대한 구체적인 내용이 없어 주의가 필요하다. 세미클론 추가;
      
      `,
    legalterm: `[법률단어]
    1. 근로계약서;
    2. 계약기간;
    3. 수습기간;
    4. 인센티브;
    5. 누설;
    6. 허가;
    7. 계약해지;
    8. 의사표시;
    9. 자동 연장.`,
  },
];

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
  // // 표현해석 추출
  // const expression = gptData.map((data) => data.expression.trim());

  // // 주의사항 추출
  // let caution = gptData.map((data) => data.caution.trim());
  // caution = caution.toString().split("\n");
  // console.log("caution", caution);

  // // 법률 단어 추출
  // const legalTerms = gptData.map((data) => data.legalterm.trim());

  const { expressionData: expression, cautionData: caution, terminologyData: terminology } = useStoreGptData();
  // 결과 출력
  console.log("표현해석:", expression);
  console.log("주의사항:", caution);
  console.log("법률 단어:", terminology);

  return (
    <Wrapper>
      <Header>
        <Title>Analytics</Title>
        <SubTitle>계약서 분석 자료</SubTitle>
      </Header>

      <AnalyticsContent>
        <ContentWrapper>
          {expression && expression.map((word, index) => <AnalyticsTitle key={index}>{word}</AnalyticsTitle>)}
          {caution && caution.map((word, index) => <AnalyticsTitle key={index}>{word}</AnalyticsTitle>)}
        </ContentWrapper>
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
  margin-bottom: 1rem;
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
