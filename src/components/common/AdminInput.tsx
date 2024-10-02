import styled, { keyframes } from "styled-components";
import { theme } from "../../style/theme";
import { ReactNode } from "react";

interface IProps {
  closeCard: () => void;
  children: ReactNode;
}

export default function AdminInput({ closeCard, children }: IProps) {
  return (
    <StyledAdminInputCard>
      <div className="nav">
        <button className="close" type="button" onClick={closeCard}>
          X
        </button>
      </div>
      {children}
    </StyledAdminInputCard>
  );
}

const fadeIn = keyframes`
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    `;

const StyledAdminInputCard = styled.div`
  width: 30%;
  height: 70%;
  z-index: 999;
  border-radius: 10px;
  position: absolute;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  background-color: ${theme.color.white};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  @media (max-width: ${theme.viewSize.phone}) {
    width: 80%;
    height: 62%;
  }

  .nav {
    display: flex;
    justify-content: end;
    .close {
      color: ${theme.color.black};
      margin-top: 10px;
      margin-right: 10px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      background-color: white;
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.thick};
      cursor: pointer;
    }
  }
  .form form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
