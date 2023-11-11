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
  const [response, setResponse] = useState({ 
    expression: "",
    caution: "",
    legalTerms: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const promptValue =
      "계약서 종류는" +
      `${input1}` +
      "이다. 다음 내용은 계약서 내용이다." +
      `${input2}` +
      "위의 내용을 다음 조건 반드시을 만족하여 분석하려 한다.[조건] 1. 각 항목에 대해서 정확한 용어 문법 및 표현에 대해서 해석할 것 2. 각 항목에 대해서 부적합하거나 모호한 표현이 있는지 려주고 각 항목에 대하여 어떤점을 주의해야하는지 알려줄것 3. 계약서 내용중 법률 단어는 리스트 형태로 단어만 출력해줄것 4. 모든 문장끝에는 줄바꿈 할것 5. 표현해석에서 각 항목의 해석내용이 출력된후에 세미클론(;)을 추가하여 각 항목에대핸 해석을 구분할 수 있도록 할것 6. 주의사항에서 각 항목의 주의사유가 출력된후에만 세미클론(;)을 추가하여 각 항목에대핸 해석을 구분할 수 있도록 할것"
      +"다음은 출력 양식이다. 반드시 준수하여 출력해라. 출력양식 [표현해석] 항목번호 : 해석내용: [주의사항] 항목번호: 해당내용: 주의사유: [법률단어]";

    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptValue,
        temperature: 0.5,
        max_tokens: 4000,
      });

      const choices = result.data.choices[0].text;

      console.log(choices);
      const expression = choices.split("[표현해석]")[1].split("[주의사항]")[0].trim();
      const caution = choices.split("[주의사항]")[1].split("[법률단어]")[0].trim();
      const legalTerms = choices.split("[법률단어]").pop().trim();

      setResponse({
        expression,
        caution,
        legalTerms
      });

    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput1("");
    setInput2("");
  }, [response]);

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
            <strong>Expression:</strong> {response.expression}
            <br />
            <strong>Caution:</strong> {response.caution}
            <br />
            <strong>Legal Terms:</strong> {response.legalTerms}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptPage;