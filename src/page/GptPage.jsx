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
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const promptValue = "계약서 종류는" + `${input1}` + "이다. 다음 내용은 계약서 내용이다." + `${input2}` + "위의 내용을 다음 조건을 만족하여 분석하려 한다.[조건] 1.각 항목에 대해서 정확한 용어 문법 및 표현에 대해서 해석할 것 2. 각 항목에 대해서 부적합하거나 모호한 표현이 있는지 알려줄 것 3. 법률관련 용어(뜻 없이)만 리스트로 출력할것" + "출력 양식은 다음과 같다. [항목별 용어 문법 및 표현 해석] : - 항목번호 :\n - 해석내용 : \n[부적합하거나 모호한 표현] : \n- 항목번호 :\n- 해당내용 : [법률 관련 용어] :리스트\n";

    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptValue,
        temperature: 0.5,
        max_tokens: 1000,
        n: 3, // 선택사항 수 (원하는 수로 조정)
      });

      const choices = result.data.choices;

      // 응답을 나누는 기준에 따라 결과를 저장
      setResponse1(choices[0].text.split("[부적합하거나 모호한 표현]")[0]);
      setResponse2(choices[1].text.split("[법률 관련 용어]")[0].split("[부적합하거나 모호한 표현]").pop());
      setResponse3(choices[2].text.split("[법률 관련 용어]").pop());
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 결과가 업데이트될 때마다 input1과 input2 초기화
    setInput1("");
    setInput2("");
  }, [response1, response2, response3]);

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
            <strong>Response 1:</strong> {response1}
            <br />
            <strong>Response 2:</strong> {response2}
            <br />
            <strong>Response 3:</strong> {response3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptPage;
