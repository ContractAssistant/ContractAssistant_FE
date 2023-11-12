import styled from "styled-components";
import { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";
import useStoreGptData from "../store/useStoreGptData";

const KEY = import.meta.env.VITE_OPENAI_API_KEY;

const ChatForm = () => {
  const [inputContent, setInputContent] = useState("");
  const [chatContents, setChatContents] = useState([]);
  // expression, caution, terminology
  const [expression, setExpression] = useState([]);
  const [caution, setCaution] = useState([]);
  const [terminology, setTerminology] = useState([]);
  const { setTerminologyData, setExpressionData, setCautionData } = useStoreGptData();
  const configuration = new Configuration({
    apiKey: KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setInputContent(e.target.value);
    setInput2(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatContents([...chatContents, inputContent]);
    setInputContent("");
    setLoading(true);

    const prompt2 =
      `${input2}` +
      "이 항목을 위의 예시처럼 분석해서 반드시 다음과 같은 형식으로 출력해줘." +
      "표현해석: {항목 분석내용},\n 유의사항: {모호하거나 주의가 필요한 문장알려주고 이유도 설명},\n 법률용어: {뜻 없이 단어만 리스트 형태로}";
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt2,
        temperature: 0.5,
        max_tokens: 1000,
      });
      console.log(result);
      const lines = result.data.choices[0].text.split("\n");
      console.log("lines: ", lines);

      lines.forEach((item) => {
        if (item.includes("표현해석")) {
          let temp = item.replace("표현해석: ", "");
          setExpression([...expression, temp]);
          setExpressionData(expression);
        } else if (item.includes("유의사항")) {
          // data.유의사항.push(item.replace("유의사항: ", ""));
          let temp = item.replace("유의사항: ", "");
          setCaution([...caution, temp]);
          setCautionData(caution);
        } else if (item.includes("법률용어")) {
          // data.법률용어.push(item.replace("법률용어: ", ""));
          let temp = item.replace("법률용어: ", "");
          temp = temp.split(",");
          temp.map((x) => {
            setTerminology([...terminology, x]);
          });
          setTerminologyData(terminology);
        }
      });
      console.log(expression);
      console.log(caution);
      console.log(terminology);
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  const firstSubmit = async () => {
    setLoading(true);

    const prompt1 =
      "계약서 종류는" +
      `${input1}` +
      "이다. 다음 내용은 계약서 내용이다." +
      "다음은 계약서 항목에 대한 해석, 해당 항목의 유의사항, 법률 용어에 대해서 정보를 제공하는 예시이다. 표현해석 : 1년의 의무기간을 채우지 못하고 중도 퇴사하는 경우, 100만원을 배상하여야 한다. 항목 해석: 1년을 못 채우고 퇴사하는 경우, 저는 회사에 100만원을 배상해야 한다. 유의사항 : 근로기준법은 손해배상액을 미리 정해두는 것을 금지하고 있다. 아무리 근로계약서에 서명했더라도 근로기준법에 위반된 조항은 효력이 없다.법률용어 : 근로기준법, 손해배상액, 근로계약서";

    try {
      await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt1,
        temperature: 0.5,
        max_tokens: 1000,
      });
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 처음 렌더링 시 firstSubmit 호출
    firstSubmit();
  }, []);

  return (
    <Wrapper>
      <MainTitle>Chat</MainTitle>
      <FormWrapper action="" method="" autoComplete="off" onSubmit={handleSubmit}>
        <LabelWrapper>
          <TypeForm
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            type="text"
            name="type"
            required
            placeholder="Please enter the contract type"
          />
          <ChatResult>
            {chatContents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </ChatResult>
          <InputForm
            type="text"
            name="content"
            required
            placeholder="Please include all information relevant to your issue."
            value={inputContent}
            onChange={handleInputChange}
          />
        </LabelWrapper>
        <ButtonWrapper>
          <SubmitBtn type="submit" value={loading ? "Generating..." : "Submit"} disabled={loading} />
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 476px;
  height: 905px; */
  width: 90%;
  height: 93%;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 1rem;
`;

const MainTitle = styled.h4`
  display: flex;
  margin: 0px 0px 15px 0px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 98%;
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const TypeForm = styled.input`
  /* width: 470px; */
  width: calc(100% - 2rem);
  /* height: 44px; */
  height: 2rem;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 1rem;
`;
const ChatResult = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 1rem;
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

const InputForm = styled.textarea`
  width: calc(100% - 2rem);
  height: calc(60% - 2rem);
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 18px;
  resize: none;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitBtn = styled.input`
  /* width: 102px;
  height: 42px; */
  width: 6rem;
  height: 3rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
`;

export default ChatForm;
