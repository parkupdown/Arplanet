import styled from "styled-components";
import { theme } from "../../style/theme";

export default function LoginHeader() {
  return (
    <StyledLoginHeader>
      <div className="title">
        <span>아르플래닛</span>
      </div>
      <div className="subtitle">
        <span>관리자 페이지 로그인</span>
      </div>
    </StyledLoginHeader>
  );
}

const StyledLoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
  }
  .title {
    text-align: center;
    font-size: ${theme.text.size.large};
    font-weight: ${theme.text.weight.thick};
  }
  .subtitle {
    text-align: center;
    font-size: ${theme.text.size.medium};
    font-weight: ${theme.text.weight.medium};
    opacity: 0.7;
  }
`;
