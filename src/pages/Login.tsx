import styled from "styled-components";
import LoginHeader from "../components/Login/LoginHeader";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  return (
    <StyledLogin>
      <LoginHeader />
      <LoginForm />
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
