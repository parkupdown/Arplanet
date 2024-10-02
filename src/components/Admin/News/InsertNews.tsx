import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import {
  NewsInputField,
  TinsertNewsProps,
} from "../../../constants/NewsInputField";
import { TadminNews } from "../../../model/admin.model";
import { error } from "console";
import { INews } from "../../../model/News.model";
import { insertNewsData } from "../../../api/admin.api";

interface Props {
  closeCard: () => void;
}

export default function InsertNews({ closeCard }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INews>();
  const onSubmit: SubmitHandler<INews> = (data) => {
    insertNewsData(data);
    closeCard();
  };

  return (
    <StyledInsertNews>
      <form onSubmit={handleSubmit(onSubmit)}>
        {NewsInputField.map((field) => (
          <div className="inputBox">
            <label>{field.labelName}</label>
            <input
              {...register(field.valueName, { required: "필수입력사항" })}
              type={field.valueName === "date" ? "date" : "text"}
            />
            {field.valueName === "date" && <span>{errors?.date?.message}</span>}
            {field.valueName === "media" && (
              <span>{errors?.media?.message}</span>
            )}
            {field.valueName === "title" && (
              <span>{errors?.title?.message}</span>
            )}
            {field.valueName === "url" && <span>{errors?.url?.message}</span>}
          </div>
        ))}
        <button type="submit">등록</button>
      </form>
    </StyledInsertNews>
  );
}

const StyledInsertNews = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .inputBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }
    label {
      font-size: ${theme.text.size.medium};
      font-weight: ${theme.text.weight.medium};
      @media (max-width: ${theme.viewSize.phone}) {
        font-size: ${theme.text.size.medium};
        font-weight: ${theme.text.weight.medium};
      }
    }
    input {
      border-radius: 5px;
      border: 0.8px black solid;
      padding: 5px 8px;
    }
    button {
      background-color: ${theme.color.white};
      border-radius: 5px;
      border: 0.2px black dotted;
      margin-top: 10px;
      padding: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: ${theme.color.black};
      color: ${theme.color.white};
      transition: 0.3s all ease-in-out;
    }
  }
`;
