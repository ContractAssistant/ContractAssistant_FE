import styled from "styled-components";

const ChatForm = () => {
  return (
    <Wrapper>
      <MainTitle>Chat</MainTitle>
      <FormWrapper action="" method="" autoComplete="off">
        <LabelWrapper>
          <TypeForm
            type="text"
            name="type"
            required
            placeholder="Please enter the contract type"
          />
        </LabelWrapper>
        <LabelWrapper>
          <InputForm
            type="text"
            name="content"
            required
            placeholder="Please include all information relevant to your issue."
          />
        </LabelWrapper>
        <ButtonWrapper>
          <SubmitBtn type="submit" value="Submit" />
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 476px;
  height: 905px;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 45px 23px 23px 23px;
`;

const MainTitle = styled.h4`
  display: flex;
  margin: 0px 0px 15px 0px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 autoo;
`;

const TypeForm = styled.input`
  width: 470px;
  height: 44px;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const InputForm = styled.textarea`
  width: 470px;
  height: 727px;
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
    width: 102px;
    height: 42px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 5px;
`;

export default ChatForm;
