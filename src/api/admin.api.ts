import { INews } from "../model/News.model";
import { httpAuth } from "./http";

export const fetchCheckAdmin = async () => {
  const response = await httpAuth.get(`/admin/check`);
  console.log(response);
};

export const fetchNewsData = async () => {
  const response = await httpAuth.get(`/admin/news`);
  if (response) {
    return response.data;
  }
  return undefined;
};

export const insertNewsData = async (data: INews) => {
  const response = await httpAuth.post(`/admin/news`, data);
  return response;
};
