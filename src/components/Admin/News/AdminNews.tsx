import styled from "styled-components";
import { useState } from "react";
import { useAdminCheck } from "../../../hooks/useAdminCheck";
import { useAdminNews } from "../../../hooks/useAdminNews";
import AdminInput from "../../common/AdminInput";
import { theme } from "../../../style/theme";
import InsertNews from "./InsertNews";

export default function AdminNews() {
  useAdminCheck();
  const { adminNews } = useAdminNews();
  const [cardStatus, setCardStatus] = useState<boolean>(false);
  const openCard = () => {
    setCardStatus(true);
  };
  const closeCard = () => {
    setCardStatus(false);
  };
  return (
    <StyledAdminNews>
      {cardStatus && (
        <AdminInput closeCard={closeCard}>
          <InsertNews closeCard={closeCard} />
        </AdminInput>
      )}
      <div className="header">
        <button type="button" onClick={openCard}>
          추가
        </button>
      </div>
      <div className="standard">
        <span className="media">미디어</span>
        <span className="title">제목</span>
        <span className="date">날짜</span>
      </div>
      {adminNews.map((data) => (
        <div className="content">
          <span className="media">{data.media}</span>
          <span className="title">{data.title}</span>
          <span className="date">{data.date}</span>
        </div>
      ))}
    </StyledAdminNews>
  );
}
const StyledAdminNews = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    button {
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: ${theme.color.black};
      color: ${theme.color.white};
      transition: 0.3s all ease-in-out;
    }
  }
  @media (max-width: ${theme.viewSize.phone}) {
    padding: 10px 20px;
  }

  .standard {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid black;
    span {
      padding: 30px 0px;
      font-size: ${theme.text.size.semismall};
      font-weight: ${theme.text.weight.semithin};
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
    }
    .title {
      width: 60%;
    }
    .media {
      width: 20%;
    }
    .date {
      width: 20%;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    border-top: 0.3px solid black;
    @media (max-width: ${theme.viewSize.phone}) {
      padding: 25px 0;
    }
    .title {
      font-size: ${theme.text.size.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.small};
      }
      width: 60%;
      text-align: center;
    }
    .media {
      font-size: ${theme.text.size.semismall};
      width: 20%;
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.verysmall};
      }
    }
    .date {
      font-size: ${theme.text.size.small};
      opacity: 0.7;
      width: 20%;
      text-align: center;
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.verysmall};
      }
    }
    transition: transform 0.3s ease;
  }
  .content:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
