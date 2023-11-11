import React, { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";

const KEY = import.meta.env.VITE_OPENAI_API_KEY;

const GptPage = () => {
  const configuration = new Configuration({
    apiKey: KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const promptValue = "계약서 종류는"+`${input1}`+"이다. 다음 내용은 계약서 내용이다."+`${input2}`+"위의 내용을 다음 조건을 만족하여 분석하려 한다.[조건] 1.각 항목에 대해서 정확한 용어 문법 및 표현에 대해서 해석할 것 2. 각 항목에 대해서 부적합하거나 모호한  표현이 있는지 알려줄 것 3. 법률관련 용어만 리스트로 출력할것"+"출력 양식은 다음과 같다. [항목별 용어 문법 및 표현 해석] : - 항목번호 :\n - 해석내용 : \n[부적합하거나 모호한 표현] : \n- 항목번호 :\n- 해당내용 : [법률 관련 용어] : \n";

    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptValue,
        temperature: 1,
        max_tokens: 2000,
      });

      setApiResponse(result.data.choices.map((choice) => choice.text).join('\n'));

    } catch (e) {
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="all">
      <div className="chat">
        <form onSubmit={handleSubmit} className="question">
          <div>
            <label htmlFor="Input1">Input 1:</label>
            <textarea
              className="input1area"
              type="text"
              value={input1}
              placeholder="계약서 종류"
              onChange={(e) => setInput1(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="Input2">Input 2:</label>
            <textarea
              className="input2area"
              type="text"
              value={input2}
              placeholder="계약서 내용"
              onChange={(e) => setInput2(e.target.value)}
            ></textarea>
          </div>
          <button disabled={loading} type="submit">
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
        <div className="answer">
          <div className="answerlist">
            <strong>Response:</strong> {apiResponse}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptPage;
