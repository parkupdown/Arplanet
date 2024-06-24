import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginProps, jwtT } from "../../model/login.model";
import { fetchLogin } from "../../api/login.api";
import { setToken } from "../../store/authStore";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    // 여기서 이제 back으로 데이터를 보내야함
    const jwt: jwtT = await fetchLogin(data);
    if (jwt) {
      setToken(jwt);
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
