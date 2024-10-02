import styled from "styled-components";
import { useAdminCheck } from "../hooks/useAdminCheck";
import { AdminList } from "../constants/AdminLists";
import { useNavigate } from "react-router-dom";
import { theme } from "../style/theme";

export default function Admin() {
  useAdminCheck();
  const navigator = useNavigate();
  return (
    <>
      <StyledAdmin>
        {AdminList.map((list) => (
          <div
            className="listBox"
            onClick={() => navigator(`/admin/${list.route}`)}
          >
            <span className="title">{list.title}</span>
          </div>
        ))}
      </StyledAdmin>
    </>
  );
}

const StyledAdmin = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  @media (max-width: ${theme.viewSize.phone}) {
    height: 60vh;
  }
  .listBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    border: 0.3px solid black;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 15px 20px;
    }
  }
  .listBox:hover {
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    border: 0.3px solid white;
    transition: all 0.5s ease-in-out;
  }
`;
