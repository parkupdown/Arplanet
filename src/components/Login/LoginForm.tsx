import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginProps, jwtT } from "../../model/login.model";
import { fetchLogin } from "../../api/login.api";
import { setToken } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();
  const navigator = useNavigate();

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const response = await fetchLogin(data);
    let jwt = response?.headers["authorization"];
    if (jwt) {
      setToken(jwt);
      console.log("jwt 저장");
      // navigator(`/admin`);
      // 여기서 어드민 페이지 개발 시작하면됨
    }
  };

  return (
    <StyledLoginForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("id", {
            required: { value: true, message: "id를 입력해주세요" },
          })}
        />
        <span>{errors.id && errors.id.message}</span>
        <input
          type="text"
          {...register("pw", {
            required: { value: true, message: "password를 입력해주세요" },
          })}
        />
        <span>{errors.pw && errors.pw.message}</span>
        <button type="submit">로그인</button>
      </form>
    </StyledLoginForm>
  );
}
const StyledLoginForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;
