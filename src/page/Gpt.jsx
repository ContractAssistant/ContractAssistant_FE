import React, { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";


const KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Gpt =()=>{
    const configuration = new Configuration({
        apiKey: KEY,
    });

    const openai = new OpenAIApi(configuration);
    const [input1,setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [response, setResponse] = useState({
        ans:"",
    });

    const [loading, setLoading] = useState(false);

    const firstSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const prompt1 = "계약서 종류는" +
        `${input1}` +
        "이다. 다음 내용은 계약서 내용이다."
        +
        "다음은 계약서 항목에 대한 해석, 해당 항목의 유의사항, 법률 용어에 대해서 정보를 제공하는 예시이다. [항목내용] : 1년의 의무기간을 채우지 못하고 중도 퇴사하는 경우, 100만원을 배상하여야 한다. 항목 해석: 1년을 못 채우고 퇴사하는 경우, 저는 회사에 100만원을 배상해야 한다. [유의사항] : 근로기준법은 손해배상액을 미리 정해두는 것을 금지하고 있다. 아무리 근로계약서에 서명했더라도 근로기준법에 위반된 조항은 효력이 없다.[법률용어] : 근로기준법, 손해배상액, 근로계약서";

        try {
          const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:prompt1,
            temperature: 0.5,
            max_tokens: 1000,
          });
        } catch (e) {
          console.error("Error:", e);
        } finally {
          setLoading(false);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const prompt2 = `${input2}`+"이 항목을 위의 예시처럼 분석해줘"
        try {
          const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:prompt2,
            temperature: 0.5,
            max_tokens: 1000,
          });
          setResponse({
            ans,
          });
        } catch (e) {
          console.error("Error:", e);
        } finally {
          setLoading(false);
        }
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
                <strong>Response:</strong> {response}
                <br />
              </div>
            </div>
          </div>
        </div>
    );
};  

export default Gpt;