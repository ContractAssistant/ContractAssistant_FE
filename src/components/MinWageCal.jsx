import React, { useState } from "react";

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
    <div>
      <div>
        <label htmlFor="workDays">4주 동안 총 근무 일수:</label>
        <input
          type="number"
          id="workDays"
          value={workDays}
          onChange={(e) => setWorkDays(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dailyWorkHours">일일 근무시간:</label>
        <input
          type="number"
          id="dailyWorkHours"
          value={dailyWorkHours}
          onChange={(e) => setDailyWorkHours(e.target.value)}
        />
      </div>
      <button onClick={calculateMinWage}>최저임금 계산</button>
      <div>
        <strong>계산된 최저임금(월): {addCommas(minWage * HourminWage)} 원</strong>
      </div>
    </div>
  );
};

export default MinWageCal;
