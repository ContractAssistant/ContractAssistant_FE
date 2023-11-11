import styled from "styled-components";
import { useState } from "react";

const GptAnalytics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(0);
  const wordsPerPage = 1;

  // 가정: words는 서버에서 받아온 단어 목록입니다.
  const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "ice cream",
    "jackfruit",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pineapple",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli fruit",
    "vanilla",
    "watermelon",
    "xigua",
    "yellow passionfruit",
    "zucchini",
  ];

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;

  const currentWords = words.slice(indexOfFirstWord, indexOfLastWord);

  // 페이지 번호를 생성합니다.
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(words.length / wordsPerPage); i++) {
    pageNumbers.push(i);
  }

  const groupCount = Math.ceil(pageNumbers.length / 10);
  const firstPageNumber = currentGroup * 10;
  const currentGroupPageNumbers = pageNumbers.slice(firstPageNumber, firstPageNumber + 10);

  return (
    <Wrapper>
      <Header>
        <Title>Analytics</Title>
        <SubTitle>계약서 분석 자료</SubTitle>
      </Header>
      <AnalyticsContent>
        {currentWords.map((word) => (
          <AnalyticsTitle key={word}>{word}</AnalyticsTitle>
        ))}
      </AnalyticsContent>
      <Footer>
        {currentGroup > 0 && <TextButton onClick={() => setCurrentGroup(currentGroup - 1)}>⬅️</TextButton>}
        {currentGroupPageNumbers.map((number) => (
          <PaginationButton key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </PaginationButton>
        ))}
        {currentGroup < groupCount - 1 && <TextButton onClick={() => setCurrentGroup(currentGroup + 1)}>➡️</TextButton>}
      </Footer>
    </Wrapper>
  );
};

export default GptAnalytics;

const Wrapper = styled.div`
  width: auto;
  height: 90%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
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
  margin-top: 1rem;
`;

const Footer = styled.div`
  align-self: center;
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
