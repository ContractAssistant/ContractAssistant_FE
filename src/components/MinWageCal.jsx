import { useState } from "react";
import styled from 'styled-components';

const HourminWage = 9860;
const MinWageCal = () => {
  const [workDays, setWorkDays] = useState(0);
  const [dailyWorkHours, setDailyWorkHours] = useState(0);
  const [minWage, setMinWage] = useState(0);

  // 쉼표를 추가해주는 함수
  const addCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculateMinWage = () => {
    // 4주 동안 근무 일수
    const totalWorkDays = workDays;

    // 주휴수당 여부에 따라 계산
    const totalWorkHours = totalWorkDays * dailyWorkHours;
    const isEligibleForOvertime = totalWorkHours / 4 > 15;

    if (isEligibleForOvertime) {
      // 주휴수당 지급하는 경우
      const totalHoursWithOvertime = totalWorkDays * dailyWorkHours + 4 * dailyWorkHours;
      setMinWage(totalHoursWithOvertime);
    } else {
      // 주휴수당 지급하지 않는 경우
      setMinWage(totalWorkHours);
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Title htmlFor="workDays">4주 동안 총 근무 일수</Title>
        <Inputed
          type="number"
          id="workDays"
          value={workDays}
          onChange={(e) => setWorkDays(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Title htmlFor="dailyWorkHours">일일 근무시간</Title>
        <Inputed
          type="number"
          id="dailyWorkHours"
          value={dailyWorkHours}
          onChange={(e) => setDailyWorkHours(e.target.value)}
        />
      </InputWrapper>
      <WorkDays>
        <Hightlight>계산된 최저임금(월): {addCommas(minWage * HourminWage)} 원</Hightlight>
      </WorkDays>
      <ButtonWrapper>
        <Cancel>Cancel</Cancel>
        <Calculated onClick={calculateMinWage}>최저임금 계산</Calculated>
      </ButtonWrapper>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: 255px;
  height: 255px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #D7D7D7;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const WorkDays = styled.div`
  width: 245px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  margin: 10px 3px 3px 3px;
`;

const Hightlight = styled.strong`
  color: #ffffff;
  font-size: 0.85rem;
`;

const Title = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Calculated = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  font-size: 0.75rem;
  background-color: #000000;
  color: #ffffff;
  margin: 20px 3px 5px 3px;
  cursor: pointer;
`;

const Cancel = styled.button`
 width: 90px;
  height: 30px;
  border-radius: 5px;
  font-size: 0.75rem;
  border: 2px solid #D7D7D7;
  font-weight: bold;
  margin: 20px 3px 5px 3px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

const Inputed = styled.input`
  width: 235px;
  height: 20px;
  border-radius: 5px;
  margin: 5px;
`;


export default MinWageCal;
