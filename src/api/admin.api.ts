import { httpAuth } from "./http";

export const fetchCheckAdmin = async () => {
  const response = await httpAuth.get(`/admin/check`);
  console.log(response);
};
