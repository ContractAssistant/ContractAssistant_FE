import styled from "styled-components";

const LoginForm = () => {
  return (
    <Wrapper>
      <MainTitle>EZPT</MainTitle>
      <FormWrapper action="" method="" autoComplete="off">
        <LabelWrapper>
          <Title>ID</Title>
          <InputForm type="text" name="id" />
        </LabelWrapper>
        <LabelWrapper>
          <Title>Password</Title>
          <InputForm type="password" name="password" required />
        </LabelWrapper>
        <LabelWrapper>
          <LoginBtn type="submit" value="SignIn" />
        </LabelWrapper>
        <SmallTitle>Forgot your password?</SmallTitle>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const InputForm = styled.input`
  width: 380px;
  height: 50px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 15px;
`;

const LoginBtn = styled.input`
  width: 380px;
  height: 60px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 15px;
  margin: 60px 0px 0px 0px;
`;

const SmallTitle = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default LoginForm;
