import styled from "styled-components";

const ChatForm = () => {
  return (
    <Wrapper>
      <MainTitle>Chat</MainTitle>
      <FormWrapper action="" method="" autoComplete="off">
        <LabelWrapper>
          <TypeForm type="text" name="type" required placeholder="Please enter the contract type" />
          <InputForm type="text" name="content" required placeholder="Please include all information relevant to your issue." />
        </LabelWrapper>
        <ButtonWrapper>
          <SubmitBtn type="submit" value="Submit" />
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 476px;
  height: 905px; */
  width: 90%;
  height: 91.5%;
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
  height: 95%;
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
  width: 100%;
  /* height: 44px; */
  height: 3rem;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const InputForm = styled.textarea`
  /* width: 470px; */
  width: 100%;
  height: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 16px;
  resize: none;
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
