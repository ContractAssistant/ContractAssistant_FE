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
        <TitleWrapper>
          <Title>Analytics</Title>
          <SubTitle>계약서 분석 자료</SubTitle>
        </TitleWrapper>
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
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
