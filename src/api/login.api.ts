import { LoginProps } from "../model/login.model";
import { http } from "./http";

export const fetchLogin = async (params: LoginProps) => {
  const response = await http.get(`/login`, { params: params });
  if (response) {
    return response.data;
  }
  return undefined;
};
